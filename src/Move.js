import React from 'react';
import './Move.css'

function Move(props) {
    return (
        <div className='move-step'>
            <h4>Krok:</h4>
            <input type="number" id='number' onClick={(e) => {props.changeStep(e.target.value)}} />
        </div>
    )
}


export default Move;