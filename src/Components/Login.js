import React,{useState} from "react";

import {connect, useDispatch} from "react-redux";


import { Link } from "react-router-dom";
import axios from "axios";

import {LOGIN_START,LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/loginActions";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {loginAction} from "../actions/loginActions";

// import {useForm} from "react-hook-form"

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1546388556-40e4b23d8392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
      textAlign: 'center',
      textDecoration: 'none',
  }
}));


const Login = (props) => {
    const classes = useStyles();


    const dispatch = useDispatch()
    // const {register, handleSubmit, errors} =useForm()

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
    //   props.loginAction(user)
    
      dispatch({type: LOGIN_START})
        console.log(user)
        axios
        .post("https://africa-marketplace.herokuapp.com/auth/login", user)
        .then(res => {
             localStorage.setItem('token', res.data.token)
             localStorage.setItem('user_id', res.data.format.id)
            console.log(res.data, "THIS IS THE RESPONSE")
             dispatch({type: LOGIN_SUCCESS, payload:res.data})
             props.history.push("/itemList")
             
        })
        .catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: err})
        })
    //   localStorage.getItem('token')
    //   props.history.push("/itemList")
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={login} Validate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="username"
              label="User Name"
              onChange={handleChanges} 
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={handleChanges} 
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
                <Link className={classes.link} to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoading: state.isLoading,
        err: state.error  
    }
}
export default connect(mapStateToProps)(Login);



