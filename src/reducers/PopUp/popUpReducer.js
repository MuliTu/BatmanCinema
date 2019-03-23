import * as getters from './selectors'
import { CLOSE, OPEN } from './types';

const initialState = {
    isOpen: false,
    type:''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case OPEN:
            return {...state, isOpen: true, type: action.payload};

        case CLOSE:
            return {...state, isOpen: false};

        default:
            return state
    }
}
export const getCurrentModalState = (state) => {
    return getters.getCurrentModalState( state )
};
export const getType = (state) => {
    return getters.getCurrentType(state)
}