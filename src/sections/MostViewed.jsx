import React, { useEffect, useState } from 'react'
import { MdOutlineArrowDownward, MdArrowOutward } from "react-icons/md";

// Firebase imports
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../pages/auth/firebase'

const MostViewed = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'))
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        // Only take first 8 products
        setProducts(productsData.slice(0, 8))
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className='min-h-screen w-full font-[Raleway] px-10 flex flex-col justify-center items-center relative overflow-hidden'>
      <h1 className='mr-[94%]'>Most Viewed</h1>
      <div className='w-full flex justify-between items-center mt-10'>
        <h1 className='text-3xl  xl:text-4xl leading-none font-[nayuki] '>Tribal art and crafts</h1>
        <h1 className='text-lg xl:text-3xl flex leading-none font-[nayuki] '>Filter <MdOutlineArrowDownward /></h1>
      </div>
      <div className='w-full justify-between gap-10 grid grid-cols-1 md:grid-cols-2 grid-row-8 md:grid-row-4 xl:grid-cols-4 xl:grid-row-2   items-center mt-10'>
        {products.map((product) => (
          <div key={product.id} className='w-full xl:w-[20vw] shrink-0 cursor-pointer' onClick={() => window.location.href = `/product/${product.slug}`}>
            <div className='h-[40vh]  border-[1px] border-[#000] '>
              <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
            </div>
            <div className='mt-2'>
              <p className='text-sm'>{product.category}</p>
              <h1 className='text-xl font-[nayuki] '>{product.title}</h1>
            </div>
            <div className='flex justify-between'>
              <h1>₹{product.price}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className='px-20 py-5 mt-5 text-2xl rounded-full bg-[#dfb68d] cursor-pointer w-fit text-center flex '>
        <h3 className='font-["nayuki"]'>Explore</h3>
        <MdArrowOutward className='inline-block ml-2 text-4xl' />
      </div>
      <div className=' absolute left-100 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-[0.3]'>
          <img className='w-full scale-[2] ' src="/images/design/bg2.jpg" alt="" />
        </div>
    </div>
  )
}

export default MostViewed