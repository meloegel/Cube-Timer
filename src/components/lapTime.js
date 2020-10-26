import React, { Component } from 'react';
import PropTypes from 'prop-types'

import formatTime from '../utils/formatTime';

class LapTime extends Component {
    static proptTypes = {
        time: PropTypes.number
    };
    static defaultProps = {
        time: 0
    };

    render() {
        const { time } = this.props;
        return (
            <div className='LapTime'>
                <span className="saveTime" >{formatTime(time)}</span>
            </div>
        )
    }
}

export default LapTime;