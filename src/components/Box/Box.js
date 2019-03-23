import React from 'react';
import './Box.scss'
import Poster from '../Poster/Poster';

const Box = ({movie}) => {

    return (
        <div className='container'>
            <Poster path={movie['Poster']}/>
            <div className='info'>
                <div className='title'>{movie['Title']}
                    <div className='id'>({movie['imdbID']})</div>
                </div>
                <div className='ganers'>{movie['Genre']}</div>
                <hr/>
                <div className='information'>
                    <div>{movie['Type']}</div>
                    <div>{movie['Year']}</div>
                    <div>{movie['Runtime']}</div>
                </div>
                <div className='main'>
                    <div className='plot'>
                        {movie['Plot']}
                    </div>
                    <div className='director'>
                        Director: {movie['Director']}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Box;
