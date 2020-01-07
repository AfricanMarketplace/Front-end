import React,{useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
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
// dont forget to add loginAction in mapStateToProps
    return (
        //Login Form goes here
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

export default Login;