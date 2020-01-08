import React from 'react';
import './App.css';

import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./utils/PrivateRoute";


import {BrowserRouter as Router, Route} from "react-router-dom";
import Item from "./Components/Item";
import ItemList from './Components/ItemList';



function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route path ="/register" component={Register}/>

      <PrivateRoute path="/item" component={Item}/> 
      



    </div>
    </Router> 
  );
}

export default App;
