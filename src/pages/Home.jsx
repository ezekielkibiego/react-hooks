import React, { useState } from 'react'
import { GoMoon } from "react-icons/go";
import { IoIosSunny } from "react-icons/io";


function Home() {
  const headingStyle = {
    color: "red",
    fontSize: "30px",
    textAlign: "center",
    marginTop: "50px"
  }
  const [isDarkMode, setIsDarkmode] = useState(false);

  const containerStyle = {
    backgroundColor: isDarkMode ? "#333": "#fff",
    color: isDarkMode ? "#fff": "#000",
    padding: "20px",
    textAlign: "center"
  }
  return (
    <div className='h-screen' style={containerStyle}>
        <h2>
          { isDarkMode ? (
            <>
              Dark Mode <GoMoon /> 
            </>
            ):(
            <>
              Light Mode <IoIosSunny />
            </>
          )}
        </h2>
        <h1 style={headingStyle}>Welcome to home Page</h1>
        <button onClick={() => setIsDarkmode(!isDarkMode)}>Toggle Mode</button>

    </div>
  )
}

export default Home