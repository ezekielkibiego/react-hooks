import React from 'react'
// import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
        {/* <Navbar /> */}
        <div className='p-6'>
            <h1 className='text-2xl mb-4'>Dashboard</h1>
            <Outlet />
        </div>
    </div>  

  )
}

export default DashboardLayout