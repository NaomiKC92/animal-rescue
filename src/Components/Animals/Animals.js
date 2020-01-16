import React from 'react';

const Animals = ({ id, name, species, description, img }) => {
  return (
    <section className='animal'>
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{description}</p>
      <img src={img} alt='animal displayed'/>
    </section>
  )
}

export default Animals