import React, { Component } from 'react';

import Timer from './timer';
import Controls from './controls';
import LapTimeList from './lapTimeList';

import Config from '../constants/Config'
import Scrambler from './scrambler'


function getDefaultState() {
    return {
        isRunning: false,
        time: 0,
        timeList: []
    }
}

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = getDefaultState();
        this.timerRef = null;
    }
    updateTimer(extraTime) {
        const { time } = this.state;
        this.setState({ time: time + extraTime })
    }
    start() {
        this.setState({
            isRunning: true
        }, () => {
            this.timerRef = setInterval(
                () => { this.updateTimer(Config.updateInterval) }, Config.updateInterval
            )
        })
    }
    stop() {
        this.setState({
            isRunning: false
        }, () => {
            clearInterval(this.timerRef)
        })
    }
    reset() {
        const { time } = this.state;
        this.setState({
            time: 0
        });
    }
    resetSavedTimes() {
        const { timeList } = this.state;
        this.setState({
            timeList: []
        });
    }
    addLapTime() {
        const { time, timeList } = this.state;

        this.setState({
            timeList: [...timeList, time]
        })
    }
    onKeyHit(e) {
        if (e.key === ' ') {
            e.preventDefault()
            document.getElementById('stop-go').click()
        } else if (e.key === 'b') {
            e.preventDefault()
            document.getElementById('resetBtn').click()
        } else if (e.key === 'v') {
            e.preventDefault()
            document.getElementById('saveTime').click()
        } else if (e.key === 'q') {
            e.preventDefault()
            document.getElementById('clearSavedTimes').click()
        }
    }
    componentDidMount() {
        window.addEventListener('keypress', this.onKeyHit)
    }


    render() {
        const { isRunning, time, timeList } = this.state;

        return (
            <div className="Stopwatch" onKeyPress={this.onKeyHit}>
                <h1 >Cube Timer</h1>
                <Timer time={time} />
                <Controls
                    isRunning={isRunning}
                    start={() => this.start()}
                    stop={() => this.stop()}
                    reset={() => this.reset()}
                    addLapTime={() => this.addLapTime()}
                    resetSavedTimes={() => this.resetSavedTimes()}
                />
                <LapTimeList timeList={timeList} />
                <img src={require('../imgs/solved-small.jpg')} alt='cube solved' />
            </div>
        )
    }

}

export default Stopwatch;