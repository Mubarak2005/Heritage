import React from "react";
import { useParams } from "react-router-dom";
import {products} from "../data"; // Import product data

const ProductPage = () => {
    const { slug } = useParams(); // Get the slug from URL
    const product = products.find((p) => p.slug === slug); // Find product by slug

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product Not Found</h2>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <img src={product.image} alt={product.title} className="w-96 h-auto rounded-lg shadow-lg" />
      <h1 className="text-3xl font-bold mt-5">{product.title}</h1>
      <p className="text-lg text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-3 text-green-600">₹{product.price}</p>
    </div>
  );
};

export default ProductPage;
