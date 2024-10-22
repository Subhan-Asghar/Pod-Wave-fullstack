import React from 'react'

const Home = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-gray-800 to-gray-900 h-16 flex items-center justify-between px-6 shadow-md">
  <h3 className="text-red-400 font-extrabold text-3xl tracking-wide">Artify</h3>
  <button className="bg-white h-10 text-red-500 font-bold w-24 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-red-500 hover:text-white">
    Show Img
  </button>
</nav>

<div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen">
  <div className="flex justify-center items-center pt-10 space-x-2">
    <input 
      type="text" 
      placeholder="Enter text..." 
      className="w-80 h-12 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <button className="bg-red-500 h-12 w-32 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-600">
      Generate
    </button>
  </div>

  <h3 className="text-white font-extrabold text-2xl text-center pt-12">
    Generated Images
  </h3>
  
  <img src="" alt="" />
  <div className="w-40 h-1 bg-red-500 mx-auto mt-2"></div>
</div>

    </>
  )
}

export default Home
