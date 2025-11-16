
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Conversations from './pages/Conversations';
import Homepage from './pages/Homepage';
// import Profile from './pages/Profile';
import About from './Pages/About';
import ShareFeelings from './pages/ShareFeelings';
import Chatpage from './pages/Chatpage';
import Profile from './Pages/Profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/convo" element={<Conversations />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chatpage />} />
            <Route path="/share-feelings" element={<ShareFeelings />} /> {/*  later i hvae to add it into protected route */}
            
            {/* <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            /> */}
            <Route path="*" element={<Navigate to="/chat" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

