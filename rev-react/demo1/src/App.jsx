import React from 'react'
import './App.css'
import Counter from './Counter'
import ProductPage from './assets/ProductPage'
import AllRoutes from './AllRoutes/AllRoutes'
import Navbar from './components/Navbar'
import Timer from './Timer'
import Todo from './Todo'
import NewTimer from './NewTimer'
import Stopwatch from './Stopwatch'
import './Stopwatch.css'


const App = () => {
  return (
    <div>
    <NewTimer/>
    <Stopwatch />
    </div>
  )
}

export default App