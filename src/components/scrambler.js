import React, { Component } from 'react';
import PropTypes from 'prop-types'


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

function newRandNum() {
    return {

    }
}


class Scrambler extends Component {
    static proptTypes = {
        One: PropTypes.number,
        Two: PropTypes.number,
        Three: PropTypes.number,
        Four: PropTypes.number,
        Five: PropTypes.number,
        Six: PropTypes.number,
        Seven: PropTypes.number,
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



    render() {
        const { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen } = this.props;
        return (
            <div>
                <div>{One}, {Two}, {Three}, {Four}, {Five}, {Six}, {Seven}, {Eight}, {Nine}, {Ten}, {Eleven}, {Twelve}, {Thirteen}, {Fourteen}, {Fifteen}</div>
                <button onClick={newRandNum()}>New Scramble</button>
            </div>
        )
    }
}

export default Scrambler;