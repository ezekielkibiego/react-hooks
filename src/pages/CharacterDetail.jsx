import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function CharacterDetail() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setCharacter(data))
    }, [id])

    if (!character) {
        return <p className='text-center mt-8'>Loading...</p>
    }

  return (
    <div>
        <h1>{character.name} Details</h1>
    </div>
  )
}

export default CharacterDetail