import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Controls extends Component {
    static proptTypes = {
        isRunning: PropTypes.bool,
        start: PropTypes.func.isRequired,
        stop: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
        addLapTime: PropTypes.func.isRequired,
    };
    static defaultProps = {
        isRunning: false
    };
    render() {
        const { isRunning, start, stop, reset, addLapTime, resetSavedTimes } = this.props;
        return (
            <div className="Controls" >
                { !isRunning ?
                    <button
                        onClick={start}
                        id='stop-go'
                        className="ctrlBtn"
                        ref="startBtn" > Start </button>
                    : null}

                { isRunning ?
                    <button
                        onClick={stop}
                        id='stop-go'
                        className="ctrlBtn"
                        ref="stopBtn" > Stop </button>
                    : null}

                <button
                    onClick={reset}
                    disabled={isRunning}
                    id='resetBtn'
                    className="ctrlBtn"
                    ref="resetBtn" > Reset </button>

                <button
                    onClick={addLapTime}
                    id='saveTime'
                    disabled={isRunning}
                    className="ctrlBtn"
                    ref="lapBtn" > Save Time </button>

                <button
                    onClick={resetSavedTimes}
                    id='clearSavedTimes'
                    disabled={isRunning}
                    className="ctrlBtn"
                    ref="resetTimesBtn" > Reset Saved Times </button>
            </div>
        )
    }
}

export default Controls;