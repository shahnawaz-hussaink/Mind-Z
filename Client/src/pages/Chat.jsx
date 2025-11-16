
// import React, { useState, useRef, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import Sidebar from '../components/Sidebar';
// import WritingArea from '../components/WritingArea';
// import { Send, LockIcon } from "lucide-react";

// const Chat = () => {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       content: "Hello! I'm Mind-Z, your AI mental health companion. I'm here to listen and support you without judgment. How are you feeling today?",
//       sender: 'bot',
//       timestamp: new Date().toISOString(),
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const messagesEndRef = useRef(null);
//   const { user, logout } = useAuth();

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Mock AI response - replace with actual GPT API call
//   const getAIResponse = async (userMessage) => {
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     const responses = [
//       "I understand how you're feeling. It's completely normal to have these thoughts. Would you like to talk more about what's on your mind?",
//       "Thank you for sharing that with me. Remember, it's okay to not be okay sometimes. How can I support you right now?",
//       "I hear you. Your feelings are valid. Let's work through this together. What's one small thing that might help you feel better?",
//       "That sounds challenging. I'm here to listen without judgment. Would you like to explore some coping strategies together?",
//       "I appreciate you opening up. Taking this first step shows strength. What would you like to focus on improving today?"
//     ];
    
//     return responses[Math.floor(Math.random() * responses.length)];
//   };

//   const sendMessage = async (messageText = inputMessage) => {
//     if (!messageText.trim() || isLoading) return;

//     const userMessage = {
//       id: Date.now(),
//       content: messageText,
//       sender: 'user',
//       timestamp: new Date().toISOString(),
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputMessage('');
//     setIsLoading(true);

//     try {
//       const aiResponse = await getAIResponse(messageText);
      
//       const botMessage = {
//         id: Date.now() + 1,
//         content: aiResponse,
//         sender: 'bot',
//         timestamp: new Date().toISOString(),
//       };

//       setMessages(prev => [...prev, botMessage]);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       const errorMessage = {
//         id: Date.now() + 1,
//         content: "I'm having trouble responding right now. Please try again.",
//         sender: 'bot',
//         timestamp: new Date().toISOString(),
//         isError: true,
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleQuickAction = (action) => {
//     let message = "";
//     switch (action) {
//       case 'share-feelings':
//         message = "I'd like to share how I'm feeling today...";
//         break;
//       case 'calming-tips':
//         message = "Can you give me some calming tips?";
//         break;
//       default:
//         message = action;
//     }
//     sendMessage(message);
//   };

//   const formatTime = (timestamp) => {
//     return new Date(timestamp).toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col md:ml-0">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={toggleSidebar}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
//               >
//                 <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//               <div>
//                 <h1 className="text-lg font-semibold text-gray-800">Mind-Z Chat</h1>
//                 <p className="text-sm text-gray-500">Your AI mental health companion</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <div className="text-right">
//                 <p className="text-sm font-medium text-gray-700">Welcome, {user?.name || 'User'}</p>
//                 <p className="text-xs text-gray-500">{user?.email}</p>
//               </div>
//               <button
//                 onClick={logout}
//                 className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Messages Area */}
//         <div className="flex-1 overflow-y-auto px-4 py-6">
//           <div className="max-w-4xl mx-auto space-y-6">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`flex ${
//                   message.sender === 'user' ? 'justify-end' : 'justify-start'
//                 }`}
//               >
//                 <div
//                   className={`max-w-2xl px-4 py-3 rounded-2xl ${
//                     message.sender === 'user'
//                       ? 'bg-[#46827C] text-white rounded-br-none'
//                       : 'bg-white text-gray-800 rounded-bl-none border border-gray-200 shadow-sm'
//                   } ${message.isError ? 'bg-red-100 text-red-800 border-red-200' : ''}`}
//                 >
//                   <p className="text-sm leading-relaxed">{message.content}</p>
//                   <p
//                     className={`text-xs mt-2 ${
//                       message.sender === 'user'
//                         ? 'text-blue-100'
//                         : 'text-gray-500'
//                     }`}
//                   >
//                     {formatTime(message.timestamp)}
//                   </p>
//                 </div>
//               </div>
//             ))}
            
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm">
//                   <div className="flex space-x-2">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//         </div>

//         {/* Quick Suggestions */}
//         {messages.length <= 2 && (
//           <div className="px-4 pb-4">
//             <div className="max-w-4xl mx-auto">
//               <p className="text-sm text-gray-500 mb-3 text-center">Quick starters:</p>
//               <div className="flex flex-wrap gap-2 justify-center">
//                 {[
//                   "I'm feeling anxious today",
//                   "How can I manage stress?",
//                   "I need motivation",
//                   "Tips for better sleep"
//                 ].map((suggestion, index) => (
//                   <button
//                     key={index}
//                     onClick={() => sendMessage(suggestion)}
//                     className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
//                   >
//                     {suggestion}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Writing Area */}
//         <div className="border-t border-gray-200 bg-white">
//           <WritingArea />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;