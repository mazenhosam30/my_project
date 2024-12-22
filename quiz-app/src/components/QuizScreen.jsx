import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionCard from './QuestionCard';

const QuizScreen = () => {
  const location = useLocation();
  const { name } = location.state || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  const questions = [
    { question: 'In what year did the US host the FIFA World Cup?', options: ['1986', '1994', '2002', '2010'], answer: '1994' },
    // Add more questions
  ];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    return <div>Your Score: {score}/{questions.length}</div>;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="p-4 text-lg font-semibold">Welcome, {name}</header>
      <div className="flex-1 flex flex-col justify-center items-center">
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
};

export default QuizScreen;
