import { ADD_MOVIE, CURRENT_MOVIE, DELETE_MOVIE, DELETE_NEW_MOVIE, GET_MOVIES, SAVE_EDITED_MOVIE } from './types';
import * as getters from './selectors'

const initialState = {
    list: [],
    currentMovieIndex: 0,
    currentMovie: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, list: action.payload};

        case DELETE_MOVIE:
            return {
                ...state,
                list: [...state.list.slice(0, state.currentMovieIndex), ...state.list.slice(state.currentMovieIndex + 1, state.list.length)]
            };

        case CURRENT_MOVIE:
            return {...state, currentMovieIndex: action.payload, currentMovie: state.list[action.payload]};

        case ADD_MOVIE:
            return {...state, list: [action.payload, ...state.list]};

        case SAVE_EDITED_MOVIE:
            const temp = state.list.slice();
            temp[state.currentMovieIndex] = action.payload;
            return {...state, list: [...temp]};

        case DELETE_NEW_MOVIE:
            return {...state, list:[...state.list.slice(1)]};
        default:
            return state
    }
}
export const getMovies = (state) => getters.getMovies(state);
export const getCurrentMovie = (state) => getters.getCurrentMovie(state);
export const getCurrentTitles = (state) => getters.getMovieTitles(state);
