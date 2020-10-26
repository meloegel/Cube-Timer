import React, { Component } from 'react';
import './App.css';
import Popup from 'reactjs-popup'
import { Stopwatch } from './components';
import Scrambler from './components/scrambler'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className='welcome'>
            <h1>Cube Timer</h1>
            <Popup trigger={<button className="button"> About </button>} modal>
              {close => (
                <div className="modal">
                  <a className="close" onClick={close}>&times;</a>
                  <div className="aboutTitle"> About Cube Timer </div>
                  <div className="aboutPopupDiv">
                    <p className='aboutPopupContent'>Cube Timer is for solving rubik's cubes. The scrambler algorithm provides an algorithm for you to scramble your 3x3 rubik's cube. The timer is setup to use keyboard shortcuts to better be able get accurate solve times.</p>
                  </div>
                  <div className="buttonPopup">
                    <button onClick={() => { close(); }}>Close</button>
                  </div>
                </div>
              )}
            </Popup>
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
            <p id='createdBy'>Created By: <a href='https://github.com/meloegel/Cube-Timer'>Mark Loegel</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
