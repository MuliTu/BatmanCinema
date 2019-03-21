import React from 'react';
import './style.scss'

const Poster = ({path}) => {
    return (
        <div className='poster-wrapper'>
            <img className='poster' src={path} height={290} />
        </div>
    );
};

export default Poster;
