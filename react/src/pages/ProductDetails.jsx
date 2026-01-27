import { Link, useParams } from "react-router-dom"
import React from "react"
export default function ProductDetails(){
    const products=[
        {id:1,name:"laptop",price:"30000",description:"lorem is path of way lanunch"},
        {id:2,name:"lapto",price:"8000",description:"lorem is path of way lanunch"},
        {id:3,name:"lapt",price:"9000",description:"lorem is path of way lanunch"},
        {id:4,name:"lap",price:"3900",description:"lorem is path of way lanunch"},
        {id:5,name:"la",price:"12300",description:"lorem is path of way lanunch"}
    ]
    const {id}=useParams()
    const product=products.find((p)=>p.id===Number(id))
    return(
        <>
        <div>
        <h1>Products</h1>
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <h4>{product.description}</h4>
        </div>
        </>
    )
}