import React from 'react';
import PropTypes from 'prop-types';
import './Animations.css';

const Character = ({ name, action, x, y, scale = 1 }) => {
  // Map character name to SVG file
  const src = `/assets/characters/${name}.svg`;
  
  // Determine animation class based on action
  let animClass = '';
  switch (action) {
    case 'idle':
      animClass = 'idle-movement';
      break;
    case 'idle-movement':
      animClass = 'idle-movement';
      break;
    case 'blink':
      animClass = 'blink';
      break;
    case 'bounce':
      animClass = 'bounce';
      break;
    case 'wave':
      animClass = 'wave';
      break;
    case 'look-left':
      animClass = 'look-left';
      break;
    case 'look-right':
      animClass = 'look-right';
      break;
    case 'look-up':
      animClass = 'look-up';
      break;
    case 'look-down':
      animClass = 'look-down';
      break;
    case 'point':
      animClass = 'point';
      break;
    case 'ask':
      animClass = 'ask';
      break;
    case 'smile':
      animClass = 'smile';
      break;
    case 'celebrate':
      animClass = 'celebrate';
      break;
    case 'enter-left':
      animClass = 'enter-left';
      break;
    case 'enter-right':
      animClass = 'enter-right';
      break;
    case 'enter-bottom':
      animClass = 'enter-bottom';
      break;
    case 'talking':
      animClass = 'talking';
      break;
    case 'surprised':
      animClass = 'surprised';
      break;
    case 'jumping':
      animClass = 'jumping';
      break;
    default:
      animClass = 'idle-movement';
  }
  
  // Position: we'll use top/left in container; we assume x,y are pixel offsets from left and top? 
  // We'll treat x,y as pixel offsets from left and top. We'll adjust y to be from top; but we want characters to stand on ground.
  // We'll let parent position them using style.
  
  return (
    <img
      src={src}
      alt={name}
      className={`character-img ${animClass}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `scale(${scale})`,
        position: 'absolute'
      }}
    />
  );
};

Character.propTypes = {
  name: PropTypes.oneOf(['Leo', 'Mimi']).isRequired,
  action: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  scale: PropTypes.number
};

Character.defaultProps = {
  scale: 1
};

export default Character;
