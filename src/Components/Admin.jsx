// src/pages/Admin.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '../../firebase';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // If user is logged in, update the state
      } else {
        setUser(null); // If user is logged out, set to null
      }
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, []);

  // Handle login with Firebase
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to external URL after successful login
      window.location.href = "https://noble-homes-galle-real-estate-admin-nafe.vercel.app/";  // External redirect
    } catch (err) {
      setError(err.message); // Show Firebase authentication error
    }
  };

  // If the user is already logged in, show the admin panel
  if (user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome to the Admin Panel</h2>
          <p className="text-center mb-4">You are logged in as {user.email}</p>
          <button
            onClick={() => auth.signOut()}  // Sign out user
            className="w-full py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // If the user is not authenticated, show the login form
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Admin;
