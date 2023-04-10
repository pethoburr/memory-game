import React from 'react';

const Scoreboard = (props) => {
    // console.log(props);
    return (
        <div className='scoreboard'>
            <div className='score'>Current score: {props.props}</div>
            <div className='score'>Highscore: {props.hs}</div>
        </div>
    )
}

export default Scoreboard;