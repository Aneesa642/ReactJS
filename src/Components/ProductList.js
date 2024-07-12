import React from 'react'

const ProductList = ({products, search}) => {

    const filterProduct = products.filter(product => product.name.toLowerCase().include(search.toLowerCase())
 );

 if (filterProduct.length === 0){
    return<p>No Product Found</p>
 }
    
  return (
    <ul>
        {filterProduct.map((product, index)=>(
            <li key={index}>{product.name} - ${product.price}</li>
        ))}
    </ul>
  )
}

export default ProductList