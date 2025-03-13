import React, { useContext } from 'react'
import UserContext from './UserContext'

function LogInButton() {
  const { user, dispatch } = useContext(UserContext);

  
  return (
    <div>
      <h2>{user.isLoggedIn ? `Welcome ${user.name} ` : "Please Log In!"}</h2>
      <button onClick={() => dispatch({type: "LOGIN"})}>
        LogIn
      </button>
      <button onClick={() => dispatch({type: "LOGOUT"})}>
        LogOut
      </button>
      <button onClick={() => dispatch({type: "UPDATE_NAME", payload: "John Doe"})}>
        Change Name
      </button>
    </div>
  )
}

export default LogInButton