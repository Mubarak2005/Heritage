import React, { useEffect, useState } from 'react'

import { auth, db } from '../auth/firebase'
import { doc, getDoc } from 'firebase/firestore'
import Navbar from '../../Components/Navbar'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const [userData, setUserData] = useState(null)
  const [displayName, setDisplayName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const userDoc = await getDoc(doc(db, 'Users', user.uid))
            if (userDoc.exists()) {
              setUserData(userDoc.data())
              // Set display name from Google account if available, otherwise use name from database
              setDisplayName(user.displayName || userDoc.data().name)
            } else {
              console.log('No user data found')
            }
          } catch (error) {
            console.error('Error fetching user data:', error)
          }
        } else {
          navigate('/login')
        }
      })

      return () => unsubscribe()
    }

    fetchUserData()
  }, [navigate])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Account Details</h1>
        {userData ? (
          <div className="mt-4 p-4 border rounded-lg shadow-md text-center">
            <p><strong>Name:</strong> {displayName || userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <button className="bg-red-500 px-8 py-2 rounded-2xl cursor-pointer mt-4 text-white" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default Account
