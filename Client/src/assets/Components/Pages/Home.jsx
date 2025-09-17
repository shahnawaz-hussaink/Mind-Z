import { 
    CiCirclePlus,
 } from "react-icons/ci";

import { 
    LuPencilLine,
 } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
export default function Home(){
    return (
        <>
            <div className="flex justify-center bg-white">

                {/* <div className="w-1.5/20 h-screen">
                    <div className=" flex justify-center pt-5">
                        <h1 className="font-sans font-black text-3xl sm:text-3xl text-[#46827C]">Mind-Z</h1>
                    </div>
                </div> */}

                <div className="w-4/20 h-screen bg-[#F2F2F2] border border-[#E0DEDE]">

                    <div>
                        <div className="py-5 ">
                            <h1 className="font-sans italic font-black text-3xl sm:text-4xl text-[#46827C] px-3">Mind-Z</h1>
                            
                        </div>
                    </div>

                    <div className="py-5">
                        <div className="flex py-2 hover:bg-gray-300 px-3">
                            <button className="text-xl cursor-pointer">
                                <IoMdHome />
                            </button>
                            <h1 className="text-lg font-medium px-3">
                                Home
                            </h1>
                        </div>

                        <div className="flex py-2 hover:bg-gray-300 px-3">
                            <button className="text-xl cursor-pointer">
                                <FcAbout />
                            </button>
                            <h1 className="text-lg font-medium px-3">
                                About Mind-Z
                            </h1>
                        </div>
                    </div>

                   <div className="py-3">
                        <div className="flex py-2 hover:bg-gray-300 px-3">
                            <button className="text-xl cursor-pointer">
                                <LuPencilLine />
                            </button>
                            <h1 className="text-lg font-medium px-3">
                                New Chat
                            </h1>
                        </div>
                   </div>

                    <div className="py-5">
                        <div className="">
                            <p className="px-1">
                                Conversation
                            </p>
                        </div>
                        <div className="flex justify-between ">
                            <h1 className="text-lg font-medium">
                                
                            </h1>
                            <button className="text-xl">
                                <CiCirclePlus />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="w-16/20 h-full bg-cyan-400">

                </div>
            </div>
        </>
    );
}