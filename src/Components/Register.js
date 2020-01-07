import React, { useState } from "react";

import {connect} from "react-redux";

import {registerAction} from "../actions/registerActions";


const Register = (props) => {

const [newUser,setNewUser] = useState({
    name: '',
    email: '',
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







        </div>
    )
}
const mapstateToProps = state => {
    return {
        user: state.user,
        isRegistrating: state.isRegistrating,
        err: state.err
    }
}


export default connect(mapstateToProps, {registerAction})(Register);
