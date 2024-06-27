

import './index.css';
import ProductCard from "../Atoms/ProductCard";
import React from "react";



const Products =()=>{
   const {products,error,loading} = useProduct();

    return (
        <div className="product">
         { loading && <h2>loading  ...</h2>}
         { error.length > 0&& <h2>{error}</h2>}
         {products.length > 0 ? products.map((product)=>(
            <ProductCard
            key={product.id}
            image= {product.image}
            title={product.title} 
             price={product.price}
            />
         )):! loading && <h2>No products found</h2>}
        </div>    )
}
export default Products