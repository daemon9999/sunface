import React from "react";
import products from "src/constants/products";
import Product from "src/layouts/products/Product";
const Products = () => {
  
  return <>
  
        {products.map(product => (
            <Product key={product.id} product={product}/>
        ))}
  </>;
};

export default Products;
