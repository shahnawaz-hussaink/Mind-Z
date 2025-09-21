import Logo from "../SmallComponents/Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function EditProfile() {
  const navigate = useNavigate();

  const cancelEdit= ()=>{
    navigate(-1)
  }
  const saveChanges = ()=>{
    navigate("/")
  }
  return (
    <>
      <div className="min-h-screen w-full bg-[#F0FDFE] flex justify-center px-4 py-6">
      <div className="bg-white w-full max-w-sm md:max-w-xl lg:max-w-3xl rounded-xl shadow-2xl px-4 md:px-6 py-6">
        

        <div className="text-center font-sans italic text-2xl font-bold mb-4">
          <h1>Edit Profile</h1>
        </div>

        <div className="border-t border-gray-300 mb-6" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
          <div className="size-24 overflow-hidden rounded-full border">
            <img
              src="/Background.png"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <button
            type="button"
            className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100"
          >
            Change Avatar
          </button>
        </div>


        <form action="/submit-profile" method="POST" className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Shahnawaz Hussain"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="mindz@example.com"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="weight" className="block text-gray-700 mb-2">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="65"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-gray-700 mb-2">Height (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                placeholder="170"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="activityLevel" className="block text-gray-700 mb-2">Activity Level</label>
            <select
              id="activityLevel"
              name="activityLevel"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
            >
              <option value="">Select activity level</option>
              <option value="low">Low (little to no exercise)</option>
              <option value="moderate">Moderate (3–5 days/week)</option>
              <option value="high">High (daily workouts)</option>
            </select>
          </div>

          <div>
            <label htmlFor="dietaryPreferences" className="block text-gray-700 mb-2">Dietary Preferences</label>
            <textarea
              id="dietaryPreferences"
              name="dietaryPreferences"
              rows="3"
              placeholder="Vegetarian, no dairy"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="reset"
              className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100"
              onClick={cancelEdit}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800"
              onClick={saveChanges}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
    <div>
        <Logo/>
    </div>
    </>
  );
}
