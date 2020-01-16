import React, { Component } from 'react';
import './App.css';
import AnimalsContainer  from '../../Containers/AnimalsContainer/AnimalsContainer';

export class App extends Component {
  constructor() {
    super();
  
  }

  render() {
    return (
      <main>
        <h1>Animal Rescue</h1>
        <AnimalsContainer />
      </main>
    )
  }


}

export default App

