import React from 'react'
import Navbar from './Components/Navbar.jsx'
import {useLocation, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div className=''>
    {!isOwnerPath && <Navbar/>}
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
    </div>
 
     
    </div>
  )
}

export default App
