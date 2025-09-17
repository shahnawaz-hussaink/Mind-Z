import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { HiPencilSquare } from "react-icons/hi2";
import { MdLocalHospital } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";  
import { FaInfoCircle } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";  
import { FaRegSmile } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Home() {
    let [click,setClick] = useState(true);

    const onToggle = ()=>{
        setClick((prev)=>!prev);
        
    }
    
  return (
    <div className="flex h-screen bg-white font-sans">
      <div
        className={`fixed top-0 left-0 h-full bg-[#F9FAFB] border-r border-gray-200 flex flex-col justify-between transform transition-transform duration-300 z-20 
        ${click ? "translate-x-0 w-64" : "-translate-x-full w-64"}`}
      >
        
        <div className="flex justify-between items-center p-5">
          <h1 className="italic font-black text-3xl text-[#46827C]">
            Mind-Z
          </h1>
          <button 
            onClick={onToggle} 
            className="relative p-3 bg-white shadow-md rounded-full border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            aria-label={click ? 'Close sidebar' : 'Open sidebar'}
          >
            <div className="relative w-5 h-5">
              <HiMenuAlt3 
                className={`absolute inset-0 w-5 h-5 text-[#46827C] transition-all duration-300 
                  ${click ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`} 
              />
              <HiX 
                className={`absolute inset-0 w-5 h-5 text-[#46827C] transition-all duration-300 
                  ${click ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'}`} 
              />
            </div>
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
            <IoMdHome className="text-xl" />
            <span className="text-lg font-medium px-3">Home</span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
            <FaUserCircle className="text-xl" />
            <span className="text-lg font-medium px-3">Profile</span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
            <FaInfoCircle className="text-xl" />
            <span className="text-lg font-medium px-3">About Mind-Z</span>
          </div>
        </nav>

        <div className="flex-1 space-y-1 px-3">
            <h2 className="text-gray-600 font-semibold mb-2">
                New Chat
            </h2>

            <div className="space-y-2">
                <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
                <FaRegSmile className="text-xl text-[#46827C]" />
                <span className="text-lg font-medium px-3">Share how you feel</span>
                </div>

                <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
                <GiMeditation className="text-xl text-[#46827C]" />
                <span className="text-lg font-medium px-3">Ask for calming tips</span>
                </div>
            </div>
        </div>


        <div className="pl-3">
          <h2 className="text-gray-600 font-semibold mb-2 uppercase">
            Reccent Conversations
          </h2>
          <div className="max-h-80 overflow-y-auto space-y-1 pr-1 scroll-smooth">
            {[
              "How to improve mental health",
              "Why I have headache",
              "How to release stress naturally",
              "Daily motivation",
              "Sleep improvement tips",
              "Coping with anxiety",
              "nxiety",
              "How to improve mental health",
              "Why I have headache",
              "How to release stress naturally",
            ].map((title, idx) => (
              <div
                key={idx}
                className="text-sm font-medium p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition truncate"
              >
                {title}
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 border-t border-gray-200">
          <div className="flex items-center py-2 px-3 hover:bg-red-100 rounded-lg cursor-pointer transition">
            <MdLocalHospital className="text-xl text-red-500" />
            <span className="text-lg font-medium px-3 text-red-500">
              <a href="tel:9152987821">Emergency Help</a>
            </span>
          </div>
        </div>
      </div>

      {!click && (
        <button 
          onClick={onToggle}
          className="fixed top-5 left-5 z-30 p-3 bg-white shadow-lg rounded-full border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Open sidebar"
        >
          <HiMenuAlt3 className="w-6 h-6 text-[#46827C]" />
        </button>
      )}
      
      <div className="w-4/5 h-full bg-[#F0FDFE] p-10">
        
      </div>
    </div>
  );
}