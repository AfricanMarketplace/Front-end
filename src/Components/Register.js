import React, { useState } from "react";
import { Link } from "react-router-dom"

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
            <form>
                <label> Your Name
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
                </label>
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
            <Link to="/login">Log In</Link>
        </div>
    )
}

export default Register;
