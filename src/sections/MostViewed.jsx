import React from 'react'
import { products } from "../data"
import { Link } from 'react-router-dom'

const MostViewed = () => {
  return (
    <div className='min-h-screen w-full font-[Raleway] px-10'>
        <h1 className=''>Most Viewed</h1>
        <h1 className='text-[3vw] leading-none font-[nayuki] '>Tribal art and crafts</h1>
        <div className='w-full flex justify-between gap-10 flex-wrap items-center mt-10'>
          {products.map((product) => (
            <div key={product.id} className='w-[20vw] shrink-0'>
              <div className='h-[40vh]  border-[1px] border-[#000] '>
              </div>
              <div className='mt-2'>
                  <p className='text-sm'>{product.category}</p>
                  <h1 className='text-xl font-[nayuki] '>{product.title}</h1>
              </div>
              <div className='flex justify-between'>
                  <h1>{product.price}</h1>
                  <Link to={`/product/${product.slug}`} className="block mt-3 text-blue-500">
                    View Details
                  </Link>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MostViewed