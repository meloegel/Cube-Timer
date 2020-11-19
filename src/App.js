import React, { Component } from 'react';
import './styles/sass/index.scss';
import Popup from 'reactjs-popup'
import { Stopwatch } from './components';
import Scrambler from './components/scrambler'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import DarkModeSwitch from './components/DarkModeSwitch'


class App extends Component {


  render() {
    return (
      <div className="App">
        <div >
          <div className='darkModeSwitch'>
            <DarkModeSwitch />
          </div>
          <div className='welcome'>
            <div>
              <h1>Cube Timer</h1>
            </div>
            <Popup trigger={
              <Button
                variant='contained'
                size='small'
                color='primary'
                className="button"> About </Button>} modal>
              {close => (
                <div className="modal">
                  <a className="close" onClick={close}>&times;</a>
                  <div className="aboutTitle"> About Cube Timer </div>
                  <div className="aboutPopupDiv">
                    <p className='aboutPopupContent'>Cube Timer is an aid for timing the solving of rubik's cubes. The scrambler algorithm provides an algorithm for you to scramble your 3x3 rubik's cube. The timer is setup to use keyboard shortcuts to better be able get accurate solve times.</p>
                  </div>
                  <div className="buttonPopup">
                    <Button
                      variant='contained'
                      size='small'
                      color='primary'
                      onClick={() => { close(); }}>Close</Button>
                  </div>
                </div>
              )}
            </Popup>
            <p>To start and the cube timer, press the <strong>Spacebar</strong> or click Start/Stop</p>
            <p>To reset the timer, press <strong>'b'</strong> or click Reset</p>
            <p>To save a time, press <strong>'v'</strong> or click Save Time</p>
            <p>To clear saved a times, press <strong>'q'</strong> or click Reset Saved Times</p>
            <p>To get a new scramble algorithm, press <strong>'n'</strong> or click New Scramble</p>
            <p>To enable dark mode, press <strong>'d'</strong> or click the slider in the top right corner</p>
            <div className='scrambleDiv'>
              <Card id='scrambler'>
                <Scrambler />
              </Card>
              <p id='cert'>**This scrambler is not WCA certified, it was created utilizing Javascripts random function and assigning the numbers to a move.**</p>
            </div>
            <Card id='stopWatch'>
              <Stopwatch />
            </Card>
            <p id='createdBy'>Created By: <a target="_blank" href='https://github.com/meloegel/Cube-Timer'>Mark Loegel</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
