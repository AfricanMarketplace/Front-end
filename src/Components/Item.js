import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { publicDecrypt } from "crypto";

const initialItem = {
    id: '',
    name: '',
    description: '',
    price: '',
    user_id: '',
    category_id: '',

}

const Item = () => {

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


    return (
        <div>







        </div>
    )
}

export default Item; 