import React,{useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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

            </form>





        </div>
    )
}

export default Login;