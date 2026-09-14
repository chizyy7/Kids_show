import React, { useState, useEffect, useRef } from 'react';
import episode from './data/episode1.json';
import Meadow from './components/Meadow';
import Character from './components/Character';
import ObjectDisplay from './components/Object';
import Dialogue from './components/Dialogue';
import Title from './components/Title';
import EndScreen from './components/EndScreen';
import Controls from './components/Controls';
import TextDisplay from './components/Text';
import './index.css';

const App = () => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  const [showEnd, setShowEnd] = useState(false);
  const [elapsed, setElapsed] = useState(0); // elapsed seconds in current scene
  const [sceneStartTime, setSceneStartTime] = useState(null);
  const [pauseStartTime, setPauseStartTime] = useState(null);
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const animationFrameRef = useRef(null);

  const totalEpisodeDuration = episode.scenes.reduce((sum, scene) => sum + scene.duration, 0);

  // Calculate total duration and current time based on sceneIndex and elapsed
  useEffect(() => {
    const sumBefore = episode.scenes.slice(0, sceneIndex).reduce((sum, s) => sum + s.duration, 0);
    setTotalDuration(sumBefore + episode.scenes[sceneIndex].duration);
    setCurrentTime(sumBefore + elapsed);
  }, [sceneIndex, elapsed]);

  // Start animation loop when playing
  useEffect(() => {
    if (!isPlaying) return;
    const start = sceneStartTime ?? Date.now();
    const loop = (timestamp) => {
      if (!sceneStartTime) return;
      const elapsedSec = (timestamp - sceneStartTime) / 1000;
      setElapsed(Math.min(elapsedSec, episode.scenes[sceneIndex].duration));
      if (elapsedSec >= episode.scenes[sceneIndex].duration) {
        // Move to next scene
        if (sceneIndex < episode.scenes.length - 1) {
          setSceneIndex(sceneIndex + 1);
          setElapsed(0);
          setSceneStartTime(Date.now());
        } else {
          // End of episode
          setIsPlaying(false);
          setShowEnd(true);
        }
      }
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    if (sceneStartTime) {
      animationFrameRef.current = requestAnimationFrame(loop);
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, sceneIndex, sceneStartTime]);

  // Handle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      // Pause
      setIsPlaying(false);
      setPauseStartTime(Date.now());
    } else {
      // Play
      setIsPlaying(true);
      if (pauseStartTime) {
        // Adjust sceneStartTime to account for pause duration
        const pauseDuration = Date.now() - pauseStartTime;
        setSceneStartTime(prev => prev ? prev + pauseDuration : Date.now());
        setPauseStartTime(null);
      } else {
        // Starting fresh or after restart
        setSceneStartTime(Date.now());
        setElapsed(0);
      }
    }
  };

  const handleRestart = () => {
    setSceneIndex(0);
    setElapsed(0);
    setIsPlaying(false);
    setShowTitle(true);
    setShowEnd(false);
    setSceneStartTime(null);
    setPauseStartTime(null);
  };

  const handleNext = () => {
    if (sceneIndex < episode.scenes.length - 1) {
      setSceneIndex(sceneIndex + 1);
      setElapsed(0);
      setSceneStartTime(Date.now());
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  // If title screen is showing, we don't play until start
  useEffect(() => {
    if (showTitle && isPlaying) {
      setIsPlaying(false);
    }
  }, [showTitle, isPlaying]);

  // Render current scene elements
  const currentScene = episode.scenes[sceneIndex];

  // Render elements based on type
  const renderElements = () => {
    return currentScene.elements.map((elem, idx) => {
      switch (elem.type) {
        case 'character':
          return (
            <Character
              key={`${elem.name}-${idx}`}
              name={elem.name}
              action={elem.action}
              x={elem.x}
              y={elem.y}
            />
          );
        case 'object':
          return (
            <ObjectDisplay
              key={`${elem.name}-${idx}`}
              name={elem.name}
              x={elem.x}
              y={elem.y}
            />
          );
        case 'dialogue':
          return (
            <Dialogue
              key={idx}
              character={elem.character}
              text={elem.text}
              duration={elem.duration}
              muted={muted}
            />
          );
        case 'title':
          return (
            <div className="title-screen" key={idx}>
              <h1>{elem.text}</h1>
            </div>
          );
        case 'text':
          return (
            <TextDisplay
              key={idx}
              text={elem.text}
              size={elem.size}
              color={elem.color}
              x={elem.x}
              y={elem.y}
              duration={elem.duration}
            />
          );
        default:
          return null;
      }
    });
  };

  if (showTitle) {
    return (
      <div className="container">
        <Title onStart={() => {
          setShowTitle(false);
          setIsPlaying(true);
          setSceneStartTime(Date.now());
        }} />
      </div>
    );
  }

  if (showEnd) {
    return (
      <div className="container">
        <EndScreen onRestart={handleRestart} />
      </div>
    );
  }

  return (
    <div className="container">
      <Meadow />
      {renderElements()}
      <Controls
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        onRestart={handleRestart}
        onNext={handleNext}
        onMuteToggle={handleMuteToggle}
        muted={muted}
        progress={(currentTime / totalEpisodeDuration) * 100}
        totalDuration={totalEpisodeDuration}
        currentTime={currentTime}
      />
      <div className="scene-indicator">
        Scene {sceneIndex + 1} of {episode.scenes.length}
      </div>
    </div>
  );
};

export default App;