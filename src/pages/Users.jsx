import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [])
  return (
    <div className='h-screen'>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
               <li key={user.id}>
                {user.name}
                {user.email}
               </li> 
            ))}
        </ul>

    </div>
  )
}

export default Users
