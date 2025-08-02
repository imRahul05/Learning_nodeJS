import React, { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [intervalID, setIntervalID] = useState([]);

  function handleStart() {
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setIntervalID(id);
  }

  function handleStop() {
    clearInterval(intervalID);
  }
  function handleReset() {
    setTime(0);
    setIntervalID(null);
    handleStop();
  }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
