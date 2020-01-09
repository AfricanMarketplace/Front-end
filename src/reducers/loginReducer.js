import {LOGIN_START,LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/loginActions";

const initialState =  {
    user: {},
    isLoading: false,
    err: ''
}



export const loginReducer = (state=initialState, action) => {
    console.log(state, "THIS IS THE STATE")
switch (action.payload) {
    case LOGIN_START :
        return {
            ...state,
            isLoading: true, 
        }
        case LOGIN_SUCCESS :
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_FAILURE : 
        return {
            ...state,
            isLoading: false,
            err: action.payload
        }
        
    default:
        return state;
}


}