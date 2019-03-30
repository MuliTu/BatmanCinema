import { MAIN_URL } from '../../api/mainPath';
import { API_KEY } from '../../api/apiKey';

const PATH = `${MAIN_URL}/${API_KEY}`;

export const fetchMoviesBySearch = (query) => async dispatch => {
    const path = `${PATH}&s=${query.replace(' ', '+')}`;
    const response = await fetch(path);
    const data = await response.json();
    const list = [...data['Search']];
    Promise.all(list.map(createMovieObject)).then(res => dispatch({type: 'GET_MOVIES', payload: res}))
};

export const createMovieObject = async movie => {
    const result = await fetch(`${PATH}&t=${movie['Title']}&plot=full`);
    const {Title, Genre, Director, Runtime, Year, imdbID, Type, Plot, Poster} = await result.json();
    return await {
        poster: Poster,
        title: Title,
        genre: Genre,
        director: Director,
        runtime: Runtime,
        year: Year,
        id: imdbID,
        type: Type.split('')[0].toUpperCase() + Type.slice(1).toLowerCase(),
        plot: Plot
    }
};

export const deleteMovie = () => dispatch => dispatch({type: 'DELETE_MOVIE'});

export const setMovieIndex = (index) => dispatch => dispatch({type: 'CURRENT_MOVIE', payload: index});

export const addMovie = () => dispatch => {
    const movie = {
        id: Math.random() * 1000,
        poster: 'https://i.etsystatic.com/18278551/d/il/703690/1607402502/il_340x270.1607402502_69zh.jpg?',
        title: 'Title',
        genre: 'Genre',
        director: 'Director',
        runtime: '120 Min',
        year: '1970',
        type: 'type',
        plot: 'Plot'
    };
    dispatch({type: 'ADD_MOVIE', payload: movie})
};

export const saveEditedMovie = (movie) => dispatch => dispatch({type: 'SAVE_EDITED_MOVIE', payload: movie});

export const deleteNewMovie = () => dispatch => dispatch({type: 'DELETE_NEW_MOVIE'});