import React, { useEffect, useState } from "react";
import { useRef } from "react";

const initialState = {
  seconds: "",
  minutes: "",
  hour: "",
};
const StopWatch = () => {
  const [timer, setTimer] = useState(initialState);
 const InterID = useRef(null)

  function handleStart(){
      
  }

  function handelStop(){

  }
  function handleReset(){

  }
  useEffect(()=>{

  })
  return (
    <div>
      <h1>
        {timer.hour}:{timer.minutes}:{timer.seconds}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handelStop}>stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
