import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full font-[Raleway] font-medium py-4 backdrop-blur-sm flex justify-between items-center px-10 fixed z-[100] top-0 left-0 '>
        <div>
            <h1 className='font-[nayuki] text-xl '>LOGO</h1>
        </div>
        <div className='flex items-center gap-7'>
            <h1>Home</h1>
            <h1>Community</h1>
            <h1>Category</h1>
            <h1>About</h1>
            <h1>Contact</h1>
            <div className='px-8 py-2 rounded-full bg-[#dfb68d]'>
                Login
            </div>
        </div>
    </div>
  )
}

export default Navbar