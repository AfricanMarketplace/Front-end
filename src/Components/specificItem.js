import React, {useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import axios from "axios";
import {Link} from "react-router-dom";

const SpecificItem = (props) => {

    const[oneItem,setOneItem ] = useState({})

console.log(props.match.params.id)

useEffect(() => {
    console.log("HELLO")
    axiosWithAuth()
    .get(`https://africa-marketplace.herokuapp.com/item/${props.match.params.id}`)
    .then(res => {
         setOneItem(res.data.item)
        console.log(res.data.item)
    })
    .catch(err => console.log(err))

},[])


const deleteButton = e => {
    e.preventDefault()
    axiosWithAuth()
    .delete(`https://africa-marketplace.herokuapp.com/item/${oneItem.id}`)
    .then( res => {
        props.history.push('/itemList')
    })
    .catch(err => console.log(err))
}

console.log(oneItem) 
    return (
        <div className="eachItem">
            <p>Name: {oneItem.name}</p>
            <p>Description: {oneItem.description}</p>
            <p>Price: {oneItem.price}</p>
            <div className="editDiv"> 
            <Link to={`/updateItem/${oneItem.id}`}><button className="editButton">Edit</button> </Link> 
            <button onClick={deleteButton} className="editButton">Delete</button>
            <Link to="/itemList"><button className="editButton">Back</button></Link>
            </div>

        </div>
    )
}

export default SpecificItem;