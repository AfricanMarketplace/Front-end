import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Item = (props) => {
    console.log(props)

const [item, setItem] = useState({})

const id = props.match.params.id

useEffect(() => {
axiosWithAuth()
.get(`https://africa-marketplace.herokuapp.com/item/${props.id}`)
.then(res => {
    console.log(res.data.item, "Item is rendering")
    setItem(res.data.item)
})
.catch(err => console.log("The item you are looking for does not exist", err))

},[id])


console.log(item, "LOOK AT ME")

    return (
        <div> 
        {/* <Link to={`/item/${props.id}`}>  */}
        <div key={props.key}>
            <h2> Name: {item.name} </h2>
            <p> Description: {item.description} </p>
            <p> Price: {item.price} </p>
            {console.log(item)}
           {/* <Link to={`/updateItem/${item.id}`}><button>Edit</button> </Link> 
            <button onClick={deleteButton}>Delete</button> */}


        </div>
        {/* </Link> */}
        </div>
    )
}

export default Item; 