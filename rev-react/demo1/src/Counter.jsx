import React, { useState } from 'react'


const initialState={count:0}

function reducer(state,action){
   
  switch(action.type){

    case "INCREMENT":
      return {count:state.count+1}

    case "DECREMENT":
      return {count:state.count-1}

    case "RESET":
      return initialState

      default:
        return
  }

     
}

const Counter = () => {
  const [state,dispatch] = useState()

  return (
   <>
    <div>Counter</div>

   </>
  )
}

export default Counter