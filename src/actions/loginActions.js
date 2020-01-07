import axios from "axios"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"


export const loginAction = user => {
    return dispatch => {
        dispatch({type: LOGIN_START})
        return axios
        .post("https://africa-marketplace.herokuapp.com/auth/login", user)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            return dispatch({type: LOGIN_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err})
        })

    }
}
