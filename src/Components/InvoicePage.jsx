import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../pages/auth/firebase';

const InvoicePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) {
          setError("Product ID is missing");
          return;
        }
        
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);
        if (!productSnap.exists()) {
          setError("Product not found");
          return;
        }
        setProduct(productSnap.data());

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load invoice details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-[var(--primary-color)]">
        <p>Loading Invoice...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[var(--primary-color)]">
        <p className="text-xl font-semibold text-red-600">{error}</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Return to Home
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[var(--primary-color)]">
        <p className="text-xl font-semibold text-red-600">Error: Unable to fetch invoice details.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-10 bg-[var(--primary-color)]">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center">Invoice</h1>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Demo Customer Details</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Address:</strong> 123 Demo Street, Sample City, 12345</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Order Details</h2>
          <p><strong>Product:</strong> {product.title}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
        </div>

        <div className="mt-6">
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Time:</strong> {new Date().toLocaleTimeString()}</p>
        </div>

        <div className="mt-10 text-center">
          <p className="font-bold">Thank you for your purchase!</p>
          <p className="text-sm text-gray-500 mt-2">(This is a demo invoice)</p>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
