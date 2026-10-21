import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import CategoryCard from './components/CategoryCard';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';

function App() {


  return (
    <div className="bg-black ">
       <Navbar/>
       <Hero/>
       <ProductCard/>
       <CategoryCard/>
    </div>
  )
}

export default App
