import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddItemForm = (props) => {

const [addItem, setAddItem] = useState()

    const handlechanges = e => {
    e.preventDefault();
    setAddItem({...addItem, [e.target.name] : e.target.value})
}

const submitAddItem = e => {
    e.preventDefault()
    axiosWithAuth()
    .post("/item", addItem)
    .then(res => {
        console.log(res)
        props.setItems(res.data)
    })
    setAddItem({itemName: '', description: '', price: ''})
}


    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Item Name"
                    name="name"
                    value={addItem.itemName}
                    onChange={props.handleChanges}
                
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="name"
                    value={addItem.description}
                    onChange={props.handleChanges}
                
                />

                <input
                    type="text"
                    placeholder="Price"
                    name="name"
                    value={addItem.price}
                    onChange={props.handleChanges}
                
                />
            </form>
            <button onClick={submitAddItem}>Add Item</button>

        </div>
    )
}

export default AddItemForm