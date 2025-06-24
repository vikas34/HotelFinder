import React from 'react'
import Navbar from './Components/Navbar.jsx'
import {useLocation, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Footer from './Components/Footer.jsx'
import AllRooms from './Pages/AllRooms.jsx'
import Roomdetails from './Pages/Roomdetails.jsx'
import MyBookings from './Pages/MyBookings.jsx'
import HotelReg from './Components/HotelReg.jsx'



const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div className=''>
    {!isOwnerPath && <Navbar/>}
    {false && <HotelReg/>}
    <div className='min-h-[70vh] '>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/rooms' element= {<AllRooms/>}/>
        <Route path='/rooms/:id' element= {<Roomdetails />}/>
        <Route path='/my-bookings' element= {<MyBookings/>}/>
      

      </Routes>
    </div>
 
     <Footer/>
    </div>
  )
}

export default App
