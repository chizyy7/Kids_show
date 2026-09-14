import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  isPlaying,
  onPlayPause,
  onRestart,
  onNext,
  onMuteToggle,
  muted,
  progress,
  totalDuration,
  currentTime
}) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="controls">
      <button className="control-btn" onClick={onPlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button className="control-btn" onClick={onRestart}>
        Restart
      </button>
      <button className="control-btn" onClick={onNext}>
        Next Scene
      </button>
      <button className="control-btn" onClick={onMuteToggle}>
        {muted ? 'Unmute' : 'Mute'}
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>{formatTime(currentTime)} / {formatTime(totalDuration)}</span>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

Controls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onMuteToggle: PropTypes.func.isRequired,
  muted: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  totalDuration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired
};

export default Controls;
