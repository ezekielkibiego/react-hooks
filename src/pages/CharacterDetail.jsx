import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    try{
      const fetchCharacters = async() => {
        const charactersAPI = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const charactersData = await charactersAPI.json();
        setCharacter(charactersData);
      } 
    fetchCharacters();
    } catch(error){
      console.error("Failed to fetch characters", error);
    }

  }, [id]);

  if(!character){
    return(<p className='text-center flex justify-center items-center text-5xl font-bold'>Loading...</p>)
  }
  return (
    <div className='h-full flex flex-col  justify-start items-center my-40  '>
      <h1>{character.name} Details</h1>
      <img src={character.image} alt={`Image of ${character.name}`} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: <a href={character.origin.url}> {character.origin.name} </a></p>
      <p>Created at:  {character.created}</p>

      <label for="episodes">Choose an episode:</label>
      <select id="episodes">
       { character.episode.map((show) => (
        <option value={show}>{`episode ${show.spilt("/").pop()}`}</option>
       )
        )}
        
      </select>
        

    </div>
  )
}

export default CharacterDetail