import React from 'react';

const Donation = ({ id, name, donation }) => {
  return (
    <section className='donation'>
      <h2>{name}</h2>
      <p>{donation}</p>
    </section>
  )
}

export default Donation