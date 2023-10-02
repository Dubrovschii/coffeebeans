import React from 'react';

import ArrImg from './arrow-up-circle-outline.svg'

import './arrowup.css'

const ArrowUp = () => {      
    const onComeUp = () => {
        window.scrollTo(500, 0);
    }
    return(
        <div className='arrow-up-wr'>
            <button onClick={onComeUp}>
             <img src={ArrImg} alt="" className='img-up' />   
            </button>
        </div>
    )
}

export default ArrowUp; 