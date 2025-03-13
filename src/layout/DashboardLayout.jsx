import React from 'react'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
      <div className='p-6'>
        <h1 className='text-2xl mb-4'>Dashboard</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout