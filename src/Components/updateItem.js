import React,{useState, useEffect} from "react"; 
//  import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";



const initialItem = {
    name: '',
    description: '',
    price: '',
    user_id: Number(localStorage.getItem('user_id')),
    category_id: '',

}

const UpdateForm = (props) => {
 console.log(props, "PROPS")

    const [updateItem, setUpdateItem] = useState(initialItem)

    const id = props.match.params.id
    //  console.log(id, "THIS IS THE ID")

    useEffect(() => {
    axiosWithAuth()
    .get(`https://africa-marketplace.herokuapp.com/item/${props.match.params.id}`)
    .then(res => {
        // console.log(res.data, "HELLO DATA")
        setUpdateItem(res.data.item)
        
    })
    .catch(err => console.log("The item you are looking for does not exist", err))

    },[props.match.params.id])


    const handleChanges = e => {
        setUpdateItem({...updateItem, [e.target.name] : e.target.value})
    }

    const handleSubmit = e => {
        const newObject = {
            name:updateItem.name,
            description: updateItem.description,
            price: updateItem.price,
            user_id:updateItem.user_id,
            category_id:updateItem.category_id
        }

        e.preventDefault();
        console.log(updateItem, "updateItemID")
        axiosWithAuth()
        .put(`https://africa-marketplace.herokuapp.com/item/${updateItem.id}`, newObject)
        .then(res => {
                console.log(res.data)
                setUpdateItem(res.data)
                props.history.push(`/item/${updateItem.id}`)
        })
    }
    

    return (
        <div>
            <form>

            <input
                    type="text"
                    placeholder="Item Name"
                    name="name"
                    value={updateItem.name}
                    onChange={handleChanges}
                
                />

            <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={updateItem.description}
                    onChange={handleChanges}
                
                />

            <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={updateItem.price}
                    onChange={handleChanges}
                
                />
            </form>
            <button onClick={handleSubmit}>Update Item</button>
        </div>

    )
}

export default UpdateForm;