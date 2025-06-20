import React from 'react'
import Navbar from './Components/Navbar.jsx'
import {useLocation, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Footer from './Components/Footer.jsx'
import AllRooms from './Pages/AllRooms.jsx'


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div className=''>
    {!isOwnerPath && <Navbar/>}
    <div className='min-h-[70vh] '>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/rooms' element= {<AllRooms/>}/>
      </Routes>
    </div>
 
     <Footer/>
    </div>
  )
}

export default App
