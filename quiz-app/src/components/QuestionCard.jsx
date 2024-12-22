import React from 'react';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-lg w-full">
      <h2 className="text-lg font-bold mb-4">{question.question}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option === question.answer)}
          className="block w-full text-left bg-gray-200 p-2 rounded mb-2 hover:bg-gray-300"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
