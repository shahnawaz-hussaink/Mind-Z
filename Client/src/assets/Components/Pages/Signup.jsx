import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden relative"> 
        <img 
          src="Background.png" 
          alt="Background" 
          className="h-full w-full object-cover opacity-50 absolute top-0 left-0 z-0" 
        />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="bg-white w-full max-w-sm md:max-w-lg lg:max-w-2xl rounded-xl opacity-95 shadow-2xl p-6 md:p-10 max-h-[100vh]">

           
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <img src="/Logo.png" alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20"/>
              <h1 className="font-sans italic font-black text-3xl sm:text-4xl text-[#46827C]">Mind-Z</h1>
            </div>

            <div className="mt-6 text-center">
              <p className="font-semibold text-2xl sm:text-3xl text-black">
                Your Journey to Wellness Starts Here
              </p>
            </div>

            <div className="mt-3 text-center pt-5">
              <p className="text-gray-600 text-sm sm:text-base">
                Create an account to get personalized health insights.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-gray-700 mb-2">Name</p>
              <input 
                type="text" 
                placeholder="Shahnawaz hussain" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700 mb-2">Email</p>
              <input 
                type="email" 
                placeholder="mindZ@gmail.com" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700 mb-2">Password</p>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700 mb-2">Confirm Password</p>
              <input 
                type="password" 
                placeholder="Confirm password" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#46827C]"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button className="w-full bg-[#46827C] text-white font-semibold py-2 rounded-lg hover:bg-[#356b66] transition">
                Create account
              </button>
            </div>

            <div className='text-center pt-5'>
                <p className='text-gray-600 text-sm sm:text-base'>
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#46827C] font-medium hover:underline">
                        Log in
                    </Link>
                </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
