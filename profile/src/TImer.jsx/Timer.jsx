import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import AlertBox from "./AlertBox";

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliSeconds: 0,
};

const Timer = () => {
  const [time, setTime] = useState(initialState);
  const [running, setRunning] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const timeRef = useRef(null);

  //handleReset
  function handleReset() {
    handleStop();
    setTime(initialState);
  }
  function handleStart() {
    if (running || timeRef.current) {
      setShowAlert(true);

      const ID = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      //    clearTimeout(ID)
      return;
    }
    setRunning(true);
    timeRef.current = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds, milliSeconds } = prev;

        milliSeconds += 10;

        if (milliSeconds === 1000) {
          milliSeconds = 0;
          seconds += 1;
        }

        if (seconds === 60) {
          seconds = 0;
          minutes += 1;
        }

        if (minutes === 60) {
          minutes = 0;
          hours += 1;
        }
        return { hours, minutes, seconds, milliSeconds };
      });
    }, 10);
  }

  function handleStop() {
    setRunning(false);
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  const initialCheck =
    time.hours === 0 &&
    time.minutes === 0 &&
    time.seconds === 0 &&
    time.milliSeconds === 0;
  return (
    <>
      <div>
        {showAlert ? <AlertBox /> : ""}
        <h1 style={{ fontFamily: "monospace", fontSize: "3rem" }}>
          {time.hours}:{time.minutes}:{time.seconds}:
          {String(Math.floor(time.milliSeconds / 10)).padStart(2, "0")}
        </h1>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop} disabled={!running}>
          Stop
        </Button>
        <button
          onClick={handleReset}
          disabled={initialCheck}
          style={{
            backgroundColor: initialCheck ? "#ccc" : "#ff5c5c", 
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: initialCheck ? "not-allowed" : "pointer",

          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Timer;
