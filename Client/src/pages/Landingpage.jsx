// src/pages/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Landingpage = () => {
  const { user } = useAuth();

  return (
    <div className="h-screen w-screen overflow-hidden relative"> 
      {/* Background Image - replace with your actual background image */}
      <div className="h-full w-full bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 opacity-80 absolute top-0 left-0 z-0"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white w-full max-w-4xl rounded-xl opacity-95 shadow-2xl p-8 md:p-12 max-h-[95vh] overflow-y-auto">
         
          {/* Logo and Title */}
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#46827C] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl font-bold">MZ</span>
            </div>
            <h1 className="font-sans italic font-black text-4xl sm:text-5xl text-[#46827C] text-center">
              Mind-Z
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-md">
              Your AI-powered mental health companion
            </p>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl sm:text-4xl text-black mb-4">
              Welcome to Your Safe Space for Mental Wellness
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Mind-Z provides compassionate, AI-driven emotional support whenever you need it. 
              Start your journey towards better mental health in a judgment-free environment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-800 mb-2">AI Chat Support</h3>
              <p className="text-gray-600 text-sm">
                24/7 empathetic conversations with our trained AI companion
              </p>
            </div>
            
            <div className="bg-teal-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="font-semibold text-gray-800 mb-2">Private & Secure</h3>
              <p className="text-gray-600 text-sm">
                Your conversations are completely confidential and secure
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-semibold text-gray-800 mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                Monitor your emotional journey and see your progress over time
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-8">
            <h3 className="font-semibold text-2xl text-gray-800 mb-4">
              Ready to Start Your Wellness Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands who have found support and understanding with Mind-Z
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {user ? (
              <>
                <Link 
                  to="/chat" 
                  className="w-full sm:w-auto bg-[#46827C] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#356b66] transition text-center"
                >
                  Go to Chat
                </Link>
                <Link 
                  to="/conversations" 
                  className="w-full sm:w-auto border border-[#46827C] text-[#46827C] font-semibold py-3 px-8 rounded-lg hover:bg-[#46827C] hover:text-white transition text-center"
                >
                  View History
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="w-full sm:w-auto bg-[#46827C] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#356b66] transition text-center"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="w-full sm:w-auto border border-[#46827C] text-[#46827C] font-semibold py-3 px-8 rounded-lg hover:bg-[#46827C] hover:text-white transition text-center"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>

          {/* Testimonials */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold text-gray-800 text-center mb-4">What Our Users Say</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-600 text-sm italic mb-2">
                  "Mind-Z has been a game-changer for my daily stress management. The AI understands and responds with genuine empathy."
                </p>
                <p className="text-gray-500 text-xs">- Sarah, 28</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-600 text-sm italic mb-2">
                  "Having a safe space to express my thoughts anytime has made a huge difference in my mental health journey."
                </p>
                <p className="text-gray-500 text-xs">- Alex, 32</p>
              </div>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              💡 <strong>Important:</strong> Mind-Z is an AI support tool, not a replacement for professional medical care. 
              If you're in crisis, please contact emergency services or a mental health professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;