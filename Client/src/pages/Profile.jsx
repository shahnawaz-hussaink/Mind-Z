import { FaWeight, FaRulerVertical, FaRunning, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E6F7F6] to-[#F0FDFE] px-4 py-10 flex justify-center">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg px-6 md:px-10 py-10">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6 mb-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
            <div className="size-24 overflow-hidden rounded-full border">
            <img
              src="/Background.png"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-800">Shahnawaz Hussain</h1>
              <p className="text-gray-500 text-sm">mindz@example.com</p>
            </div>
          </div>
          <button
            type="button"
            className="bg-[#46827C] text-white px-5 py-2 rounded-md text-sm hover:bg-[#356e68] transition"
          >
            <Link to="/edit-profile">Edit Profile</Link>
          </button>
        </div>

        <hr className="mb-8 border-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-[#F9FDFD] rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-[#46827C] mb-4">Body Metrics</h2>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-center gap-3">
                <FaWeight className="text-[#46827C]" />
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium text-base">65 kg</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaRulerVertical className="text-[#46827C]" />
                <div>
                  <p className="text-sm text-gray-500">Height</p>
                  <p className="font-medium text-base">170 cm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9FDFD] rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-[#46827C] mb-4">Lifestyle</h2>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-center gap-3">
                <FaRunning className="text-[#46827C]" />
                <div>
                  <p className="text-sm text-gray-500">Activity Level</p>
                  <p className="font-medium text-base">Moderately Active (3–5 days/week)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaLeaf className="text-[#46827C]" />
                <div>
                  <p className="text-sm text-gray-500">Dietary Preferences</p>
                  <p className="font-medium text-base">Vegetarian, no dairy</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
