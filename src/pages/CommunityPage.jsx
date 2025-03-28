import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { FaArrowLeft } from "react-icons/fa";

// Firebase imports
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../pages/auth/firebase";
import Navbar from "../Components/Navbar";

const CommunityPage = () => {
  const { slug } = useParams();
  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const q = query(collection(db, "communities"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setCommunity(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching community details:", error);
      }
      setLoading(false);
    };

    fetchCommunity();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-[var(--primary-color)]">
        <Loading />
      </div>
    );
  }

  if (!community) {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-10 bg-[var(--primary-color)]">
        <h1 className="text-7xl font-bold mt-5 text-[#222]">404</h1>
        <h1 className="text-4xl font-bold mt-5 text-[#222]">Community not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-10 font-[nayuki]">
        <Navbar />
        <div className="back w-full h-20 flex justify-start items-center cursor-pointer xl:mt-10" onClick={() => window.history.back()}>
            <FaArrowLeft className="text-3xl" />
        </div>
        <div className="image">
        <img src={community.image} alt={community.title} className="w-full h-[60vh] object-cover rounded-2xl" />
        </div>
      <div className="h-[60vh] w-full flex flex-col justify-start items-start p-5">
        <h1 className="text-4xl font-bold">{community.title}</h1>
        <p className="text-2xl mt-2 text-gray-700">Location: {community.location}</p>
      </div>
    </div>
  );
};

export default CommunityPage;
