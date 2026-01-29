import { Link } from "react-router-dom"
import React, { useEffect } from "react"
import { useState } from "react";
export default function Products(){
    const[products,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data =>setProduct(data));
    },[])
   
    return(
        <>
        <div>
        <h1>Products</h1>
        {products.map((products)=>(
            <div key={products.id}>
                <img src={products.image}/>
                <h3>{products.title}</h3>
                <h4>{products.price}</h4>
                <Link to={`/products/${products.id}`}>view Details</Link>
            </div>
        ))}
        </div>
        </>
    )
}