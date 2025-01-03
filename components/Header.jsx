'use client'
import { useState, useEffect } from "react";

export default function HeaderComponent() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isSidebarOpen) return; // Don't update visibility if sidebar is open

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide header on scroll down
        setIsVisible(false);
      } else {
        // Show header on scroll up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isSidebarOpen]);

  return (
    <div
      className={`w-full z-40 bg-black flex fixed top-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo Section */}
      <div>
        <img src="./images/LeoTaxiLogo.png" alt="Logo" />
      </div>

      {/* Header Content */}
      <div className="w-full flex items-center text-white justify-between">
        {/* Mobile View Header */}
        <div className="w-[75%] text-center sm:hidden">
          <h1>Leo Call Taxi</h1>
        </div>
        <div className="h-[32%] w-[25%] flex justify-end pr-10 sm:hidden">
          <button
            className="flex flex-col justify-center items-center space-y-1"
            onClick={toggleSidebar}
          >
            {/* Three-Bar Icon */}
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>

        {/* Desktop View Navigation */}
        <div className="hidden sm:flex w-full font-bold justify-evenly items-center">
          <a href="#booknow">Home</a>
          <a href="#packages">Booking</a>
          <a href="#ReviewPage">About us</a>
          <a href="#Banner">Contact us</a>
          <a href="#about">Join us</a>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white z-50 flex flex-col shadow-lg">
          <button
            className="text-right text-white p-4 text-xl"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          <a href="#booknow" className="px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#packages" className="px-4 py-2 hover:bg-gray-700">Booking</a>
          <a href="#ReviewPage" className="px-4 py-2 hover:bg-gray-700">About us</a>
          <a href="#Banner" className="px-4 py-2 hover:bg-gray-700">Contact us</a>
          <a href="#about" className="px-4 py-2 hover:bg-gray-700">Join us</a>
        </div>
      )}

      {/* Backdrop for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
