import React, { useEffect } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const ItemList = () => {

    const [items, setItems] = useState()

        useEffect(() => {
            axiosWithAuth()
            .get("")
            .then(res => console.log(res.data))



        })



    return (
        <div>
            

        </div>
    )
}

export default ItemList;