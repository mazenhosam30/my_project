import React, { useState, useEffect } from 'react';
import fetchWithRetry from '../utils/fetchWithRetry';
import Feedback from './Feedback';
import QuestionCard from './QuestionCard';
import FilterDropdown from './FilterDropdown';

const QuizScreen = ({ username, onQuizFinish }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [filter, setFilter] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await fetchWithRetry('https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple');
        if (data.results.length === 0) throw new Error('No questions found');
        setQuestions(data.results);
        setFilteredQuestions(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (filter) {
      setFilteredQuestions(
        questions.filter((q) => q.difficulty.toLowerCase().includes(filter.toLowerCase()))
      );
    } else {
      setFilteredQuestions(questions);
    }
  }, [filter, questions]);

  const handleAnswerSelect = (answer) => {
    console.log('Selected Answer:', answer); // Debug: Log the selected answer
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    console.log('Submit function called'); // Debug: Log the submit function call
    if (selectedAnswer === null) {
      alert('Please select an answer before proceeding.');
      return;
    }

    const correctAnswer = filteredQuestions[currentQuestionIndex].correct_answer;
    console.log('Correct Answer:', correctAnswer); // Debug: Log the correct answer

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
      setFeedbackMessage('Correct! 🎉');
    } else {
      setFeedbackMessage(`Incorrect. The correct answer is: ${correctAnswer}`);
    }

    setShowFeedback(true);

    // Automatically move to the next question after 10 seconds
    setTimeout(() => {
      setShowFeedback(false);
      setFeedbackMessage('');
      setSelectedAnswer(null);

      if (currentQuestionIndex + 1 < filteredQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        onQuizFinish(score + (selectedAnswer === correctAnswer ? 1 : 0), filteredQuestions.length);
      }
    }, 2500); // 10000 milliseconds = 10 seconds
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setFeedbackMessage('');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-teal-200 to-teal-500 ">
      <header className="p-6 text-4xl font-bold mb-8 ">Welcome, {username}</header>
      <div className="flex-1 flex flex-col justify-center items-center ">
        {currentQuestionIndex < filteredQuestions.length ? (
          <QuestionCard
            question={filteredQuestions[currentQuestionIndex]}
            onAnswer={handleAnswerSelect}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
            feedbackMessage={feedbackMessage}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div>
            <h2>Quiz Complete!</h2>
            <p>Your Score: {score}/{filteredQuestions.length}</p>
            <button onClick={handleRestart}>Restart Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;