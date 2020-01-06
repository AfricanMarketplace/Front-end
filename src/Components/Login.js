import React,{useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {

    const [user, setUser]=useState({
        username:'',
        password: ''
    });

    const handleChanges = e => {
        e.preventDefault()
        setUser({...user,[e.target.name]: e.target.value})
    }

  const login = e => {
    e.preventDefault()
    //axiosWithAuth.post
    axiosWithAuth()
    .post("/login", user)
    .then(res => console.log(res.data))
}

    return (
        //Login Form goes here
        <div>






        </div>
    )
}

export default Login;