import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import {loginReducer} from "../reducers/loginReducer";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

const AddItemForm = (props) => {
console.log("HELLOPROPS",props)

const [addItem, setAddItem] = useState({name: '', description: '', price: '', user_id: Number(localStorage.getItem('user_id')), category_id: 2})

const [items, setItems] = useState([])


   const handleChanges = e => {
    e.preventDefault();
    setAddItem({...addItem, [e.target.name] : e.target.value})
}

useEffect(() => {
    axiosWithAuth()
    .get("https://africa-marketplace.herokuapp.com/item")
    .then(res => {
        setItems(res.data.items)
        console.log(res)
    })
    .catch(err => console.log(err))
},[])


const submitAddItem = e => {
    e.preventDefault()
    console.log(addItem)
    axiosWithAuth()
    .post("https://africa-marketplace.herokuapp.com/item", addItem)
    .then(res => {
        
        console.log(res)
        setAddItem(res.data)
        props.history.push('/itemList')
    })
    setAddItem({name: '', description: '', price: '', user_id: Number(localStorage.getItem('user_id')), category_id: ''})
}


    return (
        <div>
            <form class="box">
                <div>
                <h2>Add New Item</h2>
                </div>
                <input
                    type="text"
                    placeholder="Item Name"
                    name="name"
                    value={addItem.itemName}
                    onChange={handleChanges}
                    class="input"
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={addItem.description}
                    onChange={handleChanges}
                    class="input"
                />

                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={addItem.price}
                    onChange={handleChanges}
                    class="input"
                />
                <div class="buttonDiv">
                    <button onClick={submitAddItem} class="button">Add Item</button>
                    <Link to="/itemList" class="link">Back to Items</Link>
                </div>
            </form>
            
        </div>
    )
}


const mapStateToProps= state => {
    console.log(state,"MAPSTATETOPROPS")
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{})(AddItemForm)