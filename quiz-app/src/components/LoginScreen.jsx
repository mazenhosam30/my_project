import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-teal-200">
      <div className="text-4xl font-bold mb-8">Quiz Party</div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button onClick={handleLogin} className="p-2 bg-orange-400 text-white rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;