import React from 'react';
import './style.scss'

const Poster = ({path}) => (
    <div className='poster-wrapper'>
        <img className='poster' src={path} height={290} alt='poster'/>
    </div>
);

export default Poster;
