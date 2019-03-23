export const openPopUp = (type) => dispatch => {
    dispatch({type: 'OPEN', payload: type})
};

export const closePopUp = () => dispatch => {
    dispatch({type: 'CLOSE'})
};