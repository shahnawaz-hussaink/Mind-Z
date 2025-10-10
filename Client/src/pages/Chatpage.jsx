import Sidebar from "../components/Sidebar";
import WritingArea from "../components/WritingArea";
import { useState } from "react";

export default function Homepage() {
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