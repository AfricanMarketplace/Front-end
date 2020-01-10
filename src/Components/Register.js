import React, { useState } from "react";
import { Link } from "react-router-dom"

import {connect} from "react-redux";

import {registerAction} from "../actions/registerActions";


const Register = (props) => {

const [newUser,setNewUser] = useState({
    username: '',
    password: ''
})

    const handleChanges = e => {
        e.preventDefault();
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }


    const signUp = e => {
        e.preventDefault();
        props.registerAction(newUser)
    }



    return (
        //Registration Form goes here
        <div>
            <form onSubmit={signUp}>
                {/* <label> Your Name
                <input 
                    type="text" 
                    name="name" 
                    onChange={handleChanges} 
                />
                </label>
                <label> Your Email
                <input 
                    type="text" 
                    name="email" 
                    onChange={handleChanges} 
                />
                </label> */}
                <label> Set a Username
                <input 
                    type="text" 
                    name="username" 
                    onChange={handleChanges} 
                />
                </label><label> Set a Password
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChanges} 
                />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <h5>Already have an account?</h5>
            <Link to="/"><button>Log In</button></Link>
        </div>
    )
}
const mapstateToProps = state => {
    return {
        isRegistrating: state.isRegistrating,
        err: state.err
    }
}


export default connect(mapstateToProps, {registerAction})(Register);
