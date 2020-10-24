import React, { Component } from 'react';
import './App.css';

import { Stopwatch } from './components';
import Scrambler from './components/scrambler'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className='welcome'>
            <h1>Cube Timer</h1>
            <p>To start and the cube timer, Press the Spacebar or click Start/Stop</p>
            <p>To reset the timer, press 'b' or click Reset</p>
            <p>To save a time, press 'v' or click Save Time</p>
            <p>To clear saved a times, press 'q' or click Reset Saved Times</p>
            <p>To get a new scramble algorithm, press 'n' or click New Scramble</p>
            <div className='scrambleDiv'>
              <Scrambler />
            </div>
            <p>This scrambler is not WCA certified, it was created utilizing Javascripts random function and assigning the numbers to a move.</p>
          </div>
        </div>
        <div className='App-footer'>
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default App;
