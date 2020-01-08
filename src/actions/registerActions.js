import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";


export const registerAction = user => {
    return dispatch => {
        dispatch({type: REGISTER_START});
       return axios 
       
        .post("https://africa-marketplace.herokuapp.com/auth/register/", user)
        .then(res => {
            // localStorage.setItem('token', res.data.token)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data})
            console.log(res)
        })
        .catch(err => {
            dispatch({type: REGISTER_FAILURE, payload: err})
        })
    }
       
}

