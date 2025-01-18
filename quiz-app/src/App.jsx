import React, { useState } from 'react';
import QuizScreen from './components/QuizScreen';
import LoginScreen from './components/LoginScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import QuizResultsScreen from './components/QuizResultsScreen';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [leaderboard, setLeaderboard] = useState([
    { username: 'Alice', score: 9 },
    { username: 'Bob', score: 7 },
    { username: 'Charlie', score: 5 },
  ]);
  const [view, setView] = useState('login');

  const handleLogin = (username) => {
    setUsername(username);
    setView('quiz');
  };

  const handleQuizFinish = (finalScore, totalQuestions) => {
    setScore(finalScore);
    setTotalQuestions(totalQuestions);
    setLeaderboard([...leaderboard, { username, score: finalScore }].sort((a, b) => b.score - a.score));
    setView('results');
  };

  const handleRestart = () => {
    setView('quiz');
  };

  const handleGoHome = () => {
    setView('login');
  };

  return (
    <div>
      {view === 'login' && <LoginScreen onLogin={handleLogin} />}
      {view === 'quiz' && <QuizScreen onQuizFinish={handleQuizFinish} />}
      {view === 'results' && (
        <QuizResultsScreen score={score} totalQuestions={totalQuestions} onTryAgain={handleRestart} onGoHome={handleGoHome} />
      )}
      {view === 'leaderboard' && <LeaderboardScreen leaderboard={leaderboard} />}
    </div>
  );
};

export default App;