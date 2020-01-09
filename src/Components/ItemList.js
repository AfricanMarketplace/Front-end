import React, { useState, useEffect } from "react"
// import axios from "axios"
import Item from "./Item";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {Link} from "react-router-dom";

const ItemList = (props) => {

    console.log(props, "itemList props")
    const [items, setItems] = useState()

        useEffect(() => {
            axiosWithAuth()
            .get("https://africa-marketplace.herokuapp.com/item")
            .then(res => {
                setItems(res.data.items)
                console.log(res)
            })
            .catch(err => console.log(err))
     },[])


console.log(items)
    return (
        <div>
                {items && items.map(item => (
                    <Link to={`/item/${item.id}`}> 
                    <Item {...props}key={item.id} id={item.id} name={item.name}
                     description={item.description} price={item.price}/> </Link>
                ))}
                
                <Link to="/addItemForm"><button>Add new Item</button> </Link>


            
        </div>
    )
}

export default ItemList;