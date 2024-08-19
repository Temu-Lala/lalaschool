"use client"
import React, { useState } from "react";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import Codeeditor from './htmleditor'
const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
      <div
        className={`flex flex-col  flex-grow transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        {/* Navbar */}
        <nav className={`bg-gray-200 transition-all duration-300 `}>
          <Navbar />
        </nav>
        {/* Main content */}
        <main className=" p-4 flex flex-col xl:flex-row overflow-y-auto">
          <div className="flex-1"> {children}</div>
          <div className="flex-1">   <Codeeditor/></div>
         
       
        </main>
        {/* Footer */}
        <footer className="bg-gray-200 ">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
