import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import AdminProduct from '../../Components/AdminProduct'
import AdminCommunity from '../../Components/AdminCommunity'
import { use } from 'react'

const AdminDesh = () => {
  
  useEffect(() => {
    document.title = 'Admin Dashboard'
  }, [])

  return (
    <>
      <Navbar />
      <AdminProduct />
      <AdminCommunity />
    </>
  )
}

export default AdminDesh