// src/pages/Conversations.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Conversations = () => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, logout } = useAuth();

  // Mock data - replace with actual backend API call
  useEffect(() => {
    const fetchConversations = async () => {
      // TODO: Replace with actual backend API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockConversations = [
        {
          id: 1,
          title: "Discussion about stress management",
          preview: "I've been feeling really stressed lately with work and everything going on. It's been hard to focus and I'm not sleeping well...",
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          messageCount: 8,
          lastMessage: "Let's explore some stress management techniques that might help."
        },
        {
          id: 2,
          title: "Sleep quality concerns",
          preview: "My sleep hasn't been great recently. I keep waking up multiple times during the night and feel tired all day...",
          date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          messageCount: 12,
          lastMessage: "Here are some sleep hygiene tips that could improve your rest."
        },
        {
          id: 3,
          title: "Daily motivation challenges",
          preview: "I'm struggling to find motivation for my daily routines. Everything feels overwhelming and I'm having trouble getting started...",
          date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          messageCount: 6,
          lastMessage: "Breaking tasks into smaller steps can make them feel more manageable."
        },
        {
          id: 4,
          title: "Anxiety in social situations",
          preview: "Lately I've been feeling very anxious in social situations. Even simple conversations make me nervous...",
          date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
          messageCount: 15,
          lastMessage: "Remember that it's okay to take things at your own pace."
        }
      ];
      
      setConversations(mockConversations);
      setLoading(false);
    };

    fetchConversations();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return (
      <div className="h-screen w-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#46827C]"></div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col">
      {/* Header - Full width */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#46827C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MZ</span>
              </div>
              <h1 className="font-sans italic font-black text-2xl text-[#46827C]">Mind-Z</h1>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-6">
              <Link 
                to="/chat" 
                className="bg-[#46827C] text-white px-4 py-2 rounded-lg hover:bg-[#356b66] transition-colors font-medium"
              >
                New Chat
              </Link>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-[#46827C] transition-colors font-medium"
              >
                Home
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Welcome, {user?.name}</span>
                <button 
                  onClick={handleLogout}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Full width */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Conversations</h1>
            <p className="text-gray-600 text-lg">
              Review your past chats and track your mental wellness journey
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <div className="text-2xl font-bold text-[#46827C] mb-2">{conversations.length}</div>
              <div className="text-gray-600 text-sm">Total Conversations</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <div className="text-2xl font-bold text-[#46827C] mb-2">
                {conversations.reduce((acc, conv) => acc + conv.messageCount, 0)}
              </div>
              <div className="text-gray-600 text-sm">Messages Exchanged</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <div className="text-2xl font-bold text-[#46827C] mb-2">
                {Math.ceil(conversations.reduce((acc, conv) => acc + conv.messageCount, 0) / conversations.length) || 0}
              </div>
              <div className="text-gray-600 text-sm">Avg. Messages/Chat</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <div className="text-2xl font-bold text-[#46827C] mb-2">
                {conversations.length > 0 ? formatDate(conversations[0].date) : 'Never'}
              </div>
              <div className="text-gray-600 text-sm">Last Active</div>
            </div>
          </div>

          {/* Conversations List */}
          {conversations.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">No conversations yet</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Start your first chat to begin your mental wellness journey with personalized AI support
              </p>
              <Link
                to="/chat"
                className="inline-flex items-center px-8 py-3 bg-[#46827C] text-white rounded-lg hover:bg-[#356b66] transition-colors duration-200 font-semibold text-lg"
              >
                Start Your First Chat
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:border-[#46827C]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-xl mb-2">
                        {conversation.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {conversation.preview}
                      </p>
                      <p className="text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2 inline-block">
                        Last message: "{conversation.lastMessage}"
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {conversation.messageCount} messages
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(conversation.date)}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-[#46827C] text-white rounded-lg hover:bg-[#356b66] transition-colors duration-200 text-sm font-semibold">
                        Continue Chat
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                        Export
                      </button>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Conversations;