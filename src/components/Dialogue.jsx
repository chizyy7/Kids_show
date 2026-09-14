import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Dialogue = ({ character, text, duration, muted, onEnd }) => {
  const utteranceRef = useRef(null);
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    if (muted || !text) {
      setVisible(false);
      if (onEnd) onEnd();
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    // Different voices for different characters
    if (character === 'Leo') {
      utter.rate = 0.9;
      utter.pitch = 1.1;
    } else if (character === 'Mimi') {
      utter.rate = 1.0;
      utter.pitch = 1.2;
    } else {
      utter.rate = 1.0;
      utter.pitch = 1.0;
    }
    utter.volume = 1;
    utteranceRef.current = utter;
    window.speechSynthesis.speak(utter);
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [character, text, muted]);

  useEffect(() => {
    if (!text) return;
    const timer = setTimeout(() => {
      setVisible(false);
      if (onEnd) onEnd();
    }, duration * 1000);
    return () => clearTimeout(timer);
  }, [text, duration, onEnd]);

  if (!visible) {
    return null;
  }

  return (
    <div className="dialogue-box fade-in">
      <strong>{character}:</strong> {text}
    </div>
  );
};

Dialogue.propTypes = {
  character: PropTypes.oneOf(['Leo', 'Mimi']).isRequired,
  text: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  onEnd: PropTypes.func
};

Dialogue.defaultProps = {
  onEnd: undefined
};

export default Dialogue;
