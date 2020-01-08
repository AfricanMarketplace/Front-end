import {REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE} from "../actions/registerActions";

const initialState = {
    isRegistrating: '',
    err: ''
}

export const registerReducer = (state=initialState, action) => {
    switch(action.type) {
        case REGISTER_START : 
            return {
                ...state,
                isRegistrating: true,
            }
        case REGISTER_SUCCESS : 
            return {
                ...state,
                isRegistrating: false,
                user: action.payload
            }
        case REGISTER_FAILURE :
            return {
                ...state, 
                isRegistrating: false,
                err: action.payload
            }

        default: 
        return state;
    }
}