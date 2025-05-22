import React from 'react';
import './CreatePostButton.css';

const CreatePostButton = ({ label = 'Create Post', disabled = false, onClick }) => {
  return (
    <button
      type="button"
      className="create-post-button"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CreatePostButton;