import { MAIN_URL } from '../../api/mainPath';
import { API_KEY } from '../../api/apiKey';

const PATH = `${MAIN_URL}/${API_KEY}`;

export const fetchMoviesBySearch = (query) => async dispatch => {
    console.log('this is dispatch',dispatch);

    const path = `${PATH}&s=${query.replace( ' ', '+' )}&plot=full`;
    const response = await fetch( path );
    const data = await response.json();
    const list = [...data['Search']];
    Promise.all( list.map( movieInfo ) )
        .then( res => dispatch( {type: 'GET_MOVIES', payload: res} ) )
};

export const movieInfo = async x => {
    const result = await fetch( `${PATH}&t=${x['Title']}` );
    return await result.json()
};

export const deleteMovie = () => dispatch =>{
    dispatch( {type: 'DELETE_MOVIE'} )
};

export const setCurrentMovieIndex = (index) => dispatch => {
    dispatch( {type: 'CURRENT_MOVIE', payload: index} )

};

export const addMovie = (movie)=>dispatch =>{
    dispatch({type:'ADD_MOVIE',payload:movie})
};

export const saveEditedMovie = (movie)=>dispatch=>{
    dispatch({type:'SAVE_EDITED_MOVIE',payload:movie})

}