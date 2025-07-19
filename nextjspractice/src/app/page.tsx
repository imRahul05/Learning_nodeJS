'use client'
import React, { useState,useEffect } from 'react'

const page = () => {
  const [time, setTime] = useState<number>(0)
const [intervalID, setIntervalID] = useState<number | null>(null);

  function handleStart(){
  const ID= setInterval(()=>{
    setTime((prev)=>prev+1)
   },1000)
   setIntervalID(ID as unknown as number);
  }
  function handleStop(){
  if (intervalID !== null) {
  clearInterval(intervalID!);
  setIntervalID(null);
}
 useEffect(() => {
    return () => {
      if (intervalID) clearInterval(intervalID);
    };
  }, [intervalID]);

  }
  return (
    <div>
      <h1>{time}</h1>
      
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  )
}

export default page