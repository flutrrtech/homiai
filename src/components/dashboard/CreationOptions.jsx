import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreationOptions = () => {
  const navigate = useNavigate();

  const handleAdWriting = () => {
    navigate('/services/ad-writing');
  };

  const handleBlogWriting = () => {
    navigate('/services/blog-writing');
  };

  return (
    <div className="creation-options">
      <h2>Choose Your Service</h2>
      <div className="options">
        <button onClick={handleAdWriting}>Ad Writing</button>
        <button onClick={handleBlogWriting}>Blog Writing</button>
      </div>
    </div>
  );
};

export default CreationOptions;