
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#46827C]"></div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;