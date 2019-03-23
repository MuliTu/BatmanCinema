import { DIRECTOR, GANERS, ID, PLOT, RUNTIME, SET_MOVIE, TITLE, YEAR } from './types';
import * as getters from './selectors';

const initialState = {
    title: '',
    id: '',
    year: 1970,
    plot: '',
    ganers: [],
    runtime: 0,
    director: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case SET_MOVIE:
            return {
                ...state,
                title: action.payload['Title'],
                id: action.payload['imdbID'],
                year: action.payload['Year'],
                plot: action.payload['Plot'],
                ganers: action.payload['Genre'],
                runtime: action.payload['Runtime'],
                director: action.payload['Director']
            };
        case TITLE:
            return {...state, title: action.payload};

        case ID:
            return {...state, id: action.payload};

        case YEAR:
            return {...state,year: action.payload};

        case PLOT:
            return null;

        case GANERS:
            return {...state, list: [action.payload, ...state.list]};

        case RUNTIME:
            return {...state, list: [action.payload, ...state.list]};

        case DIRECTOR:
            return {...state, list: [action.payload, ...state.list]};

        default:
            return state
    }
}
export const getCurrentMovie = state => getters.getCurrentMovie(state);
export const getTitle = state => getters.getTitle(state);
export const getId = state => getters.getId(state);
export const getYear = state => getters.getYear(state);
export const getPlot = state => getters.getPlot(state);
export const getGaners = state => getters.getGaners(state);
export const getRuntime = state => getters.getRuntime(state);
export const getDirector = state => getters.getDirector(state);