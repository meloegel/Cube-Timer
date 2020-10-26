import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

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
                    <Button
                        variant='contained'
                        size='small'
                        color='primary'
                        onClick={start}
                        id='stop-go'
                        className="ctrlBtn"
                        ref="startBtn" > Start </Button>
                    : null}

                { isRunning ?
                    <Button
                        variant='contained'
                        size='small'
                        color='primary'
                        onClick={stop}
                        id='stop-go'
                        className="ctrlBtn"
                        ref="stopBtn" > Stop </Button>
                    : null}

                <Button
                    variant='contained'
                    size='small'
                    color='secondary'
                    onClick={reset}
                    disabled={isRunning}
                    id='resetBtn'
                    className="ctrlBtn"
                    ref="resetBtn" > Reset </Button>

                <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    onClick={addLapTime}
                    id='saveTime'
                    disabled={isRunning}
                    className="ctrlBtn"
                    ref="lapBtn" > Save Time </Button>

                <Button
                    variant='contained'
                    size='small'
                    color='secondary'
                    onClick={resetSavedTimes}
                    id='clearSavedTimes'
                    disabled={isRunning}
                    className="ctrlBtn"
                    ref="resetTimesBtn" > Reset Saved Times </Button>
            </div>
        )
    }
}

export default Controls;