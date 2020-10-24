import React, { Component } from 'react';
import PropTypes from 'prop-types'

import LapTime from './lapTime'

class LapTimeList extends Component {
    static proptTypes = {
        timeList: PropTypes.array
    };
    static defaultProps = {
        timeList: []
    };

    render() {
        const { timeList } = this.props;
        return (
            <div className="LapTimeListDiv">
                <div className="LapTimeList__listwrap">

                    <div className="LapTimeListHeaders">
                        <span> Lap </span> <span> Time </span>
                    </div>

                    <ol className="LapTimeList" >
                        {
                            timeList.map((time, index) => {
                                return (
                                    <li key={index}>
                                        <LapTime lap={index + 1} time={time} />
                                    </li>
                                )
                            })
                        }
                    </ol>

                </div>
            </div>
        )
    }
}

export default LapTimeList;