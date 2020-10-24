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
            <p>To start and the cube timer, Press the <strong>Spacebar</strong> or click Start/Stop</p>
            <p>To reset the timer, press <strong>'b'</strong> or click Reset</p>
            <p>To save a time, press <strong>'v'</strong> or click Save Time</p>
            <p>To clear saved a times, press <strong>'q'</strong> or click Reset Saved Times</p>
            <p>To get a new scramble algorithm, press <strong>'n'</strong> or click New Scramble</p>
            <div className='scrambleDiv'>
              <Scrambler />
            </div>
            <p id='cert'>**This scrambler is not WCA certified, it was created utilizing Javascripts random function and assigning the numbers to a move.**</p>
            <Stopwatch />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
