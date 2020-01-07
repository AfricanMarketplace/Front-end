import React,{useState} from "react";

import {connect} from "react-redux";
import {loginAction} from "../actions/loginActions";

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

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoading: state.isLoading,
        err: state.error  
    }
}

export default connect(mapStateToProps, {loginAction})(Login);