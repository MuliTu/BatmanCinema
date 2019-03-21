import { GET_MOVIES } from './types';
import * as getters from './selectors'

const initialState = {
    list: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            console.log( 'enter GET_MOVIES', action.payload );
            return {...state, list: action.payload};

        default:
            console.log( 'enter defalut' );
            return state
    }
}
export const getMovies = (state) => getters.getMovies(state);
