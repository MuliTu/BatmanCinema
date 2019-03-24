import React from 'react';
import Poster from '../Poster/Poster';
import './style.scss'

const Box = ({movie}) => {
    return (
        <div className='container'>
            <Poster path={movie.poster}/>
            <div className='info'>
                <div className='title'>{movie.title}
                    <div className='id'>({movie.id})</div>
                </div>
                <div className='genre'>{movie.genre}</div>
                <hr/>
                <div className='information'>
                    <div>{movie.type}</div>
                    <div>{movie.year}</div>
                    <div>{movie.runtime}</div>
                </div>
                <div className='main'>
                    <div className='plot'>
                        {movie.plot}
                    </div>
                    <hr/>
                    <div className='director'>
                        Director: {movie.director}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Box;
