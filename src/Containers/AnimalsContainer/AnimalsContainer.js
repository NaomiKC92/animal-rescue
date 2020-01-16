import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Animals  from '../../Components/Animals/Animals';
import { fetchAnimalData } from '../../apiCalls'
import { isLoading, hasErrored, showAnimals } from '../../actions'


export class AnimalsContainer extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    fetchAnimalData()
      .then(data => {
        this.props.showAnimals(data)
      })
  }


  render() {
    console.log(this.props)
    const animalCards = this.props.animals.map( animal => {
      return (
        <Animals
          id={animal.id}
          name={animal.name}
          sepcies={animal.species}
          description={animal.description}
          img={animal.img}
          key={animal.id}
        />
      )
    })

    return (
      <section className='animals-container'>
        {animalCards}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  animals: state.animals
})

export const mapDispatchToProps = dispatch => ({
  showAnimals: (animals) => dispatch(showAnimals(animals))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsContainer)
