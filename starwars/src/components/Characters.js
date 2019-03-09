import React from 'react';
import './StarWars.css'

const Character = props => {
  return (
    <div className='character-card'>
      <h2>Name: {props.char.name}</h2>
      <h2>Height: {props.char.height}</h2>
    </div>
  )
}

export default Character
