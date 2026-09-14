import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ onStart }) => {
  return (
    <div className="title-screen">
      <h1>Leo & Mimi's Little World</h1>
      <p>Learn About Colors</p>
      <button className="start-btn" onClick={onStart}>
        Start Episode
      </button>
    </div>
  );
};

Title.propTypes = {
  onStart: PropTypes.func.isRequired
};

export default Title;
