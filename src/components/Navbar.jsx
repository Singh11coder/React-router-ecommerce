import React from 'react'
import Search from './Search';

const Navbar = () => {
  return (
    <div className="text-white flex justify-between items-center py-5 px-15">
       <div className="text-lime-500 text-4xl font-bold ">Kartly</div>
       <div className="flex gap-10 text-2xl ">
        <h1 className="cursor-pointer">Home</h1>
        <h1 className="cursor-pointer">Shop</h1>
        <h1 className="cursor-pointer">Categories</h1>
        <h1 className="cursor-pointer">Contact</h1>
       </div>
       <div className="text-white flex gap-10 items-center">
          <Search/>
          <button className="bg-lime-500 py-2 px-6 text-2xl rounded-4xl cursor-pointer">Login</button>
          <button className="bg-lime-500 py-2 px-6 text-2xl rounded-4xl cursor-pointer">Cart</button>
       </div>
    </div>
  )
}

export default Navbar;
