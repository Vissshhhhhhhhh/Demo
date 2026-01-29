import { Link, useParams } from "react-router-dom"
import React, { useState ,useEffect} from "react"
import './productdetails.css'
export default function ProductDetails(){
    const[products,setProduct]=useState({})
    const {id}=useParams()

     useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
                .then(response => response.json())
                .then(data =>setProduct(data));
        },[])
    
    return(
        <>
        <div>
        <h1>Products</h1>
           <div id="dir">
                <h3>{products.title}</h3>
                <h4>{products.price}</h4>
                <h4>{products.description}</h4>
            </div>
            <div id="dis "><img src={products.image}/></div>

            
        </div>
        </>
    )
}