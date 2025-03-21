import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full font-[Raleway] font-medium py-4 backdrop-blur-sm flex justify-between items-center px-10 fixed z-[100] top-0 left-0 '>
        <div>
            <h1 className='font-[nayuki] text-xl '>LOGO</h1>
        </div>
        <div className='flex items-center gap-7'>
            <a href="/">Home</a>
            <a href="/communities">Community</a>
            <a href="/catogary">Category</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            {/* <a href="/cart">cart</a>
            <a href="#">Favourites</a> */}
          
            <div className='px-8 py-2 rounded-full bg-[#dfb68d]'>
                Login
            </div>
        </div>
    </div>
  )
}

export default Navbar