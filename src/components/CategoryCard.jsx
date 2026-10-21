import React from 'react'

const CategoryCard = () => {
  return (
    <div>
       <div className="text-white flex justify-evenly ">
          <div className='cursor-pointer bg-gray-800 rounded-2xl py-3 px-4 w-60 flex justify-between'>
             <h1>Electronics</h1>
             <span>→</span>
          </div>
         <div className='cursor-pointer bg-gray-800 rounded-2xl py-3 px-4 w-60 flex justify-between'>
             <h1>Jewellery</h1>
             <span>→</span>
          </div>
          <div className='cursor-pointer bg-gray-800 rounded-2xl py-3 px-4 w-60 flex justify-between'>
             <h1>Men's clothing</h1>
             <span>→</span>
          </div>
          <div className='cursor-pointer bg-gray-800 rounded-2xl py-3 px-4 w-60 flex justify-between'>
             <h1>Women's clothing</h1>
             <span>→</span>
          </div>
       </div>
    </div>
  )
}

export default CategoryCard;
