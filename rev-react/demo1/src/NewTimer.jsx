import React, { useState } from 'react'

const NewTimer = () => {
    const [timer,setTimer]= useState(0)
    const [intervalID,setIntervalID] =useState([])

    function handleStart(){
      const id=  setInterval(()=>{
        setTimer((prev)=>prev+1)
       },1000)
       setIntervalID(id)
    }

    function handleStop(){
        clearInterval(intervalID)

    }
  return (
    <div>
    <h1>{timer}</h1>
    <button onClick={handleStart}>Start</button>
     <button onClick={handleStop}>stop</button>
    </div>
  )
}

export default NewTimer

//start stop