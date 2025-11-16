
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // TODO: Replace with actual backend API call
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/chat');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative"> 
    
      {/* Background Image - replace with your actual background */}
      <div className="h-full w-full bg-gradient-to-br from-blue-50 to-teal-50 opacity-50 absolute top-0 left-0 z-0"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white w-full max-w-sm md:max-w-lg lg:max-w-2xl rounded-xl opacity-95 shadow-2xl p-6 md:p-10 max-h-[100vh] overflow-y-auto">
         
          {/* Logo and Title */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#46827C] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">MZ</span>
            </div>
            <h1 className="font-sans italic font-black text-3xl sm:text-4xl text-[#46827C]">Mind-Z</h1>
          </div>

          <div className="mt-6 text-center">
            <p className="font-semibold text-2xl sm:text-3xl text-black">
              Welcome Back to Wellness
            </p>
          </div>

          <div className="mt-3 text-center pt-10">
            <p className="text-gray-600 text-sm sm:text-base">
              Sign in to continue your mental wellness journey
            </p>
          </div>

          {/* Google Sign In */}
          <div className="flex items-center justify-center border border-gray-300 rounded-xl gap-2 py-2 mt-6 cursor-pointer hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 40 48">
              <path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"/>
              <path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"/>
              <path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"/>
              <path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"/>
            </svg>
            <span className="text-lg font-semibold text-gray-700">
              Continue with Google
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center my-10">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm font-md">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-md bg-red-50 p-4 mb-4">
              <div className="text-sm text-red-700 text-center">{error}</div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <p className="text-gray-700 mb-2">Email</p>
              <input 
                type="email" 
                name="email"
                placeholder="mindZ@gmail.com" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700 mb-2">Password</p>
              <input 
                type="password" 
                name="password"
                placeholder="Enter your password" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#46827C] text-white font-semibold py-2 rounded-lg hover:bg-[#356b66] transition disabled:opacity-50"
              >
                {loading ? 'Signing In...' : 'Log In'}
              </button>
            </div>
          </form>

          <div className='text-center pt-5'>
            <p className='text-gray-600 text-sm sm:text-base'>
              Don't have an account?{' '}
              <Link to="/signup" className='text-[#46827C] font-medium hover:underline'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;