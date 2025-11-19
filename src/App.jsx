import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Navbar from './pages/Navbar'
import Props from './pages/Props'
import Signingin from './pages/Signingin'
import Dashboard from './pages/Dashboard'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>} />
        
        <Route path='/props' element={<Props/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signingin' element={<Signingin/>}/>
        <Route path='/Dashboard' element ={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
