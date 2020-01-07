import React, { useState, useEffect } from "react"
import axios from "axios"

const ItemList = () => {

    const [items, setItems] = useState()

        useEffect(() => {
            axios
            .get("https://africa-marketplace.herokuapp.com/item")
            .then(res => {
                setItems(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
     },[])



    return (
        <div>
            



        </div>
    )
}

export default ItemList;