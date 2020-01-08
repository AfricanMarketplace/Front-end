import React,{useState} from "react";

import {connect} from "react-redux";
import {loginAction} from "../actions/loginActions";

import { Link } from "react-router-dom"

const Login = (props) => {

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

    return (
       
        <div>
            <form onSubmit={login}>
            <label> Username
                <input 
                    name="username"
                    type="text"
                    placeholder="User Name"
                    onChange={handleChanges} 
                />
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