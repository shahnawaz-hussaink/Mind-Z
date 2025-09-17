import { IoMdHome } from "react-icons/io";
import { FaUserCircle, FaInfoCircle, FaRegSmile } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-[#F9FAFB] border-r border-gray-200 flex flex-col justify-between z-20
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:w-64 w-64`}
      >
        <div className="flex justify-between items-center p-5">
          <h1 className="italic font-black text-3xl text-[#46827C]">Mind-Z</h1>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 bg-white rounded-full shadow"
          >
            <HiX className="w-5 h-5 text-[#46827C]" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
            <IoMdHome className="text-xl" />
            <span className="md:text-lg font-medium px-3">Home</span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
            <FaUserCircle className="text-xl" />
            <span className="md:text-lg font-medium px-3">
              <Link to="/login" >Profile</Link>
            </span>
          </div>
          <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
            <FaInfoCircle className="text-xl" />
            <span className="md:text-lg font-medium px-3">About Mind-Z</span>
          </div>
        </nav>

        <div className="flex-1 space-y-1 px-3">
            <h2 className="text-gray-600 font-semibold mb-2">
                New Chat
            </h2>

            <div className="space-y-2">
                <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
                <FaRegSmile className="text-xl text-[#46827C]" />
                <span className="md:text-lg font-medium px-3">Share how you feel</span>
                </div>

                <div className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-lg cursor-pointer transition">
                <GiMeditation className="text-xl text-[#46827C]" />
                <span className="md:text-lg font-medium px-3">Ask for calming tips</span>
                </div>
            </div>
        </div>


        <div className="pl-3">
          <h2 className="text-gray-600 font-semibold mb-2 ">
            Reccent Conversations
          </h2>
          <div className="max-h-50 md:max-h-80 overflow-y-auto space-y-1 pr-1 scroll-smooth">
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
                className="text-xs sm:text-sm font-medium p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition truncate"
              >
                {title}
              </div>
            ))}
          </div>
        </div>

        <div className="md:p-3 border-t border-gray-200">
          <div className="flex items-center py-2 px-3 hover:bg-red-100 rounded-lg cursor-pointer transition">
            <MdLocalHospital className="text-xl text-red-500" />
            <span className="text-sm md:text-lg font-medium px-3 text-red-500">
              <a href="tel:9152987821">Emergency Help</a>
            </span>
          </div>
        </div>
      </div>

      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-5 left-5 z-30 p-3 bg-white shadow-lg rounded-full border border-gray-200 hover:shadow-xl transition-all duration-300 md:hidden"
        >
          <HiMenuAlt3 className="w-6 h-6 text-[#46827C]" />
        </button>
      )}
    </>
  );
}

 