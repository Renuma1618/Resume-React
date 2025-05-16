import React, { useState } from "react"

export default function Products(){
var [products,setProducts]=useState()

function fetchData(){
     fetch('https://fakestoreapi.com/products')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    });
}
fetchData();
}