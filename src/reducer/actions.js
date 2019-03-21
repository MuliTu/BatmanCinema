import { MAIN_URL } from '../api/mainPath';
import { API_KEY } from '../api/apiKey';

const PATH = `${MAIN_URL}/${API_KEY}`;

export const fetchMoviesBySearch = (query) => async dispatch => {
    const path = `${PATH}&s=${query.replace( ' ', '+' )}&plot=full`;
    const response = await fetch( path );
    const data = await response.json();
    const list = [...data['Search']];
    Promise.all( list.map(movieInfo) ).then( res => dispatch( {type: 'GET_MOVIES', payload: res} ) )
};

export const movieInfo = async x => {
    const result = await fetch( `${PATH}&t=${x['Title']}` );
    return await result.json()
};
