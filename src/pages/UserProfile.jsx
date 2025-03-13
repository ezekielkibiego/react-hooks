import React, { useContext } from 'react'
import UserContext from "./UserContext"

function UserProfile() {
  const { user } = useContext(UserContext) ;
  return (
    <div className='h-screen p-4 border rounded-b-lg'>
      <div>UserProfile</div>
      <p>Name: {user.name}</p>
      <p>Status: {user.isLoggedIn ? "logged In" : "Logged Out"}</p>
    </div>
  )
}

export default UserProfile