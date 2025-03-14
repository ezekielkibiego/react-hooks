import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Character() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, []);

  return (
    <div className=''>
        <h1>Character List</h1>
        <div>
            {characters.map(char => (
                <div key={char.id}>
                    <Link to={`/character/${char.id}`}>
                        <img src={char.image} alt={`Image of ${char.name}`} />
                        <h3>{char.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Character