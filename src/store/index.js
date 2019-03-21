import { combineReducers } from 'redux'
import reducer, * as fromMovieReducer from '../reducer/reducer'


export default combineReducers({
    movie:reducer
})

export const getMovies = state => fromMovieReducer.getMovies(state.movie);