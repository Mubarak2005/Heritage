import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading'; // Import Loading component

// Firebase imports
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../pages/auth/firebase';

const Communities = () => {
  const [community, setCommunity] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'communities'));
        const communityData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCommunity(communityData);
      } catch (error) {
        console.error('Error fetching community:', error);
      }
      setLoading(false); // Set loading to false after fetching data
    };

    fetchCommunity();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-[var(--primary-color)]">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full">
        <div className="h-[50vh] w-full flex flex-col justify-end items-center">
          <h1 className="text-[5vw] leading-none font-[nayuki]">
            Meet the Makers:
          </h1>
          <h1 className="text-[5vw] leading-none font-[nayuki]">
            Stories from Our Tribal Artisans
          </h1>
        </div>
        <div className="grid grid-cols-3 mt-20 w-full">
          {community.map((com) => (
            <div
              key={com.id}
              onClick={() => (window.location.href = `/communities/${com.slug}`)}
              className="h-[60vh] w-full flex flex-col justify-center items-center p-5 font-[nayuki] border-[1px] border-[#3f27104c] cursor-pointer"
            >
              <h1 className="text-3xl">{com.title}</h1>
              <p className="font-[Raleway]">{com.location}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Communities;
