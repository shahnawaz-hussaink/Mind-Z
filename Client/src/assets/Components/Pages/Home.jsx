import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { HiPencilSquare } from "react-icons/hi2";
import { MdLocalHospital } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";  
import { FaInfoCircle } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";  
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex h-screen bg-white font-sans">
      <div className="w-1/5 h-full bg-[#F9FAFB] border-r border-gray-200 flex flex-col justify-between">
        
        <div className="p-5">
          <h1 className="italic font-black text-3xl text-[#46827C]">
            Mind-Z
          </h1>
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


        <div className="px-3">
          <h2 className="text-gray-600 font-semibold mb-2">
            Past Conversations
          </h2>
          <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
            {[
              "How to improve mental health",
              "Why I have headache",
              "How to release stress naturally",
              "Daily motivation",
              "Sleep improvement tips",
              "Coping with anxiety",
              "Anxiety",
              "How to improve mental health",
              "Why I have headache",
              "How to release stress naturally",
            ].map((title, idx) => (
              <div
                key={idx}
                className="text-sm font-medium p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition"
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

      <div className="w-4/5 h-full bg-[#F0FDFE] p-10">
        
      </div>
    </div>
  );
}
