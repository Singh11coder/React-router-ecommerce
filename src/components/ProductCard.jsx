import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white w-90 p-10 rounded-2xl">
         <img 
         className="rounded-2xl h-80 w-70 "
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqNEWrgQPVnW8necReUu-gYSrk8wbiw8ZC2mdp7b_qw&s=10"/>
         <br></br>
         <div className="flex w-70 justify-between items-center">
            <h1 className="text-2xl mb-2">Title</h1>
            <span>4.1 ⭐</span>
         </div>
         
         
         <h1 className="text-2xl mb-2">Description</h1>
       
         <div className="flex justify-between items-center">
           <h1 className="text-green-500 text-2xl">$112.23</h1>
           <button className="bg-black px-4 py-2 rounded-xl cursor-pointer">Add to Cart</button>
         </div>
      </div>
    </div>
  )
}

export default ProductCard;
