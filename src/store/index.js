import { combineReducers } from 'redux'
import movieReducer, * as fromMovieReducer from '../reducers/Movie/movieReducer'
import modalReducer, * as fromModalReducer from '../reducers/PopUp/popUpReducer';

export default combineReducers({
    movie:movieReducer,
    popUp:modalReducer,
})
 /*---------------- Movie Selectors ----------------*/
export const getMovies = state => fromMovieReducer.getMovies(state.movie);
export const getCurrentMovie = state => fromMovieReducer.getCurrentMovie(state.movie);
export const getCurrentTitles = state => fromMovieReducer.getCurrentTitles(state.movie);




/*---------------- PopUp Selectors ----------------*/
export const currentModalState = state => fromModalReducer.getCurrentModalState(state.popUp);
export const currentType = state => fromModalReducer.getType(state.popUp);


