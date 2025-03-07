import React, { useState } from 'react'

function Forms() {

    const [name, setName] = useState("");
    const [color, setColor] = useState("green");
    const [isChecked, setIsChecked] = useState(false);

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      if (!email.includes("@")) {
        setError("Invalid email! Must contain @");
        return;

      }
      setError("");
      alert(`Form submitted with: ${email}`)
    }

    const toggleCheckbox = () => {
      setIsChecked(prev => !prev);
    }

  return (
    <div className='h-screen'>
         
         <form>
         <label>
                  <input 
                     type="text" 
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder='Type here...'
                 />
          </label>
          <p>Typed Name: {name}</p> <br /><br />

          <label>
            Pick a Color:
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
            </select>
          </label>
          <p>Selected Color: {color}</p>

          <label>
            Checkbox
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={toggleCheckbox}

            />
            I agree to the terms
          </label>
          <p>Checkbox is {isChecked ? "checked": "unchecked"}</p>

         </form>

         <br />

         <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
            {error && <p style={{ color: "red"}}>{error}</p>}
        </form>
         
    </div>

  )
}

export default Forms