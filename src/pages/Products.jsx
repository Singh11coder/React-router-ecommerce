import React from 'react';
import Search from '../components/Search';

const Products = () => {
  return (
    <div>
      <div>
         <h1>All Products</h1>
         <div>
            <div>
              <h1>All</h1>
              <h1>Electronics</h1>
              <h1>Jewelery</h1>
              <h1>Men's clothing</h1>
              <h1>Women's clothing</h1>
            </div>
            <div>
              <Search/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Products
