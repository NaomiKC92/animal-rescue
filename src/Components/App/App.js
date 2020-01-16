import React, { Component } from 'react';
import './App.css';
import {fetchAnimalData} from '../../apiCalls'

export class App extends Component {
  constructor() {
    super();
  
  }

  componentDidMount() {
    fetchAnimalData();
  }

  render() {
    return (
      <>
      </>
    )
  }


}

export default App

