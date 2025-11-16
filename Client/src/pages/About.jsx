// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import {
  FaHeart,
  FaLightbulb,
  FaCompass,
  FaShieldAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const About = () => {
  const { user } = useAuth();

  const values = [
    {
      icon: <FaHeart className="w-8 h-8 text-[#46827C]" />,
      title: "Empathy First",
      description:
        "Every feature in Mind-Z is built with empathy at its core — because listening with understanding can heal more than words ever could.",
    },
    {
      icon: <FaCompass className="w-8 h-8 text-[#46827C]" />,
      title: "Accessibility",
      description:
        "Mental wellness should be universal. Mind-Z aims to reach anyone, anywhere — no barriers, no stigma.",
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-[#46827C]" />,
      title: "Innovation with Purpose",
      description:
        "We use technology not for convenience, but for compassion — designing AI that understands human emotion deeply.",
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8 text-[#46827C]" />,
      title: "Support, Not Replacement",
      description:
        "Mind-Z complements professional therapy, offering a gentle space between isolation and help.",
    },
  ];

  const journey = [
    {
      year: "2024",
      title: "The Beginning",
      description:
        "Mind-Z was born during a mental health hackathon — an idea to make emotional support accessible for everyone.",
    },
    {
      year: "2025",
      title: "The Evolution",
      description:
        "We developed our empathy-driven AI model — one that listens, learns, and responds with compassion.",
    },
    {
      year: "Future",
      title: "The Vision Ahead",
      description:
        "We’re expanding to multilingual and community-driven mental wellness support — a world where help is just a message away.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-[#f3f8f7] to-[#eef5f4] text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#46827C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MZ</span>
              </div>
              <h1 className="font-sans italic font-black text-3xl text-[#46827C]">
                Mind-Z
              </h1>
            </Link>

            <nav className="flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#46827C] transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-[#46827C] font-medium border-b-2 border-[#46827C]"
              >
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

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-[#f9f9fb] to-[#eef7f7]">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Story: <span className="text-[#46827C]">Mind-Z</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Mind-Z was founded on a simple belief — that everyone deserves to be
            heard. We realized how many people face emotional struggles
            silently, and how technology, when built with empathy, could change
            that.
          </p>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
            So, we built Mind-Z — an AI companion that listens without judgment,
            speaks with compassion, and supports you when no one else is around.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <div>
            <h2 className="text-4xl font-bold text-[#46827C] mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To create a world where emotional well-being is accessible to
              everyone — where seeking help is a sign of strength, not shame.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#46827C] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To bridge the gap between professional therapy and daily emotional
              support using empathetic AI that understands human feelings deeply
              and responds with kindness.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Our Journey
          </h2>
          <div className="space-y-10">
            {journey.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-[#46827C] mb-2">
                  {step.year} — {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What We Believe In
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-[#46827C] to-[#356b66] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <GiBrain className="w-20 h-20 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            Mind-Z isn’t about replacing human connection — it’s about creating
            one when you feel alone. Every word, every response, and every
            interaction is built on understanding, compassion, and trust.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the Builders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate team behind Mind-Z, combining technology expertise
              with mental health awareness
            </p>
          </div>

          <div className="grid grid-cols-1  gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <img
                  src="/shahnawaz.png"
                  alt="Shahnawaz Hussain"
                  className="w-full h-full rounded-full object-cover border-4 border-[#46827C]"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#46827C] rounded-full flex items-center justify-center text-white">
                  <i className="fa-solid fa-code text-sm"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Shahnawaz Hussain
              </h3>
              <p className="text-[#46827C] font-medium mb-4">
                Founder & Developer
              </p>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Building tech that listens — not just talks. Passionate about
                AI, mental health, and design.
              </p>
              <div className="flex justify-center space-x-5">
                <a
                  href="https://github.com/shahnawaz-hussaink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                >
                  <FaGithub className="size-8"/>
                </a>
                <a
                  href="https://linkedin.com/in/shahnawaz-hussaink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#0077b5] transition-colors duration-300"
                >
                  <FaLinkedin className="size-8"/>
                </a>
                <a
                  href="https://x.com/k_shahnawazhuss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  <i className="fa-brands fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
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
              © 2025 Mind-Z. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
