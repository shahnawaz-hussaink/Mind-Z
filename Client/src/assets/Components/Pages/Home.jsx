import Sidebar from "../SmallComponents/Sidebar";
import WritingArea from "../SmallComponents/WritingArea";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="h-screen w-full bg-[#F0FDFE] flex overflow-hidden relative">

      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 h-full flex flex-col relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-10">
        </div>
        <div className="p-4">
          <WritingArea />
        </div>
      </div>
    </div>
  );
}
