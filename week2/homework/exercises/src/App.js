import React from 'react';
import './App.css';

import Friend from './Components/Exercise1/Friend';
import DogGallery from './Components/Exercise2/DogGallery';
import RandomJoke from './Components/Exercise3/RandomJoke';
import styles from './Components/css/style.css'

function App() {
  return (
    <div className="App">
      <h1>HOMEWORK</h1>
      <h2>Exercise 1</h2>
      <Friend />
      <hr></hr>
      <h2>Exercise 2</h2>
      <DogGallery />
      <hr></hr>
      <h2>Exercise 3</h2>
      <RandomJoke />
    </div>
  );
}

export default App;
