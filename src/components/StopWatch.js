import React, { useState, useEffect } from 'react';
import './StopWatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
 
    useEffect(() => {
      let interval;
 
      if (isRunning) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10); 
        }, 10);
      }
 
      return () => clearInterval(interval);
    }, [isRunning]);
 
    const startStop = () => {
      setIsRunning(!isRunning);
    };
 
    const reset = () => {
      setIsRunning(false);
      setTime(0);
      setLaps([]);
    };
 
    const addLap = () => {
      setLaps([time, ...laps]);
      setTime(0); 
    };

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const millisecondsPart = Math.floor((milliseconds % 1000) / 10); // Use only two digits
      
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millisecondsPart.toString().padStart(3, '0')}`;
      };
      

    return (
      <div className="stopwatch">
        <div className="timer">{formatTime(time)}</div>
        <div className="controls">
          <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
          <button onClick={reset}>Reset</button>
          <button onClick={addLap} disabled={!isRunning}>
            Lap
          </button>
        </div>
        <div className="laps">
          <h2>Laps</h2>
          <ul>
            {laps.slice().reverse().map((lap, index) => (
              <li key={index}>{`${index + 1}: ${formatTime(lap)}`}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  export default Stopwatch;
 