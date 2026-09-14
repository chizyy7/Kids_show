import React from 'react';
import PropTypes from 'prop-types';

const EndScreen = ({ onRestart }) => {
  return (
    <div className="end-screen">
      <h2>Great job, little explorer!</h2>
      <p>Thanks for watching Leo & Mimi's Little World.</p>
      <button className="start-btn" onClick={onRestart}>
        Watch Again
      </button>
    </div>
  );
};

EndScreen.propTypes = {
  onRestart: PropTypes.func.isRequired
};

export default EndScreen;
