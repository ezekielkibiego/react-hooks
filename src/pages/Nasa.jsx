import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Nasa() {
  const [nasaData, setNasaData] = useState(null);

  const NasaBaseURL = import.meta.env.VITE_NASA_BASE_URL;
  const API_KEY= import.meta.env.VITE_NASA_API_KEY;
  // console.log(API_KEY);

  useEffect(() => {
    const fetchNasaData = async() => {
      try{
        const response = await axios.get(`${NasaBaseURL}?api_key=${API_KEY}`);
        setNasaData(response.data);
      } catch (error){
        console.error(error + "Failed to fetch from NASA API")
      }
    }
  fetchNasaData();
  },[])
  return (
    <div className='h-screen'>
      <h1>NASA Apod</h1>
      <div>
        {nasaData ? 
        (
          <div className='flex flex-col justify-center items-center'> 
            <h3>{nasaData.title}</h3>
            <p className='line-clamp-3 lg:line-clamp-none'>{nasaData.explanation}</p>
            <img src={nasaData.url} alt="" className='w-100 h-100'/>
          </div>
        ) : 
        
        (<p>Loading...</p>)
      }
      </div>
    </div>
  )
}

export default Nasa