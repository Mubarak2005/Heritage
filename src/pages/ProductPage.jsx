import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data"; // Import product data
import Navbar from "../Components/Navbar";

const ProductPage = () => {
  const { slug } = useParams(); // Get the slug from URL
  const product = products.find((p) => p.slug === slug); // Find product by slug

  if (!product) {
    return (
      <div className="flex flex-col items-center w-full min-h-screen justify-center p-10 bg-[var(--primary-color)]">
        <h1 className="text-3xl font-bold mt-5 text-[#222]">404</h1>
        <h1 className="text-7xl font-bold mt-5 text-[#222]">Product not found</h1>
      </div>
    );
  }

  // Randomizing products (excluding the current one)
  const getRandomProducts = (count) => {
    const filteredProducts = products.filter((p) => p.slug !== slug); // Exclude current product
    return filteredProducts.sort(() => 0.5 - Math.random()).slice(0, count); // Shuffle & take 'count' items
  };

  const randomProducts = getRandomProducts(4); // Get 5 random products

  return (
    <div className="flex-1 items-center w-full min-h-screen justify-center p-10 bg-[var(--primary-color)]">
      <Navbar />
      {/* Product Details */}
      <div className="product w-full h-screen mt-16">
        <div className="flex justify-start items-start gap-10 w-full h-full flex-col md:flex-row">
          <div className="left h-10/12 w-[40%]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="right w-[60%] h-10/12 border-[1px] border-[#000] px-8 py-2 relative">
            <h1 className="text-2xl font-light mt-5 text-gray-500">{product.category}</h1>
            <div className="flex justify-between items-center w-full"> 
              <h1 className="text-5xl font-bold mt-5">{product.title}</h1>
              <p className="text-2xl text-gray-700 mt-2">₹{product.price}</p>
            </div>

            <hr className="w-[100%] h-1 my-10" />

            {/* <p className="text-2xl text-gray-700 mt-2">{product.category}</p> */}
            <div>
              <p className="text-2xl text-[#222222] mt-2 font-normal "><span className="text-5xl font-bold">Description</span> <br />{product.description}</p>
            </div>
            <div className="seller-details mt-10">
              <h2 className="text-5xl font-bold">Seller Details</h2>
              <div className="seller flex gap-12">
                <p className="text-2xl text-[#222222] mt-2 font-normal ">{product.artisan}</p>
                <p className="text-2xl text-[#222222] mt-2 font-normal ">{product.location}</p>
              </div>
            </div>
            <div className="buyings flex justify-between items-center w-full mt-10 absolute bottom-0 left-0">
              <button className="border-[#000] border-[2px] w-[80%] h-24 border-r-0 cursor-pointer hover:bg-[#222222] hover:text-white">Buy Now</button>
              <button className="border-[#000] border-[2px] w-[20%] h-24 cursor-pointer hover:bg-[#222222] hover:text-white">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Random Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-5">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {randomProducts.map((randomProduct) => (
            <div key={randomProduct.slug} className="border p-4 rounded-lg cursor-pointer" onClick={
              () => window.location.href = `/product/${randomProduct.slug}`
              }>
                <img
                  src={randomProduct.image}
                  alt={randomProduct.title}
                  className="w-full h-100 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">{randomProduct.title}</h3>
                <p className="text-gray-600">₹{randomProduct.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
