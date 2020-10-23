import React, { Component } from 'react';

import Timer from './timer';
import Controls from './controls';
import LapTimeList from './lapTimeList';

import Config from '../constants/Config'


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
        this.setState(getDefaultState());
    }
    addLapTime() {
        const { time, timeList } = this.state;

        this.setState({
            timeList: [...timeList, time]
        })
    }
    onKeyHit(e) {
        if (e.key === ' ') {
            if (this.isRunning === true) {
                document.getElementById('test').click()
            } else {
                document.getElementById('test').click()
            }

        }
    }
    componentDidMount() {
        window.addEventListener('keypress', this.onKeyHit)
    }


    render() {
        const { isRunning, time, timeList } = this.state;

        return (
            <div className="Stopwatch" onKeyPress={this.onKeyHit}>

                <h1 >Simple Stopwatch App</h1>

                <Timer time={time} />

                <Controls
                    isRunning={isRunning}
                    start={() => this.start()}
                    stop={() => this.stop()}
                    reset={() => this.reset()}
                    addLapTime={() => this.addLapTime()}
                />

                <LapTimeList timeList={timeList} />
            </div>
        )
    }

}

export default Stopwatch;