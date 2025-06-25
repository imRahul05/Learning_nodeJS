import React from 'react'
import './App.css'
import Counter from './Counter'
import ProductPage from './assets/ProductPage'
import AllRoutes from './AllRoutes/AllRoutes'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      {/* <Counter/> */}
       <Navbar/>
       <AllRoutes/>

    </div>
  )
}

export default App