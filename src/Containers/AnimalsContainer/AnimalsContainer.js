import React, { Component } from 'react';
import { Animals } from '../../Components/Animals/Animals';
import { fetchAnimalData } from '../../apiCalls'
import { isLoading, hasErrored, showAnimals } from '../../actions'
import connect from 'react-redux';

export class AnimalsContainer extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    fetchAnimalData()
      .then(data => console.log(data))
  }


  render() {
    // const animalCards = 
    

    return (
      <section className='animals-container'>

      </section>
    )
  }
}