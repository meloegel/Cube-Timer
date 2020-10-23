import React, { Component } from 'react';
import PropTypes from 'prop-types'

import formatTime from '../utils/formatTime';

class LapTime extends Component {
    static proptTypes = {
        lap: PropTypes.number,
        time: PropTypes.number
    };
    static defaultProps = {
        lap: 0,
        time: 0
    };

    render() {
        const { lap, time } = this.props;
        return (
            <div>
                <span className="LapTime__lap" >{lap}</span>
                <span className="LapTime__time" >{formatTime(time)}</span>
            </div>
        )
    }
}

export default LapTime;