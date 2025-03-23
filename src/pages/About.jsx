import React from 'react'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full p-10 flex justify-center items-center '>
        <div className='h-3/4 w-full bg-[#dfb68d] flex rounded-2xl '>
            <div className='w-full h-full flex flex-col justify-center items-start pl-10'>
                <h1 className='font-[nayuki] text-5xl mb-2 '>About Us</h1>
                <h2 className='text-xl font-[Raleway]'>We are building a digital platform to preserve and promote Indian tribal art by connecting artisans directly with global consumers. Through AR visualization, a digital repository, and blockchain-based certification, we ensure fair trade, cultural preservation, and economic empowerment for tribal communities.</h2>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <img className='w-3/4' src="/Images/Flag.png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default About