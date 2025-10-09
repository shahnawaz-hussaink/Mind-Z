// src/components/WritingArea.jsx
import { Send, LockIcon, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function WritingArea({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [showGuestWarning, setShowGuestWarning] = useState(false);

  // Check if user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem('token') || localStorage.getItem('authToken');
    return !!token;
  };

  const handleSend = () => {
    if (message.trim()) {
      // Show warning for guest users
      if (!isAuthenticated()) {
        setShowGuestWarning(true);
        // Hide warning after 5 seconds
        setTimeout(() => setShowGuestWarning(false), 5000);
      }

      if (onSendMessage) {
        onSendMessage(message);
      }
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="w-full bottom-10 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Guest Warning Banner */}
          {showGuestWarning && !isAuthenticated() && (
            <div className="mb-3 bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2 animate-fade-in">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-amber-800 font-medium">
                  You're using Guest Mode
                </p>
                <p className="text-xs text-amber-700 mt-1">
                  Your conversation won't be saved. 
                  <Link to="/signup" className="underline font-semibold ml-1 hover:text-amber-900">
                    Create an account
                  </Link> to save your conversations.
                </p>
              </div>
              <button 
                onClick={() => setShowGuestWarning(false)}
                className="text-amber-600 hover:text-amber-800"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Input Area */}
          <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm border border-gray-200 p-2 relative">
            {/* Guest Mode Indicator Overlay */}
            {!isAuthenticated() && (
              <div className="absolute -top-8 left-0 right-0 flex items-center justify-center">
                <div className="bg-blue-50 border border-blue-200 rounded-t-lg px-3 py-1 flex items-center gap-2">
                  <LockIcon className="w-3 h-3 text-blue-600" />
                  <span className="text-xs text-blue-700 font-medium">Guest Mode</span>
                </div>
              </div>
            )}

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isAuthenticated() 
                  ? "Ask a question or describe how you're feeling…"
                  : "Try Mind-Z as a guest (conversations won't be saved)…"
              }
              className="flex-1 p-3 border-none outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className={`p-3 rounded-md transition-colors duration-200 ${
                message.trim()
                  ? 'bg-[#46827C] text-white hover:bg-[#3a6b66]'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send size={18} />
            </button>
          </div>

          {/* Bottom Info Text */}
          <div className="text-center mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
            {isAuthenticated() ? (
              <>
                <LockIcon className="w-3 h-3" />
                <span>Your conversations are end-to-end encrypted and saved</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-3 h-3 text-gray-400" />
                <span>Guest mode - conversations won't be saved. </span>
                <Link to="/signup" className="text-[#46827C] underline hover:text-[#3a6b66] font-medium">
                  Sign up to save
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Add CSS for animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}