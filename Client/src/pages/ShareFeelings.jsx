
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
  FaStickyNote,
  FaCheckCircle,
  FaSpinner
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
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Check authentication
  const isAuthenticated = () => {
    const token = localStorage.getItem('token') || localStorage.getItem('authToken');
    return !!token;
  };

  const moods = [
    { icon: <FaLaugh className="w-8 h-8" />, label: "Happy", value: "happy", color: "text-yellow-500", bgColor: "bg-yellow-50" },
    { icon: <FaSmile className="w-8 h-8" />, label: "Calm", value: "calm", color: "text-green-500", bgColor: "bg-green-50" },
    { icon: <FaMeh className="w-8 h-8" />, label: "Neutral", value: "neutral", color: "text-gray-500", bgColor: "bg-gray-50" },
    { icon: <FaFrown className="w-8 h-8" />, label: "Sad", value: "sad", color: "text-blue-500", bgColor: "bg-blue-50" },
    { icon: <FaAngry className="w-8 h-8" />, label: "Angry", value: "angry", color: "text-red-500", bgColor: "bg-red-50" },
    { icon: <FaSadTear className="w-8 h-8" />, label: "Anxious", value: "anxious", color: "text-purple-500", bgColor: "bg-purple-50" },
    { icon: <GiBurningEmbers className="w-8 h-8" />, label: "Stressed", value: "stressed", color: "text-orange-500", bgColor: "bg-orange-50" },
    { icon: <GiBrain className="w-8 h-8" />, label: "Overwhelmed", value: "overwhelmed", color: "text-indigo-500", bgColor: "bg-indigo-50" }
  ];

  const physicalOptions = [
    "Tense muscles", "Headache", "Fast heartbeat", "Upset stomach",
    "Fatigue", "Restlessness", "Shallow breathing", "Sweating",
    "Trembling", "Dry mouth", "Dizziness", "No appetite"
  ];

  const triggerSuggestions = [
    "Work pressure", "Family issues", "Relationship problems", "Financial stress",
    "Health concerns", "Loneliness", "Uncertainty", "Social situations"
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handlePhysicalSensationToggle = (sensation) => {
    setPhysicalSensations(prev =>
      prev.includes(sensation)
        ? prev.filter(s => s !== sensation)
        : [...prev, sensation]
    );
  };

  const getMoodData = () => moods.find(m => m.value === selectedMood);

  const getPersonalizedInsight = () => {
    const mood = getMoodData();
    const insights = {
      happy: "It's wonderful that you're feeling happy! Let's explore what's contributing to this positive mood and how to maintain it.",
      calm: "Feeling calm is great. I can help you build on this peaceful state and develop techniques to return to it when needed.",
      neutral: "Neutral feelings are completely valid. Sometimes we need to explore what's beneath the surface to understand ourselves better.",
      sad: "I'm here to support you through this sadness. Together we can explore what's causing these feelings and find ways to cope.",
      angry: "Anger is a valid emotion. Let's work together to understand what's triggering it and find healthy ways to express and manage it.",
      anxious: "Anxiety can feel overwhelming. I'm here to help you understand your triggers and develop coping strategies that work for you.",
      stressed: "Stress affects us all. Let's identify what's causing this stress and create a personalized plan to help you manage it.",
      overwhelmed: "Feeling overwhelmed is tough. I'll help you break things down into manageable pieces and find relief."
    };
    return insights[selectedMood] || insights.neutral;
  };

  const getCopingStrategies = () => {
    const strategies = {
      happy: ["Practice gratitude journaling", "Share positivity with others", "Engage in activities you love"],
      calm: ["Meditation and mindfulness", "Deep breathing exercises", "Gentle stretching or yoga"],
      neutral: ["Self-reflection journaling", "Try something new", "Connect with friends"],
      sad: ["Talk to someone you trust", "Gentle physical activity", "Creative expression (art, music)"],
      angry: ["Physical exercise", "Journaling your feelings", "Progressive muscle relaxation"],
      anxious: ["Grounding techniques (5-4-3-2-1)", "Deep breathing exercises", "Limiting caffeine"],
      stressed: ["Time management techniques", "Break tasks into smaller steps", "Take regular breaks"],
      overwhelmed: ["Prioritize tasks", "Ask for help", "Practice saying no"]
    };
    return strategies[selectedMood]?.slice(0, 3) || strategies.neutral;
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    
    const feelingData = {
      mood: selectedMood,
      intensity: selectedIntensity,
      thoughts,
      physicalSensations,
      triggers,
      timestamp: new Date().toISOString(),
      userId: user?.id || 'guest'
    };

    // Save to backend if authenticated
    if (isAuthenticated()) {
      try {
        const token = localStorage.getItem('token') || localStorage.getItem('authToken');
        await fetch('/api/mood-checkins', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(feelingData)
        });
      } catch (error) {
        console.error('Error saving mood check-in:', error);
      }
    }

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSummary(true);
    }, 2000);
  };

  const handleStartChat = () => {
    const feelingData = {
      mood: selectedMood,
      intensity: selectedIntensity,
      thoughts,
      physicalSensations,
      triggers,
      insight: getPersonalizedInsight(),
      strategies: getCopingStrategies()
    };
    
    navigate('/chat', { 
      state: { 
        feelingContext: feelingData,
        autoMessage: `I just completed a mood check-in. I'm feeling ${selectedMood} at an intensity of ${selectedIntensity}/5. ${thoughts ? `My thoughts: ${thoughts}` : ''}`
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#46827C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MZ</span>
              </div>
              <h1 className="font-sans italic font-black text-3xl text-[#46827C]">Mind-Z</h1>
            </Link>
            
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
      {!showSummary && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    step === currentStep
                      ? 'bg-[#46827C] text-white scale-110'
                      : step < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <FaCheckCircle /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 transition-all ${
                      step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Mood Selection */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#46827C] to-[#5ba39c] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaHeart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">How are you feeling right now?</h1>
              <p className="text-gray-600 text-lg">Select the mood that best matches your current state</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.value)}
                  className="flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-[#46827C] hover:shadow-lg transition-all duration-200 group"
                >
                  <div className={`${mood.color} mb-3 group-hover:scale-125 transition-transform duration-200`}>
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
                className="text-[#46827C] hover:text-[#356b66] font-medium underline"
              >
                Skip and chat directly
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Intensity */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                How intense is this feeling?
              </h1>
              <p className="text-gray-600">On a scale from 1 to 5</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className={`text-6xl mb-4 ${getMoodData()?.color} transition-all duration-300`}>
                  {getMoodData()?.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                  {selectedMood}
                </h2>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={selectedIntensity}
                    onChange={(e) => setSelectedIntensity(parseInt(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-green-300 via-yellow-300 to-red-400 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-[#46827C] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer transition-all"
                  />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#46827C] text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                    {selectedIntensity}/5
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600 px-2">
                  <span>Very Mild</span>
                  <span>Moderate</span>
                  <span>Very Strong</span>
                </div>

                <div className="text-center mt-8">
                  <div className={`inline-flex items-center gap-2 px-5 py-3 rounded-full ${getMoodData()?.bgColor}`}>
                    <FaLightbulb className={`w-5 h-5 ${getMoodData()?.color}`} />
                    <span className={`text-sm font-medium ${getMoodData()?.color}`}>
                      {selectedIntensity <= 2 ? "This seems manageable" :
                       selectedIntensity === 3 ? "You're noticing this feeling clearly" :
                       "This feeling is quite strong - let's work through it together"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-8 py-3 bg-[#46827C] text-white rounded-lg hover:bg-[#356b66] transition-colors font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
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
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell me more</h1>
              <p className="text-gray-600">What's going through your mind and body?</p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  <FaStickyNote className="w-5 h-5 inline mr-2 text-[#46827C]" />
                  What thoughts are you having? (Optional)
                </label>
                <textarea
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                  placeholder="I'm thinking about... I'm worried that... I feel like..."
                  className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#46827C] focus:border-transparent resize-none transition-all"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  <GiBrain className="w-5 h-5 inline mr-2 text-[#46827C]" />
                  Any physical sensations? (Optional)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {physicalOptions.map((sensation) => (
                    <button
                      key={sensation}
                      onClick={() => handlePhysicalSensationToggle(sensation)}
                      className={`p-3 rounded-lg border-2 text-left text-sm transition-all duration-200 ${
                        physicalSensations.includes(sensation)
                          ? 'border-[#46827C] bg-blue-50 text-[#46827C] font-semibold shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      {sensation}
                    </button>
                  ))}
                </div>
                {physicalSensations.length > 0 && (
                  <p className="text-sm text-gray-600 mt-3">
                    Selected: {physicalSensations.length} sensation{physicalSensations.length > 1 ? 's' : ''}
                  </p>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-8 py-3 bg-[#46827C] text-white rounded-lg hover:bg-[#356b66] transition-colors font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Continue
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Triggers */}
        {currentStep === 4 && !isProcessing && !showSummary && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">What triggered this feeling?</h1>
              <p className="text-gray-600">Understanding triggers helps us cope better (Optional)</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  <FaCalendar className="w-5 h-5 inline mr-2 text-[#46827C]" />
                  Describe what happened
                </label>
                <textarea
                  value={triggers}
                  onChange={(e) => setTriggers(e.target.value)}
                  placeholder="Today at work... I had a conversation with... Something reminded me of..."
                  className="w-full h-24 px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#46827C] focus:border-transparent resize-none transition-all"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">Quick suggestions (tap to add):</p>
                <div className="flex flex-wrap gap-2">
                  {triggerSuggestions.map((trigger) => (
                    <button
                      key={trigger}
                      onClick={() => setTriggers(prev => prev ? `${prev}, ${trigger}` : trigger)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#46827C] hover:text-white transition-all duration-200 font-medium"
                    >
                      {trigger}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-[#46827C] to-[#5ba39c] text-white rounded-lg hover:shadow-xl transition-all font-medium flex items-center gap-2 text-lg shadow-lg"
                >
                  Get My Personalized Support
                  <FaHeart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Processing State */}
        {isProcessing && (
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-200 text-center animate-fade-in">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#46827C] border-t-transparent mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Analyzing your check-in...</h2>
            <p className="text-gray-600">Creating your personalized support plan</p>
          </div>
        )}

        {/* Summary & Insights */}
        {showSummary && (
          <div className="space-y-6 animate-fade-in">
            {/* Mood Summary Card */}
            <div className={`rounded-2xl shadow-lg p-8 border-2 ${getMoodData()?.bgColor} border-gray-200`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`text-5xl ${getMoodData()?.color}`}>
                    {getMoodData()?.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 capitalize">{selectedMood}</h2>
                    <p className="text-gray-600">Intensity: {selectedIntensity}/5</p>
                  </div>
                </div>
                <div className="bg-white rounded-full p-3 shadow-md">
                  <FaCheckCircle className="w-8 h-8 text-green-500" />
                </div>
              </div>
              
              {thoughts && (
                <div className="bg-white/70 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Your Thoughts:</p>
                  <p className="text-gray-800">{thoughts}</p>
                </div>
              )}

              {physicalSensations.length > 0 && (
                <div className="bg-white/70 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Physical Sensations:</p>
                  <div className="flex flex-wrap gap-2">
                    {physicalSensations.map((s) => (
                      <span key={s} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {triggers && (
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Possible Triggers:</p>
                  <p className="text-gray-800">{triggers}</p>
                </div>
              )}
            </div>

            {/* Personalized Insight */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <FaLightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Insight</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {getPersonalizedInsight()}
                  </p>
                </div>
              </div>
            </div>

            {/* Coping Strategies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <GiBrain className="w-6 h-6 text-[#46827C]" />
                Recommended Coping Strategies
              </h3>
              <div className="space-y-3">
                {getCopingStrategies().map((strategy, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="bg-[#46827C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-gray-800 font-medium">{strategy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-gradient-to-r from-[#46827C] to-[#5ba39c] rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to explore further?</h3>
              <p className="mb-6 text-white/90">
                Let's continue this conversation. I'm here to provide support, answer questions, and help you develop coping strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleStartChat}
                  className="flex-1 bg-white text-[#46827C] px-6 py-4 rounded-lg hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center gap-2"
                >
                  Start Supportive Chat
                  <FaArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="border-2 border-white text-white px-6 py-4 rounded-lg hover:bg-white/10 transition-all font-medium"
                >
                  Return Home
                </button>
              </div>
            </div>

            {/* Save for Later - Only for authenticated users */}
            {isAuthenticated() && (
              <div className="bg-blue-50 rounded-2xl shadow-lg p-6 border border-blue-200 text-center">
                <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Check-in Saved!</h3>
                <p className="text-gray-600 text-sm">
                  Your mood check-in has been saved to your profile. You can review your emotional patterns anytime.
                </p>
              </div>
            )}

            {/* Guest CTA */}
            {!isAuthenticated() && (
              <div className="bg-amber-50 rounded-2xl shadow-lg p-6 border-2 border-amber-200 text-center">
                <FaHeart className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Want to track your progress?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Create a free account to save your mood check-ins, track patterns over time, and get personalized insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/signup"
                    className="bg-[#46827C] text-white px-6 py-3 rounded-lg hover:bg-[#356b66] transition-all font-medium"
                  >
                    Create Free Account
                  </Link>
                  <Link
                    to="/login"
                    className="border-2 border-[#46827C] text-[#46827C] px-6 py-3 rounded-lg hover:bg-[#46827C] hover:text-white transition-all font-medium"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Safety Footer */}
      {!showSummary && (
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-sm">
              💡 <strong>Remember:</strong> Mind-Z provides AI support, not medical care. 
              If you're in crisis, please contact emergency services or a mental health professional.
            </p>
            <div className="mt-4 flex items-center justify-center gap-6">
              <a href="tel:9152987821" className="text-red-400 hover:text-red-300 font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                Emergency Help: 9152987821
              </a>
            </div>
          </div>
        </footer>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ShareFeelings;