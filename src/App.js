import React from 'react';
import './App.css';

import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./utils/PrivateRoute";


import {BrowserRouter as Router, Route} from "react-router-dom";
import Item from "./Components/Item";
import ItemList from './Components/ItemList';
import addItemForm from "./Components/AddItemForm";
import UpdateItem from "./Components/updateItem";
import SpecificItem from "./Components/specificItem";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Login}/>
      <Route path ="/register" component={Register}/>

      <PrivateRoute path="/item/:id" component={SpecificItem}/> 
      <PrivateRoute path="/itemList" component={ItemList}/>
      <PrivateRoute path="/addItemForm" component={addItemForm}/> 
      <PrivateRoute path ="/updateItem/:id" component={UpdateItem} />
      

    </div>
    </Router> 
  );
}

export default App;
