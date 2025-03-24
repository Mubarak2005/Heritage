import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Firebase Import
import { auth } from './pages/auth/firebase';

// Pages Import
import { Home, Catogary, Communities, Contact } from './pages';
import ProductPage from './pages/ProductPage';
import { Login, Signup } from './pages/auth';
import { Account, AdminDesh, SellerDesh } from './pages/ProtectedPages';

// Package Import
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [user, setUser] = useState(null);

  // Handle user state on initial load
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      toast.error('You must be logged in to access this page.');
      return <Navigate to="/login" />;
    }
    return children;
  };

  // Admin Route Component
  const AdminRoute = ({ children }) => {
    if (!user) {
      toast.error('You must be logged in to access this page.');
      return <Navigate to="/login" />;
    }
    if (user.email == "joshikartavya78@gmail.com") {
      toast.success('You are authorized to access admin page!');
      return <Navigate to="/admin" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/catogary" element={<Catogary />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route 
          path="/account" 
          element={
            <Account />
          } 
        />
        <Route 
          path="/seller" 
          element={
            <ProtectedRoute>
              <SellerDesh />
            </ProtectedRoute>
          } 
        />

        {/* Admin Route */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminDesh />
            </AdminRoute>
          } 
        />
      </Routes>
      <ToastContainer pauseOnHover={false} />
    </Router>
  );
};

export default App;
