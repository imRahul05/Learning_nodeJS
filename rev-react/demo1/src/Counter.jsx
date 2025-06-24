import React, { useState,useEffect } from 'react'

const Counter = () => {
    const [ count,setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect trigger")

        const timer = setTimeout(()=>{
              setCount(count+1)
        },2000)
     

       return ()=>{
        clearTimeout(timer)
       }
    })
    
  return (
    <>
     <div>
        <p>Count:{count}</p>
     </div>
    </>
  )
}

export default Counter