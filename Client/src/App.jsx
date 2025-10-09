// import './App.css'
// import Login from './assets/Components/Pages/Login'
// import { BrowserRouter,Routes, Route } from "react-router-dom"
// import Signup from './assets/Components/Pages/Signup'
// import Home from './assets/Components/Pages/Home'
// import EditProfile from './assets/Components/Pages/EditProfile'
// import Profile from './assets/Components/Pages/Profile'
// import About from './assets/Components/Pages/About'

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path="/edit-profile" element={<EditProfile/>}/>
//           <Route path="/profile" element={<Profile/>}/>
//           <Route path="/about" element={<About/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

// src/App.jsx
// src/App.jsx
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
            <Route path="/share-feelings" element={<ShareFeelings />} /> {/*  later i hvae to add it into protected route */}
            
            {/* <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            /> */}
            
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

