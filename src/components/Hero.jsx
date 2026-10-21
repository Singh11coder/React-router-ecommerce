import React from 'react'

const Hero = () => {
  return (
    <div className="px-20 m-10 flex gap-20">
        <div className="bg-lime-300 w-200 h-120 rounded-4xl pt-55 pl-10 ml-6">
           <button className="bg-black text-small font-semibold uppercase text-lime-400 py-2 px-4 rounded-4xl m-2">New Season</button>
           <h1 className="m-2 text-4xl font-extrabold font pl-2">Style that Work as hard<br></br> as you do </h1>
           <button className="bg-black text-lime-400 py-2 px-8 rounded-4xl ml-2 mt-6 font-medium">Shop Now</button>
        </div>
        <div>
           <img 
           className="w-130 h-120 rounded-3xl"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_ojrXxFm9qlZmxlTQcEit7NAX0Hdz0TM296QcsVu3Q&s=10"/>
        </div>
    </div>
  )
}

export default Hero
