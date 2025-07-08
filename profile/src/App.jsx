import React from 'react'
import Timer from './TImer.jsx/Timer'
import TodoForm from './Todo/TodoForm'
import Todos from './Todo/Todos'
import './App.css'

const App = () => {
  return (
    // <div><ProfilePage/></div>
    <>
    {/* <Timer/> */}
   <div className='container'>
     <TodoForm/>
    <Todos/>
   </div>
    </>
  )
}

export default App