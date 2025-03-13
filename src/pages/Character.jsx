import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    try{
      const fetchCharacters = async() => {
        const charactersAPI = await fetch("https://rickandmortyapi.com/api/character");
        const charactersData = await charactersAPI.json();
        setCharacters(charactersData.results);
      } 
    fetchCharacters();
    } catch(error){
      console.error("Failed to fetch characters", error);
    }
    

  }, []);

  return (
    <div className=''>
      <h2>Character List</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 '>
        {characters.map((character) => (
          <div key={character.id} className='bg-amber-200 px-5 py-8 rounded-2xl'>
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt={`image of ${character.image}`} className='rounded-xl ' />
              <h3 className='text-center text-lg'>Name: {character.name}</h3>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Character