import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import QuizScreen from './components/QuizScreen';
import LeaderboardScreen from './components/LeaderboardScreen';

function App() {
  const leaderboard = [
    { name: 'David', score: 9 },
    { name: 'John', score: 8 },
    { name: 'Michael', score: 7 },
    // Add more players
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/leaderboard" element={<LeaderboardScreen leaderboard={leaderboard} />} />
      </Routes>
    </Router>
  );
}

export default App;
