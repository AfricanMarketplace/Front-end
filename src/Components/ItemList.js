import React, { useState, useEffect } from "react"
// import axios from "axios"
import AddItemForm from "./AddItemForm"
import Item from "./Item";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ItemList = () => {

    const [items, setItems] = useState()

        useEffect(() => {
            axiosWithAuth()
            .get("/item")
            .then(res => {
                setItems(res.data.items)
                console.log(res.data)
            })
            .catch(err => console.log(err))
     },[])


console.log(items)
    return (
        <div>
            {/* We are maping through the array of items here */}
            {/* <AddItemForm items={items} setItems={setItems}/>
                {items.map(item => (
                    <Item key={item.id} />
                ))} */}
                <Link to="/addItemForm"><button>Add new Item</button> </Link>
        </div>
    )
}

export default ItemList;