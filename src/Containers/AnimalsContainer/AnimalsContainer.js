import React, { Component } from 'react';
import { Animals } from '../../Components/Animals/Animals';
import { fetchAnimalData } from '../../apiCalls'

export class AnimalsContainer extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    fetchAnimalData()
      .then(data => console.log(data))
  }


  render() {

    

    return (
      <section className='animals-container'>

      </section>
    )
  }
}