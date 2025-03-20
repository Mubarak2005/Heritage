import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import MostViewed from './Components/MostViewed'

function App() {
  return (
    <>
      <main className='h-full w-full bg-[#f7e8da]'>
        <Navbar />
        <Hero />
        <MostViewed />
      </main>
    </>
  )
}

export default App
