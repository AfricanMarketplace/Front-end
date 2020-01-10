import React,{useState} from "react";

import {connect, useDispatch} from "react-redux";


import { Link } from "react-router-dom";
import axios from "axios";

import {LOGIN_START,LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/loginActions";

// import {useForm} from "react-hook-form"

const Login = (props) => {

    const dispatch = useDispatch()
    // const {register, handleSubmit, errors} =useForm()

    const onSubmit = data => {
        console.log(data)
    }


    const [user, setUser]=useState({
        username:'',
        password: ''
    });

    const handleChanges = e => {
        e.preventDefault()
        setUser({...user,[e.target.name]: e.target.value})
    }

  const login = e => {
      e.preventDefault();
    //   props.loginAction(user)
    
      dispatch({type: LOGIN_START})
        console.log(user)
        axios
        .post("https://africa-marketplace.herokuapp.com/auth/login", user)
        .then(res => {
             localStorage.setItem('token', res.data.token)
             localStorage.setItem('user_id', res.data.format.id)
            console.log(res.data, "THIS IS THE RESPONSE")
             dispatch({type: LOGIN_SUCCESS, payload:res.data})
             props.history.push("/itemList")
             
        })
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err})
        })
    //   localStorage.getItem('token')
    //   props.history.push("/itemList")
  }


    return (
       
        <div>
            <form onSubmit={login} >
            <label> Username
                <input 
                    name="username"
                    type="text"
                    placeholder="User Name"
                    onChange={handleChanges} 
                    // ref={register({required: true, minLength: 4})}
                />
                {/* {errors.username && <span>This field is required</span>} */}
                </label>
                <label> Password
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChanges} 
                />
                </label>
                <button type="submit">Sign in</button>
            </form>
            <div>
                <h3>Don't have an Account?</h3>
                <Link to="/register"> <button>Register Here</button></Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoading: state.isLoading,
        err: state.error  
    }
}
export default connect(mapStateToProps)(Login);



