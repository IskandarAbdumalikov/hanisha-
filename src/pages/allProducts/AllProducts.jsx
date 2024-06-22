import React, { useState } from 'react'
import Products from '../../components/products/Products'
import AllProductsSearch from '../../components/allProductsSearch/AllProductsSearch'

const AllProducts = () => {
  const [subtitle, setSubTitle] = useState(false)

  return (
    <div className='allproducts'>
      <AllProductsSearch subtitle={subtitle}/>
      <Products />
    </div>
  )
}

export default AllProducts