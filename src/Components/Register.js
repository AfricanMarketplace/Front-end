import React, { useState } from "react";

const Register = () => {

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

    

    }



    return (
        //Registration Form goes here
        <div>







        </div>
    )
}

export default Register;
