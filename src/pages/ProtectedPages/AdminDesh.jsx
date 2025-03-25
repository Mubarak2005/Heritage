import React, { useState } from 'react'
import { db } from '../auth/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Navbar from '../../Components/Navbar'

const AdminDesh = () => {
  const [formData, setFormData] = useState({
    slug: '',
    image: '',
    title: '',
    description: '',
    price: '',
    forSale: false,
    community: '',
    category: '',
    artist: '',
    location: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'products'), {
        ...formData,
        price: Number(formData.price),
        createdAt: new Date()
      })
      toast.success('Product added successfully!')
      setFormData({
        slug: '',
        image: '',
        title: '',
        description: '',
        price: '',
        forSale: false,
        community: '',
        category: '',
        artist: '',
        location: ''
      })
    } catch (error) {
      toast.error('Error adding product: ' + error.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pt-20 w-full">
        <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
        <form onSubmit={handleSubmit} className="w-9xl space-y-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2">Slug (URL-friendly name)</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Product Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Artist Name</label>
            <input
              type="text"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Community</label>
            <input
              type="text"
              name="community"
              value={formData.community}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded h-32"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="forSale"
              checked={formData.forSale}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Available for Sale</label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  )
}

export default AdminDesh