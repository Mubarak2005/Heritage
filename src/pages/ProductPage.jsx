import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../pages/auth/firebase";
import { collection, query, where, getDocs, updateDoc, arrayUnion, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdLocationPin, MdOutlineFavoriteBorder } from "react-icons/md";
import "/src/fonts.css";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [randomProducts, setRandomProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Store logged-in user

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    const fetchProduct = async () => {
      try {
        const q = query(collection(db, "products"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const productData = querySnapshot.docs[0].data();
          setProduct(productData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    const fetchRandomProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const querySnapshot = await getDocs(productsRef);
        const allProducts = querySnapshot.docs.map((doc) => doc.data());
        const filtered = allProducts.filter((p) => p.slug !== slug);
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 4));
      } catch (error) {
        console.error("Error fetching random products:", error);
      }
    };

    fetchProduct();
    fetchRandomProducts();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-[var(--primary-color)]">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="font-[Raleway] flex flex-col items-center w-full min-h-screen justify-center p-10 bg-[var(--primary-color)]">
        <h1 className="text-7xl font-bold mt-5 text-[#222]">404</h1>
        <h1 className="text-4xl font-bold mt-5 text-[#222]">Product not found</h1>
      </div>
    );
  }

  const addToFav = async () => {
    if (!user) {
      alert("Please log in to add to favourites!");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        favourite: arrayUnion({
          slug: product.slug,
          title: product.title,
          image: product.image,
          price: product.price,
        }),
      });
      console.log("Added to favourite");
    } catch (error) {
      console.error("Error adding to favourite:", error);
    }
  };

  return (
    <div className="flex-1 items-center w-full min-h-screen justify-center p-10 bg-[var(--primary-color)]">
      <Navbar />
      <div className="product w-full min-h-screen mt-16">
        <div className="flex justify-start items-start gap-10 w-full h-full flex-col md:flex-row">
          <div className="left h-full xl:h-10/12 w-full xl:w-[40%] relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 pr-5" onClick={addToFav}>
              <button className="text-2xl font-[nayuki] mt-5 flex items-center gap-2 cursor-pointer bg-black p-4 rounded-full">
                <MdOutlineFavoriteBorder className="text-white" />
              </button>
            </div>
          </div>
          <div className="right w-full xl:w-[60%] font-[Raleway] h-full xl:h-[54rem] border-[1px] border-[#000] px-8 py-2 relative">
            <h1 className="text-2xl font-light mt-5 text-gray-500">{product.category}</h1>
            <div className="flex justify-between items-center w-full">
              <h1 className="text-5xl mt-5 font-[nayuki] ">{product.title}</h1>
              <p className="text-2xl text-gray-700 mt-2">₹{product.price}</p>
            </div>

            <hr className="w-[100%] h-1 my-10" />
            <p className="text-2xl mt-2 font-normal ">
              <span className="text-4xl font-bold">Description</span> <br />
              {product.description}
            </p>
            <div className="seller-details mt-10">
              <h2 className="text-4xl font-bold">Seller Details</h2>
              <div className="seller flex flex-col">
                <p className="text-2xl mt-2 font-normal flex items-center gap-2 flex-row">
                  <IoPersonCircleSharp />
                  {product.artist}
                </p>
                <p className="text-2xl mt-2 font-normal flex items-center gap-2 flex-row">
                  <MdLocationPin /> {product.location}
                </p>
                <p className="text-2xl mt-2 font-normal flex items-center gap-2 flex-row">
                  {product.community}
                </p>
              </div>
            </div>
            <div className="buyings flex justify-between items-center w-full mt-10 absolute bottom-0 left-0">
              <button className="border-[#000] border-[2px] w-[80%] h-24 border-r-0 cursor-pointer hover:bg-[#222222] hover:text-white">
                Buy Now
              </button>
              <button className="border-[#000] border-[2px] w-[20%] h-24 cursor-pointer hover:bg-[#222222] hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Random Products Section */}
      <div className="mt-10">
        <h2 className="text-4xl capitalize font-[nayuki] font-bold mb-5">You may also like</h2>
        <div className="font-[Raleway] grid grid-cols-2 md:grid-cols-4 gap-6">
          {randomProducts.map((randomProduct) => (
            <div
              key={randomProduct.slug}
              className="border p-4 rounded-lg cursor-pointer"
              onClick={() => (window.location.href = `/product/${randomProduct.slug}`)}
            >
              <img
                src={randomProduct.image}
                alt={randomProduct.title}
                className="w-full h-100 object-cover rounded-md"
              />
              <h3 className="text-lg font-[nayuki] mt-2">{randomProduct.title}</h3>
              <p className="text-gray-600">₹{randomProduct.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
