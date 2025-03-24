import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user if logged in, otherwise null
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="w-full font-[Raleway] font-medium py-4 backdrop-blur-sm flex justify-between items-center px-10 fixed z-[100] top-0 left-0 ">  {/* Keep your existing navbar styles */}
      <h1 className="font-[nayuki] text-xl cursor-pointer"><a href="/">Logo</a></h1>
      <ul className="flex items-center gap-7">
        <li className="your-nav-item-class"><a href="/">Home</a></li>
        
        {user ? (
          <>
            <li className="your-nav-item-class"><a href="/account">Account</a></li>
            <li className="your-nav-item-class cursor-pointer"><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li className="your-nav-item-class"><a href="/login">Login</a></li>
            <li className="your-nav-item-class"><a href="/signup">Signup</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
