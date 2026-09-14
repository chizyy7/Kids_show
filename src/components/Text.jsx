import React from 'react';
import PropTypes from 'prop-types';

const TextDisplay = ({ text, size, color, x, y, duration }) => {
  // We'll use a simple div with styling
  const style = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    fontSize: size === 'large' ? '3rem' : '1.5rem',
    color: color,
    pointerEvents: 'none'
  };

  return (
    <div style={style}>
      {text}
    </div>
  );
};

TextDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  color: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
};

TextDisplay.defaultProps = {
  size: 'large',
  color: 'black'
};

export default TextDisplay;
