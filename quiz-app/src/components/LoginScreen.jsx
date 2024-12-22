import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      navigate('/quiz', { state: { name } });
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-teal-100">
      <h1 className="text-4xl font-bold mb-8">Quiz Khelo</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded w-80 text-center"
      />
      <button
        onClick={handleStart}
        className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
      >
        Start
      </button>
    </div>
  );
};

export default LoginScreen;
