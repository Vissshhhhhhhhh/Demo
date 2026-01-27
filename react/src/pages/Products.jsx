import { Link } from "react-router-dom"
import React from "react"
export default function Products(){
    const products=[
        {id:1,name:"laptop",price:"30000"},
        {id:2,name:"lapto",price:"8000"},
        {id:3,name:"lapt",price:"9000"},
        {id:4,name:"lap",price:"3900"},
        {id:5,name:"la",price:"12300"}
    ]
    return(
        <>
        <div>
        <h1>Products</h1>
        {products.map((products)=>(
            <div key={products.id}>
                <h3>{products.name}</h3>
                <h4>{products.price}</h4>
                <Link to={`/products/${products.id}`}>view Details</Link>
            </div>
        ))}
        </div>
        </>
    )
}