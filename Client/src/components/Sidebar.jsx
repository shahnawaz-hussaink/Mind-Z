// src/components/Sidebar.jsx
import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { FaUserCircle, FaInfoCircle, FaRegSmile, FaLock } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);

  // Check if user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem('token') || localStorage.getItem('authToken');
    return !!token;
  };

  // Fetch user's past conversations
  useEffect(() => {
    const fetchConversations = async () => {
      const token = localStorage.getItem('token') || localStorage.getItem('authToken');
      
      if (!token) {
        setConversations([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch('/api/conversations', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          // Get last 5 conversations
          setConversations(data.conversations?.slice(0, 5) || []);
        } else if (response.status === 401) {
          // Token expired or invalid
          localStorage.removeItem('token');
          localStorage.removeItem('authToken');
          setConversations([]);
        }
      } catch (error) {
        console.error('Error fetching conversations:', error);
        setConversations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, [user]); // Re-fetch when user changes

  const handleQuickAction = (actionType) => {
    console.log('Quick action:', actionType);
    toggleSidebar();
  };

  const handleLogout = () => {
    // Clear all auth data
    localStorage.removeItem('token');
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    logout();
    navigate('/');
  };

  const handleConversationClick = (conversationId) => {
    if (isAuthenticated()) {
      navigate(`/chat/${conversationId}`);
      toggleSidebar();
    }
  };

  // Guest example topics
  const guestExamples = [
    "Understanding anxiety",
    "Stress relief techniques", 
    "Improving sleep quality",
    "Building self-confidence"
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#F9FAFB] border-r border-gray-200 flex flex-col z-20
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:w-64 w-64`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200 flex-shrink-0">
          <h1 className="italic font-black text-3xl text-[#46827C]">Mind-Z</h1>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 bg-white rounded-full shadow border border-gray-200"
          >
            <HiX className="w-5 h-5 text-[#46827C]" />
          </button>
        </div>

        {/* User Info Section */}
        <div className="px-4 py-4 border-b border-gray-200 bg-white/50 flex-shrink-0">
          {isAuthenticated() && user ? (
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#46827C] rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-base">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm truncate">{user.name}</p>
                <p className="text-gray-500 text-xs truncate">{user.email}</p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm border border-gray-200">
                <FaLock className="w-6 h-6 text-[#46827C]" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">Guest Mode</h3>
              <p className="text-gray-600 text-xs mb-3">Try Mind-Z without signing up</p>
              <div className="flex flex-col gap-2">
                <Link 
                  to="/signup" 
                  className="w-full bg-[#46827C] text-white py-2 px-3 rounded-lg hover:bg-[#3a6b66] transition-colors text-sm font-medium text-center"
                >
                  Create Account
                </Link>
                <Link 
                  to="/login" 
                  className="w-full border border-[#46827C] text-[#46827C] py-2 px-3 rounded-lg hover:bg-[#46827C] hover:text-white transition-colors text-sm font-medium text-center"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Navigation */}
          <nav className="px-3 py-4 space-y-1 border-b border-gray-200">
            <Link 
              to="/" 
              onClick={() => toggleSidebar()}
              className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition group"
            >
              <IoMdHome className="text-xl text-gray-600 group-hover:text-[#46827C]" />
              <span className="text-base font-medium px-3 text-gray-700 group-hover:text-[#46827C]">Home</span>
            </Link>
            
            {isAuthenticated() && (
              <Link 
                to="/profile" 
                onClick={() => toggleSidebar()}
                className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition group"
              >
                <FaUserCircle className="text-xl text-gray-600 group-hover:text-[#46827C]" />
                <span className="text-base font-medium px-3 text-gray-700 group-hover:text-[#46827C]">Profile</span>
              </Link>
            )}
            
            <Link 
              to="/about" 
              onClick={() => toggleSidebar()}
              className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition group"
            >
              <FaInfoCircle className="text-xl text-gray-600 group-hover:text-[#46827C]" />
              <span className="text-base font-medium px-3 text-gray-700 group-hover:text-[#46827C]">About</span>
            </Link>
          </nav>

          {/* Quick Actions */}
          <div className="px-3 py-4 border-b border-gray-200">
            <h2 className="text-gray-600 font-semibold mb-3 text-xs uppercase tracking-wide px-3">
              Quick Start
            </h2>
            <div className="space-y-2">
              <button 
                onClick={() => navigate('/share-feelings')}
                className="flex items-center w-full py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition group"
              >
                <FaRegSmile className="text-xl text-[#46827C] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium px-3 text-gray-700">Share feelings</span>
              </button>

              <button 
                onClick={() => handleQuickAction('calming-tips')}
                className="flex items-center w-full py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition group"
              >
                <GiMeditation className="text-xl text-[#46827C] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium px-3 text-gray-700">Calming tips</span>
              </button>
            </div>
          </div>

          {/* Past Conversations / Example Topics */}
          <div className="px-3 py-4">
            <div className="flex items-center justify-between mb-3 px-3">
              <h2 className="text-gray-600 font-semibold text-xs uppercase tracking-wide">
                {isAuthenticated() ? 'Recent Chats' : 'Examples'}
              </h2>
              {!isAuthenticated() && <FaLock className="w-3 h-3 text-gray-400" />}
            </div>
            
            <div className="space-y-2">
              {isAuthenticated() ? (
                // Show actual user conversations
                <>
                  {loading ? (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#46827C] mx-auto"></div>
                    </div>
                  ) : conversations.length > 0 ? (
                    conversations.map((conv) => (
                      <div
                        key={conv.id}
                        onClick={() => handleConversationClick(conv.id)}
                        className="text-sm p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition truncate border-l-2 border-[#46827C] bg-white/50 group"
                      >
                        <p className="truncate text-gray-800 font-medium">{conv.title}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(conv.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 px-3">
                      <p className="text-sm text-gray-500">No conversations yet</p>
                      <p className="text-xs text-gray-400 mt-1">Start a new chat!</p>
                    </div>
                  )}
                </>
              ) : (
                // Show example topics for guests
                <>
                  {guestExamples.map((title, idx) => (
                    <div
                      key={idx}
                      className="text-sm p-3 rounded-lg hover:bg-gray-200 cursor-pointer transition truncate border border-gray-200 bg-white/30 text-gray-600"
                    >
                      {title}
                    </div>
                  ))}
                  <Link 
                    to="/signup" 
                    className="block text-center text-xs text-[#46827C] underline font-medium hover:text-[#3a6b66] pt-2"
                  >
                    Sign up to save conversations
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Fixed */}
        <div className="p-3 border-t border-gray-200 space-y-2 bg-white/50 flex-shrink-0">
          {/* Emergency Help */}
          <a 
            href="tel:9152987821" 
            className="flex items-center py-3 px-3 hover:bg-red-50 rounded-lg cursor-pointer transition group border border-red-200"
          >
            <MdLocalHospital className="text-xl text-red-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium px-3 text-red-600">Emergency Help</span>
          </a>
          
          {/* Logout - Only for authenticated users */}
          {isAuthenticated() && (
            <button 
              onClick={handleLogout}
              className="flex items-center w-full py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="text-sm font-medium px-3 group-hover:text-red-500 transition-colors">Logout</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-5 left-5 z-30 p-3 bg-white shadow-lg rounded-full border border-gray-200 hover:shadow-xl transition-all duration-300 md:hidden"
        >
          <HiMenuAlt3 className="w-6 h-6 text-[#46827C]" />
        </button>
      )}
    </>
  );
}