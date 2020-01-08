import React, { useState, useEffect } from "react";
import axios from "axios";
import { publicDecrypt } from "crypto";

const initialItem = {
    id: '',
    name: '',
    description: '',
    price: '',
    user_id: '',
    category_id: '',

}

const Item = (props) => {

const [updateItem, setUpdateItem] = useState(initialItem)

const id = props.match.params.id


useEffect(() => {
axios
.get(`https://africa-marketplace.herokuapp.com/item/${id}`)
.then(res => {
    console.log(res.data)
    setUpdateItem(res.data)
})
.catch(err => console.log("The item you are looking for does not exist", err))

},[id])


const handleChanges = e => {
    setUpdateItem({...updateItem, [e.target.name] : e.target.value})
}


const handleSubmit = e => {
    e.preventDefault();
    console.log("button fired!")
    axios
    .put(`https://africa-marketplace.herokuapp.com/item/${Item.id}, Item`)
    .then(res => {
            console.log(res.data)
            setUpdateItem(res.data)
            props.history.push(`/item/${Item.id}`)
    })
}

const deleteButton = e => {
    e.preventDefault()
    axios
    .delete(`https://africa-marketplace.herokuapp.com/item/${Item.id}`)
    .then( res => {
        props.history.push('/')
    })
    .catch(err => console.log(err))
}



    return (
        <div>

            {/* we are sharing items here via props */}
            
            <button onClick={handleSubmit}>Edit Item</button>
            <button onClick={deleteButton}>Delete Item</button>


        </div>
    )
}

export default Item; 