import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const ItemList = () => {

    const [items, setItems] = useState()

        useEffect(() => {
            axiosWithAuth()
            .get("https://africa-marketplace.herokuapp.com/item")
            .then(res => {
                setItems(res.data)
            
            })
            .catch(err => console.log(err))
     })



    return (
        <div>
            



        </div>
    )
}

export default ItemList;