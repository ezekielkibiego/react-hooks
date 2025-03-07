import React, { useState } from 'react'

function MultiInputForm() {

  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData({
      ...formData, 
      [name]: value,
    })
  }
    
  return (
    <form className='h-screen'>
      <label>
        Username:
        <input 
          type="text" 
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <p>Username: {formData.username}, Email: {formData.email}</p>
    </form>
  )
}

export default MultiInputForm