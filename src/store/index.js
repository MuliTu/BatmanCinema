import { combineReducers } from 'redux'
import movieReducer, * as fromMovieReducer from '../reducers/Movie/movieReducer'
import modalReducer, * as fromModalReducer from '../reducers/PopUp/popUpReducer';
import editReducer,* as fromEditReducer from '../reducers/Edit/editReducer';

export default combineReducers({
    movie:movieReducer,
    popUp:modalReducer,
    editMovie:editReducer
})
 /*---------------- Movie Selectors ----------------*/
export const getMovies = state => fromMovieReducer.getMovies(state.movie);
export const getCurrentMovie = state => fromMovieReducer.getCurrentMovie(state.movie);
export const getCurrentTitles = state => fromMovieReducer.getCurrentTitles(state.movie);




/*---------------- PopUp Selectors ----------------*/
export const currentModalState = state => fromModalReducer.getCurrentModalState(state.popUp);
export const currentType = state => fromModalReducer.getType(state.popUp);


/*---------------- Edit Movie Selectors ----------------*/

export const getCurrentEditMovie = state => fromEditReducer.getCurrentMovie(state.editMovie);
export const getTitle = state => fromEditReducer.getTitle(state.editMovie);
export const getId = state => fromEditReducer.getId(state.editMovie);
export const getYear = state => fromEditReducer.getYear(state.editMovie);
export const getPlot = state => fromEditReducer.getPlot(state.editMovie);
export const getGaners = state => fromEditReducer.getGaners(state.editMovie);
export const getRuntime = state => fromEditReducer.getRuntime(state.editMovie);
export const getDirector = state => fromEditReducer.getDirector(state.editMovie);