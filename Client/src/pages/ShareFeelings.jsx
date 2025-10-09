// src/pages/ShareFeelings.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  FaSmile, 
  FaFrown, 
  FaMeh, 
  FaLaugh, 
  FaAngry, 
  FaSadTear,
  FaHeart,
  FaArrowRight,
  FaLightbulb,
  FaCalendar,
  FaStickyNote
} from "react-icons/fa";
import { GiBrain, GiBurningEmbers } from "react-icons/gi";

const ShareFeelings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedIntensity, setSelectedIntensity] = useState(3);
  const [thoughts, setThoughts] = useState('');
  const [physicalSensations, setPhysicalSensations] = useState([]);
  const [triggers, setTriggers] = useState('');

  const moods = [
    { icon: <FaLaugh className="w-8 h-8" />, label: "Happy", value: "happy", color: "text-yellow-500" },
    { icon: <FaSmile className="w-8 h-8" />, label: "Calm", value: "calm", color: "text-green-500" },
    { icon: <FaMeh className="w-8 h-8" />, label: "Neutral", value: "neutral", color: "text-gray-500" },
    { icon: <FaFrown className="w-8 h-8" />, label: "Sad", value: "sad", color: "text-blue-500" },
    { icon: <FaAngry className="w-8 h-8" />, label: "Angry", value: "angry", color: "text-red-500" },
    { icon: <FaSadTear className="w-8 h-8" />, label: "Anxious", value: "anxious", color: "text-purple-500" },
    { icon: <GiBurningEmbers className="w-8 h-8" />, label: "Stressed", value: "stressed", color: "text-orange-500" },
    { icon: <GiBrain className="w-8 h-8" />, label: "Overwhelmed", value: "overwhelmed", color: "text-indigo-500" }
  ];

  const physicalOptions = [
    "Tense muscles", "Headache", "Fast heartbeat", "Upset stomach",
    "Fatigue", "Restlessness", "Shallow breathing", "Sweating",
    "Trembling", "Dry mouth", "Dizziness", "No appetite"
  ];

  const triggerSuggestions = [
    "Work pressure", "Family issues", "Relationship problems", "Financial stress",
    "Health concerns", "Loneliness", "Uncertainty", "Social situations",
    "Past memories", "Future worries", "Sleep issues", "No specific trigger"
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setCurrentStep(2);
  };

  const handlePhysicalSensationToggle = (sensation) => {
    setPhysicalSensations(prev =>
      prev.includes(sensation)
        ? prev.filter(s => s !== sensation)
        : [...prev, sensation]
    );
  };

  const handleSubmit = () => {
    // TODO: Save to backend and navigate to chat with context
    const feelingData = {
      mood: selectedMood,
      intensity: selectedIntensity,
      thoughts,
      physicalSensations,
      triggers,
      timestamp: new Date().toISOString()
    };
    
    console.log('Feeling data:', feelingData);
    navigate('/chat', { state: { feelingContext: feelingData } });
  };

  const getMoodColor = () => {
    const mood = moods.find(m => m.value === selectedMood);
    return mood ? mood.color : 'text-gray-500';
  };

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
              <Link to="/chat" className="text-gray-700 hover:text-[#46827C] transition-colors font-medium">
                Chat
              </Link>
              {user ? (
                <Link 
                  to="/profile" 
                  className="bg-[#46827C] text-white px-6 py-2 rounded-lg hover:bg-[#356b66] transition-colors font-medium"
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

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step === currentStep
                    ? 'bg-[#46827C] text-white'
                    : step < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 5 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Mood Selection */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#46827C] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">How are you feeling right now?</h1>
              <p className="text-gray-600 text-lg">Select the mood that best matches how you're feeling</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.value)}
                  className="flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-[#46827C] hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className={`${mood.color} mb-3 group-hover:scale-110 transition-transform`}>
                    {mood.icon}
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-[#46827C]">
                    {mood.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => navigate('/chat')}
                className="text-[#46827C] hover:text-[#356b66] font-medium"
              >
                Skip and go directly to chat
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Intensity */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                How intense is this feeling?
              </h1>
              <p className="text-gray-600">Slide to indicate the strength of your emotion</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className={`text-6xl mb-4 ${getMoodColor()}`}>
                  {moods.find(m => m.value === selectedMood)?.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                  {selectedMood}
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-100 rounded-full p-1">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={selectedIntensity}
                    onChange={(e) => setSelectedIntensity(parseInt(e.target.value))}
                    className="w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#46827C]"
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-600 px-2">
                  <span>Very Mild</span>
                  <span>Moderate</span>
                  <span>Very Strong</span>
                </div>

                <div className="text-center mt-6">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full">
                    <FaLightbulb className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {selectedIntensity <= 2 ? "This seems manageable" :
                       selectedIntensity === 3 ? "You're noticing this feeling" :
                       "This feeling is quite strong"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 bg-[#46827C] text-white rounded-lg hover:bg-[#356b66] transition-colors font-medium flex items-center gap-2"
                >
                  Continue
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Thoughts & Physical Sensations */}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">What's going through your mind?</h1>
              <p className="text-gray-600">Share any thoughts or physical sensations you're experiencing</p>
            </div>

            <div className="space-y-8">
              {/* Thoughts */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  <FaStickyNote className="w-5 h-5 inline mr-2 text-[#46827C]" />
                  What thoughts are you having?
                </label>
                <textarea
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                  placeholder="I'm thinking about... I'm worried that... I feel like..."
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46827C] focus:border-transparent resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Optional - share what's on your mind
                </p>
              </div>

              {/* Physical Sensations */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  <GiBrain className="w-5 h-5 inline mr-2 text-[#46827C]" />
                  Any physical sensations?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {physicalOptions.map((sensation) => (
                    <button
                      key={sensation}
                      onClick={() => handlePhysicalSensationToggle(sensation)}
                      className={`p-3 rounded-lg border-2 text-left transition-all ${
                        physicalSensations.includes(sensation)
                          ? 'border-[#46827C] bg-blue-50 text-[#46827C]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {sensation}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 bg-[#46827C] text-white rounded-lg hover:bg-[#356b66] transition-colors font-medium flex items-center gap-2"
                >
                  Continue
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Triggers & Submit */}
        {currentStep === 4 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Any specific triggers?</h1>
              <p className="text-gray-600">What might have contributed to how you're feeling?</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  <FaCalendar className="w-5 h-5 inline mr-2 text-[#46827C]" />
                  What's been happening?
                </label>
                <textarea
                  value={triggers}
                  onChange={(e) => setTriggers(e.target.value)}
                  placeholder="Today at work... I had an argument with... I'm stressed about..."
                  className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46827C] focus:border-transparent resize-none"
                />
              </div>

              {/* Quick trigger suggestions */}
              <div>
                <p className="text-sm text-gray-600 mb-3">Common triggers:</p>
                <div className="flex flex-wrap gap-2">
                  {triggerSuggestions.map((trigger) => (
                    <button
                      key={trigger}
                      onClick={() => setTriggers(prev => prev ? `${prev}, ${trigger}` : trigger)}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {trigger}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-3">Ready to explore this together?</h3>
                <p className="text-blue-700 text-sm">
                  Based on what you've shared, I'll provide personalized support and coping strategies.
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-[#46827C] text-white rounded-lg hover:bg-[#356b66] transition-colors font-medium flex items-center gap-2 text-lg"
                >
                  Get Support
                  <FaHeart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Safety Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            💡 <strong>Remember:</strong> Mind-Z provides AI support, not medical care. 
            If you're in crisis, contact emergency services or a mental health professional.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ShareFeelings;