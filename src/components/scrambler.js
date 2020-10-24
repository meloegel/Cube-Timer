import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { getDefaultNormalizer } from '@testing-library/react';


function randNum() {
    return Math.floor(Math.random() * (18 - 1) + 1)
}
function formatMove(num) {
    if (num === 1) {
        return 'D'
    } else if (num === 2) {
        return "D'"
    } else if (num === 3) {
        return 'F'
    } else if (num === 4) {
        return "F'"
    } else if (num === 5) {
        return 'L'
    } else if (num === 6) {
        return "L'"
    } else if (num === 7) {
        return 'R'
    } else if (num === 8) {
        return "R'"
    } else if (num === 9) {
        return 'U'
    } else if (num === 10) {
        return "U'"
    } else if (num === 11) {
        return 'B'
    } else if (num === 12) {
        return "B'"
    } else if (num === 13) {
        return 'F2'
    } else if (num === 14) {
        return 'L2'
    } else if (num === 15) {
        return 'R2'
    } else if (num === 16) {
        return 'U2'
    } else if (num === 17) {
        return 'B2'
    } else if (num === 18) {
        return 'D2'
    }
}

function getDefault() {
    return {
        One: formatMove(randNum()),
        Two: formatMove(randNum()),
        Three: formatMove(randNum()),
        Four: formatMove(randNum()),
        Five: formatMove(randNum()),
        Six: formatMove(randNum()),
        Seven: formatMove(randNum()),
        Eight: formatMove(randNum()),
        Nine: formatMove(randNum()),
        Ten: formatMove(randNum()),
        Eleven: formatMove(randNum()),
        Twelve: formatMove(randNum()),
        Thirteen: formatMove(randNum()),
        Fourteen: formatMove(randNum()),
        Fifteen: formatMove(randNum())
    }
}


class Scrambler extends Component {
    constructor(props) {
        super(props);
        this.state = getDefault();
    }
    static proptTypes = {
        One: PropTypes.number,
        Two: PropTypes.number,
        Three: PropTypes.number,
        Four: PropTypes.number,
        Five: PropTypes.number,
        Six: PropTypes.number,
        Seven: PropTypes.number,
        Eight: PropTypes.number,
        Nine: PropTypes.number,
        Ten: PropTypes.number,
        Eleven: PropTypes.number,
        Twelve: PropTypes.number,
        Thirteen: PropTypes.number,
        Fourteen: PropTypes.number,
        Fifteen: PropTypes.number,
    };

    static defaultProps = {
        One: formatMove(randNum()),
        Two: formatMove(randNum()),
        Three: formatMove(randNum()),
        Four: formatMove(randNum()),
        Five: formatMove(randNum()),
        Six: formatMove(randNum()),
        Seven: formatMove(randNum()),
        Eight: formatMove(randNum()),
        Nine: formatMove(randNum()),
        Ten: formatMove(randNum()),
        Eleven: formatMove(randNum()),
        Twelve: formatMove(randNum()),
        Thirteen: formatMove(randNum()),
        Fourteen: formatMove(randNum()),
        Fifteen: formatMove(randNum())
    }
    newRandNum() {
        this.setState(getDefault())
    }


    render() {
        const { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen } = this.state;
        return (
            <div>
                <div>
                    <span className='moveSpan'>{One}</span>
                    <span className='moveSpan'>{Two}</span>
                    <span className='moveSpan'>{Three}</span>
                    <span className='moveSpan'>{Four}</span>
                    <span className='moveSpan'>{Five}</span>
                    <span className='moveSpan'>{Six}</span>
                    <span className='moveSpan'>{Seven}</span>
                    <span className='moveSpan'>{Eight}</span>
                    <span className='moveSpan'>{Nine}</span>
                    <span className='moveSpan'>{Ten}</span>
                    <span className='moveSpan'>{Eleven}</span>
                    <span className='moveSpan'>{Twelve}</span>
                    <span className='moveSpan'>{Thirteen}</span>
                    <span className='moveSpan'>{Fourteen}</span>
                    <span className='moveSpan'>{Fifteen}</span>
                </div>
                <button onClick={() => this.newRandNum()} id='scramble'>New Scramble</button>
            </div>
        )
    }
}

export default Scrambler;