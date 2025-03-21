import React from 'react'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen  bg-[var(--primary-color)]">
        <h1 className='text-7xl font-bold text-[#222222]'>About</h1>
      </div>
    </>
  )
}

export default About