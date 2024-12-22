import React from 'react';

const LeaderboardScreen = ({ leaderboard }) => {
  return (
    <div className="h-screen bg-gray-100">
      <header className="p-4 text-lg font-semibold">Leaderboard</header>
      <div className="p-4">
        {leaderboard.map((player, index) => (
          <div key={index} className="flex items-center justify-between bg-white shadow rounded p-4 mb-2">
            <div className="flex items-center">
              <span className="font-bold mr-4">{index + 1}</span>
              <span>{player.name}</span>
            </div>
            <span>{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardScreen;
