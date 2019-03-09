import React from 'react'

const Dogs = props => {
  return (
    <div className='dog-card'>
      <h2>Breed: {props.dog.message}</h2>
    </div>
  )
}

export default Dogs
