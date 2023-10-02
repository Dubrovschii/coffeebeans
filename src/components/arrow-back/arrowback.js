    import React from 'react';

    import ArrImg from './arrow-back-circle-outline.svg'

    import './arrowback.css'

    const ArrowBack = () => {      
        const onComeBack = () => {
            window.history.back();
        }
        return(
            <div className='arrow-back-wr'>
                <button onClick={onComeBack}>
                 <img src={ArrImg} alt="" className='img-back' />   
                </button>
            </div>
        )
    }

    export default ArrowBack; 