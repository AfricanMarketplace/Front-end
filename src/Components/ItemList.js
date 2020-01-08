import React, { useState, useEffect } from "react"
import axios from "axios"
import Item from "./Item"
import AddItemForm from "./AddItemForm"


const ItemList = () => {

    const [items, setItems] = useState([])

        useEffect(() => {
            axios
            .get("https://africa-marketplace.herokuapp.com/item")
            .then(res => {
                setItems(res.data.items)
                console.log(res.data)
            })
            .catch(err => console.log(err))
     },[])



    return (
        <div>
            {items.map(item => {
                return(<Item item={item} key={item.id} />)
            })}
        </div>
    )
}

export default ItemList;