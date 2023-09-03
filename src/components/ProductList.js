import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <>
        {products.map((product)=>{
            return <ProductCard product={product} key={product.id}/>
        })}
    </>
  )
}

export default ProductList