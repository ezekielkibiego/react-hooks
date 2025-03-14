import React, { useContext } from 'react'
import UserContext from './UserContext'

function UserProfile() {
    const { user } = useContext(UserContext);
  return (
    <div className='h-screen p-4 border rounded-b-lg'> 
        <h1 className='text-2xl font-bold'>User Profile</h1>
        <p>Name: {user.name}</p>
        <p>Status: {user.isLoggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  )
}

export default UserProfile