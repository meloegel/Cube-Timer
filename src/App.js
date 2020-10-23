import React, { Component } from 'react';
import './App.css';

import { Stopwatch } from './components';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className='welcome'>
            <h1>Cube Timer</h1>
            <p>Directions: hit Spacebar to start Timer etc etc.</p>
          </div>
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
