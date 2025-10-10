import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  FaComments, 
  FaLock, 
  FaChartLine, 
  FaHeart, 
  FaBrain,
  FaUserShield,
  FaClock,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';

const Homepage = () => {
  const { user } = useAuth();

  // Check authentication
  const isAuthenticated = () => {
    const token = localStorage.getItem('token') || localStorage.getItem('authToken');
    return !!token;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#46827C] to-[#5ba39c] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">MZ</span>
              </div>
              <h1 className="font-sans italic font-black text-3xl text-[#46827C]">Mind-Z</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/about" className="text-gray-700 hover:text-[#46827C] transition-colors font-medium">
                About
              </Link>
              <Link to="/chat" className="text-gray-700 hover:text-[#46827C] transition-colors font-medium">
                Chat
              </Link>
              {isAuthenticated() ? (
                <Link 
                  to="/profile" 
                  className="bg-[#46827C] text-white px-6 py-2 rounded-lg hover:bg-[#356b66] transition-colors font-medium shadow-md"
                >
                  Profile
                </Link>
              ) : (
                <div className="flex items-center gap-4">
                  <Link 
                    to="/login" 
                    className="text-[#46827C] hover:text-[#356b66] transition-colors font-medium"
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="bg-[#46827C] text-white px-6 py-2 rounded-lg hover:bg-[#356b66] transition-colors font-medium shadow-md"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-[#46827C]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaStar className="w-4 h-4" />
                <span>Your Mental Health Matters</span>
              </div>
              
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                Your Safe Space for
                <span className="text-[#46827C] block">Mental Wellness</span>
              </h1>
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Mind-Z provides compassionate, AI-driven emotional support whenever you need it. 
                Start your journey towards better mental health in a judgment-free environment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                {isAuthenticated() ? (
                  <>
                    <Link 
                      to="/chat" 
                      className="bg-[#46827C] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#356b66] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                    >
                      <FaComments className="w-5 h-5" />
                      Start Chatting
                    </Link>
                    <Link 
                      to="/share-feelings" 
                      className="border-2 border-[#46827C] text-[#46827C] font-semibold py-4 px-8 rounded-lg hover:bg-[#46827C] hover:text-white transition-all flex items-center justify-center gap-2 text-lg"
                    >
                      <FaHeart className="w-5 h-5" />
                      Share Feelings
                    </Link>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/signup" 
                      className="bg-[#46827C] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#356b66] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                    >
                      Get Started Free
                      <FaArrowRight className="w-5 h-5" />
                    </Link>
                    <Link 
                      to="/chat" 
                      className="border-2 border-[#46827C] text-[#46827C] font-semibold py-4 px-8 rounded-lg hover:bg-[#46827C] hover:text-white transition-all flex items-center justify-center gap-2 text-lg"
                    >
                      Try as Guest
                    </Link>
                  </>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaLock className="w-4 h-4 text-green-600" />
                  <span>100% Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4 text-blue-600" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserShield className="w-4 h-4 text-purple-600" />
                  <span>Secure & Encrypted</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#46827C] to-[#5ba39c] rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#46827C] rounded-full flex items-center justify-center">
                      <GiMeditation className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Mind-Z AI</p>
                      <p className="text-xs text-gray-500">Always here for you</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-2xl rounded-tl-sm p-4">
                      <p className="text-gray-700">Hi! I'm feeling a bit stressed today about work.</p>
                    </div>
                    <div className="bg-green-50 rounded-2xl rounded-tr-sm p-4 ml-8">
                      <p className="text-gray-700">I understand how work stress can feel overwhelming. Let's explore some strategies together. What specifically is causing you the most stress?</p>
                    </div>
                    <div className="bg-blue-50 rounded-2xl rounded-tl-sm p-4">
                      <p className="text-gray-700">The upcoming deadline is making me anxious.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span>Join 10,000+ users finding support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Everything You Need for Mental Wellness
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive AI-powered tools designed to support your mental health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-200">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaComments className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">24/7 AI Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Chat anytime with our empathetic AI companion trained to provide emotional support and coping strategies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-200">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaLock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Private & Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Your conversations are completely confidential with end-to-end encryption and strict privacy policies.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-200">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaChartLine className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your emotional patterns over time and gain insights into your mental health journey.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-orange-200">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaHeart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Mood Check-ins</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular mood tracking helps you understand your emotional patterns and triggers better.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-teal-200">
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaBrain className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Personalized Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive tailored coping strategies and recommendations based on your unique emotional state.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-pink-200">
              <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <GiMeditation className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Wellness Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access guided meditations, breathing exercises, and evidence-based mental health resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from people who found support with Mind-Z
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Mind-Z has been a game-changer for my daily stress management. The AI understands and responds with genuine empathy."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah</p>
                  <p className="text-sm text-gray-500">28, Marketing Professional</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Having a safe space to express my thoughts anytime has made a huge difference in my mental health journey."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Alex</p>
                  <p className="text-sm text-gray-500">32, Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "The mood tracking feature helped me identify patterns I never noticed before. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Maya</p>
                  <p className="text-sm text-gray-500">25, Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#46827C] to-[#5ba39c]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-bold text-3xl sm:text-4xl mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands who have found support and understanding with Mind-Z
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!isAuthenticated() && (
              <>
                <Link 
                  to="/signup" 
                  className="bg-white text-[#46827C] font-semibold py-4 px-8 rounded-lg hover:shadow-2xl transition-all text-lg"
                >
                  Create Free Account
                </Link>
                <Link 
                  to="/chat" 
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all text-lg"
                >
                  Try as Guest
                </Link>
              </>
            )}
            {isAuthenticated() && (
              <Link 
                to="/chat" 
                className="bg-white text-[#46827C] font-semibold py-4 px-8 rounded-lg hover:shadow-2xl transition-all text-lg inline-flex items-center gap-2"
              >
                Continue Your Journey
                <FaArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#46827C] to-[#5ba39c] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MZ</span>
                </div>
                <h3 className="font-bold text-2xl">Mind-Z</h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your AI-powered mental health companion providing compassionate support whenever you need it.
              </p>
              <div className="flex items-center gap-2 text-red-400">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                <a href="tel:9152987821" className="hover:text-red-300">
                  Emergency Help: 9152987821
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/chat" className="hover:text-white transition">Start Chat</Link></li>
                <li><Link to="/share-feelings" className="hover:text-white transition">Mood Check-in</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link to="/crisis" className="hover:text-white transition">Crisis Resources</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">
              💡 <strong>Important:</strong> Mind-Z is an AI support tool, not a replacement for professional medical care.
            </p>
            <p>© 2025 Mind-Z. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;