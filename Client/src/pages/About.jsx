// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  FaHeart, 
  FaShieldAlt, 
  FaRobot, 
  FaUsers, 
  FaLock, 
  FaCompass,
  FaLightbulb,
  FaHandHoldingHeart
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const About = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "AI-Powered Support",
      description: "Advanced AI trained in mental health conversations to provide empathetic and helpful responses."
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: "Complete Privacy",
      description: "Your conversations are encrypted and never shared. Your mental health journey stays private."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Safe Space",
      description: "A judgment-free environment where you can express yourself freely without fear."
    },
    {
      icon: <GiBrain className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Get support whenever you need it, day or night. No appointments needed."
    }
  ];

  const values = [
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Empathy First",
      description: "We believe in compassionate, understanding responses that validate your feelings."
    },
    {
      icon: <FaCompass className="w-6 h-6" />,
      title: "Accessibility",
      description: "Mental health support should be available to everyone, regardless of location or circumstance."
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Using cutting-edge technology to make mental wellness support more effective and accessible."
    },
    {
      icon: <FaHandHoldingHeart className="w-6 h-6" />,
      title: "Support, Not Replacement",
      description: "We complement professional care, providing immediate support when you need it most."
    }
  ];

  const team = [
    {
      name: "AI Technology",
      role: "Powered by advanced language models",
      description: "Our AI is specifically trained to understand mental health conversations and provide supportive, empathetic responses."
    },
    {
      name: "Mental Health Experts",
      role: "Professional guidance & oversight",
      description: "We work with mental health professionals to ensure our responses are helpful and appropriate."
    },
    {
      name: "User Community",
      role: "Driven by real user needs",
      description: "Mind-Z is built for and with people who understand the importance of mental wellness."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#46827C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MZ</span>
              </div>
              <h1 className="font-sans italic font-black text-3xl text-[#46827C]">Mind-Z</h1>
            </Link>
            
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-[#46827C] transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-[#46827C] font-medium border-b-2 border-[#46827C]">
                About
              </Link>
              {user ? (
                <Link 
                  to="/chat" 
                  className="bg-[#46827C] text-white px-6 py-2 rounded-lg hover:bg-[#356b66] transition-colors font-medium"
                >
                  Go to Chat
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
                    className="bg-[#46827C] text-white px-6 py-2 rounded-lg hover:bg-[#356b66] transition-colors font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-[#46827C]">Mind-Z</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mind-Z is an AI-powered mental health companion designed to provide immediate, 
              empathetic support whenever you need it. We're here to listen, understand, and 
              help you navigate your mental wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To make mental health support accessible, immediate, and stigma-free through 
                compassionate AI technology. We believe everyone deserves a safe space to 
                express their thoughts and feelings.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mind-Z bridges the gap between professional therapy and daily emotional support, 
                providing a first step for those seeking understanding and guidance.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-[#46827C] text-white px-6 py-3 rounded-lg font-semibold">
                  Always Available
                </div>
                <div className="bg-teal-100 text-teal-800 px-6 py-3 rounded-lg font-semibold">
                  Completely Private
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center">
                <GiBrain className="w-20 h-20 text-[#46827C] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Help</h3>
                <p className="text-gray-600 leading-relaxed">
                  Through advanced AI conversations, we provide immediate emotional support, 
                  coping strategies, and a judgment-free space to explore your thoughts and feelings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Mind-Z?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with mental health expertise to create 
              a supportive companion that's always there for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#46827C] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Mind-Z
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#46827C] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who's Behind Mind-Z</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative effort between technology and mental health expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-20 h-20 bg-[#46827C] rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#46827C] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-16 bg-[#46827C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mx-auto mb-6">
              <FaShieldAlt className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Safety Information</h3>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Mind-Z is an AI support tool designed to provide emotional support and coping strategies. 
              It is <strong>not a replacement</strong> for professional medical advice, diagnosis, or treatment.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
              <p className="text-red-800 font-medium">
                🚨 If you're in crisis or experiencing thoughts of self-harm, please contact emergency services 
                immediately or reach out to a mental health professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who have found support and understanding with Mind-Z
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link 
                to="/chat" 
                className="bg-white text-[#46827C] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Continue to Chat
              </Link>
            ) : (
              <>
                <Link 
                  to="/signup" 
                  className="bg-white text-[#46827C] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                >
                  Get Started Free
                </Link>
                <Link 
                  to="/login" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#46827C] transition-colors font-semibold text-lg"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-[#46827C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">MZ</span>
              </div>
              <h2 className="font-sans italic font-black text-2xl">Mind-Z</h2>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Compassionate AI mental health support • Available 24/7
              </p>
              <p className="text-gray-500 text-xs mt-2">
                © 2024 Mind-Z. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;