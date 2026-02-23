import React from "react";
import { FaTools } from "react-icons/fa";

const WorkingStage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white px-6 sm:px-12">
      
      {/* Icon */}
      <FaTools className="text-5xl sm:text-6xl md:text-8xl mb-6 animate-bounce" />
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-center">
        We're Working on It!
      </h1>
      
      {/* Subtext */}
      <p className="text-md sm:text-lg md:text-2xl mb-8 text-center max-w-xl">
        This page is currently under construction. We'll be back soon with something amazing!
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg shadow hover:bg-gray-200 transition text-center"
        >
          Go Home
        </a>
       
      </div>
    </div>
  );
};

export default WorkingStage;