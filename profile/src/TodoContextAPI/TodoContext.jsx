import react, { createContext, useState } from 'react'


export const TodoContext= createContext();


export const TodoProvider= ({children})=>{

    const [allTodo,setAllTodo] = useState([])
 return(
    <TodoContext.Provider value={{setAllTodo,allTodo}}>
        {children}
    </TodoContext.Provider>
 )
}