import React from 'react';

const QuizResultsScreen = ({ score, totalQuestions, onTryAgain, onGoHome }) => {
  return (
    <div className="quiz-results flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-200 to-teal-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Quiz Results</h1>
      <p className="text-2xl mb-6">
        Your Score: <span className="font-extrabold">{score}/{totalQuestions}</span>
      </p>
      <div className="flex gap-4">
        <button onClick={onTryAgain} className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white font-semibold">
          Try Again
        </button>
        <button onClick={onGoHome} className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded text-white font-semibold">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default QuizResultsScreen;