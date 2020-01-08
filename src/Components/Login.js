import React,{useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom"

import {connect} from "react-redux";
import {loginAction} from "../actions/loginActions";

import {useForm} from "react-hook-form"

const Login = (props) => {

    const {register, handleSubmit, errors} =useForm()

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
      props.loginAction(user)
  }
// dont forget to add loginAction in mapStateToProps
    return (
        //Login Form goes here
        <div>
            <form onSubmit={login, handleSubmit(onSubmit)}>
            <label> Username
                <input 
                    name="username"
                    type="text"
                    placeholder="User Name"
                    onChange={handleChanges} 
                    ref={register({required: true, minLength: 4})}
                />
                {errors.username && <span>This field is required</span>}
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
                <Link to="/register"> Register Here</Link>
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
export default connect(mapStateToProps, {loginAction})(Login);