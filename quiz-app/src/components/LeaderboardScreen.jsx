import React from 'react';

const LeaderboardScreen = ({ leaderboard }) => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="p-4 text-lg font-semibold">Leaderboard</header>
      <div className="flex-1 flex flex-col items-center">
        <table className="table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{entry.username}</td>
                <td className="border px-4 py-2">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardScreen;
