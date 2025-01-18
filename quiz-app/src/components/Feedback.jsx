import React from 'react';

const Feedback = ({ message }) => {
  if (!message) return null;
  return (
    <div className="feedback">
      <p>{message}</p>
    </div>
  );
};

export default Feedback;