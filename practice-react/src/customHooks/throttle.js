import { useEffect, useRef, useState } from "react";


export function useThrottle(value,delay=1000){

    const [throttleValues,setThrottleValues] = useState(value)

    const last= useRef(Date.now())

    useEffect(()=>{
        const now = Date.now()

        const timeSince= now-last.current


        if(timeSince>=delay){
            setThrottleValues(value)
            last.current=now
        }else{

            const id = setTimeout(()=>{
                 setThrottleValues(value)
               last.current=now
                 
            },delay-timeSince)
        }
    },[value,delay])

    return throttleValues
}