export const setMovie = movie => dispatch => {
    dispatch({type: 'SET_MOVIE', payload: movie})
};

export const setData = obj => dispatch => {
    dispatch({type: [obj.label], payload: obj.value})
};

