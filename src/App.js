import React from 'react';
import './App.css';

import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./utils/PrivateRoute";


import {BrowserRouter as Router, Route} from "react-router-dom";
import ItemList from './Components/ItemList';



function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/login" component={Login}/>
      <Route path ="/register" component={Register}/>

      <PrivateRoute path="/item" component={ItemList}/> 
      



    </div>
    </Router> 
  );
}

export default App;
