import React from 'react'
import NavBar from '../../Components/hotelOwner/NavBar'
import Sidebar from '../../Components/hotelOwner/Sidebar'
import DashBoard from './DashBoard'

const LayOut = () => {
  return (
    <div className='flex flex-col h-screen'> 
      <NavBar/>
      <div className='flex h-full'>
        <Sidebar/>
        <div className='flex-1 p-4 pt-10 md:px-10 h-full text-orange-400 '>
            <DashBoard/>

        </div>
      </div>
    </div>
  )
}

export default LayOut
