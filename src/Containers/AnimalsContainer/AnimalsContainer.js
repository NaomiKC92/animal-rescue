import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Animals  from '../../Components/Animals/Animals';
import { fetchAnimalData, fetchDonationData } from '../../apiCalls'
import { isLoading, hasErrored, showAnimals, showDonations } from '../../actions'
import Donation from '../../Components/Donations/Donations'


export class AnimalsContainer extends Component {

  componentDidMount() {
    fetchAnimalData()
      .then(data => {
        this.props.showAnimals(data);
      });
    fetchDonationData()
      .then(data => this.props.showDonations(data))
  }


  render() {
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

    const donations = this.props.donations.map(donation => {
      return (
        <Donation
        id={donation.id}
        name={donation.name}
        donation={donation.donation}
        key={donation.id}
        />
      )
    })

    // if(this.props.isLoading) {
    //   return <p>Loading ...</p>
    // }
    return (
      <section className='animals-container'>
        {animalCards}
        <h2>DONATIONS: </h2>
        {donations}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  animals: state.animals,
  donations: state.donations
})

export const mapDispatchToProps = dispatch => ({
  isLoading: (isLoading) => dispatch( isLoading(isLoading)),
  showAnimals: (animals) => dispatch(showAnimals(animals)),
  showDonations: (donations) => dispatch(showDonations(donations))
})


export default connect(mapStateToProps, mapDispatchToProps)(AnimalsContainer)
