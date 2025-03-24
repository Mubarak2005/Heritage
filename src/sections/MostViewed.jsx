import React, {useEffect, useState} from 'react'
import { products } from "../data"
import { MdOutlineArrowDownward } from "react-icons/md";

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
        setProducts(productsData)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className='min-h-screen w-full font-[Raleway] px-10'>
        <h1 className=''>Most Viewed</h1>
        <div className='w-full flex justify-between items-center mt-10'>
          <h1 className='text-[3vw] leading-none font-[nayuki] '>Tribal art and crafts</h1>
          <h1 className='text-3xl flex leading-none font-[nayuki] '>Filter <MdOutlineArrowDownward /></h1>
        </div>
        <div className='w-full flex justify-between gap-10 flex-wrap items-center mt-10'>
          {products.map((product) => (
            <div key={product.id} className='w-[20vw] shrink-0 cursor-pointer' onClick={() => window.location.href = `/product/${product.slug}`}>
              <div className='h-[40vh]  border-[1px] border-[#000] '>
                  <img src={product.image} alt={product.title} className='w-full h-full object-cover'/>
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
    </div>
  )
}

export default MostViewed