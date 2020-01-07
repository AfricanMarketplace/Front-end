import React from 'react';
import './App.css';

import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./utils/PrivateRoute";


import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/login" component={Login}/>
      <Route path ="/register" component={Register}/>

      <Route path="/item" /> // Make this a privateRoute 
      



    </div>
    </Router> 
  );
}

export default App;
