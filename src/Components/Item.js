import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";



const Item = (props) => {

    // const Divider = styled.div`
    //   text-align: center;
    //    border: 2px solid red;
    //    margin: 5%;
    //    display: flex;
    //    width:25%;
    //    padding:0;
       

       
       
    // `
    
    console.log(props)

const [item, setItem] = useState({})

const id = props.match.params.id

useEffect(() => {
axiosWithAuth()
.get(`https://africa-marketplace.herokuapp.com/item/${props.id}`)
.then(res => {
    console.log(res.data.item, "Item is rendering")
    setItem(res.data.item)
})
.catch(err => console.log("The item you are looking for does not exist", err))

},[id])


// console.log(item, "LOOK AT ME")

    return (
       
        //  <Divider>
        //   <Link to={`/item/${props.id}`}>   
            
            <div key={props.key} class="item">
                
                <h3> Name: {item.name} </h3>
                <p> Description: {item.description} </p>
                <p> Price: {item.price} </p>
                {console.log(item)}
                {/* <Link to={`/updateItem/${item.id}`}><button>Edit</button> </Link> 
                <button onClick={deleteButton}>Delete</button> */}
            </div>
          /* </Link>   */
        
        
         /* </Divider> */
       
    )
}

export default Item; 