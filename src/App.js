import React, { Component } from 'react';
import './App.css';

import { Stopwatch } from './components';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
