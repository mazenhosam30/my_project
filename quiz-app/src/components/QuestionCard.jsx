import React from 'react';
import Feedback from './Feedback';

const QuestionCard = ({
  question,
  onAnswer,
  selectedAnswer,
  showFeedback,
  feedbackMessage,
  handleSubmit,
}) => (
  <div className="bg-white shadow rounded-lg p-6 max-w-lg w-full">
    <h2 className="text-lg font-bold mb-4">{question.question.replace(/&quot;/g, '"')}</h2>
    {[...question.incorrect_answers, question.correct_answer]
      .sort()
      .map((answer, index) => (
        <button
          key={index}
          onClick={() => {
            console.log(`Answer clicked: ${answer}`); // Debug: Log the clicked answer
            onAnswer(answer);
          }}
          className={`block w-full text-left p-2 rounded mb-2
            ${selectedAnswer === answer ? 'bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {answer}
        </button>
      ))}
    {showFeedback && <Feedback message={feedbackMessage} />}
    {!showFeedback && (
      <button
        onClick={() => {
          console.log('Submit button clicked'); // Debug: Log the submit button click
          handleSubmit();
        }}
        disabled={selectedAnswer === null}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    )}
  </div>
);

export default QuestionCard;