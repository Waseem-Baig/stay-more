// src/components/Preloader.tsx
import React from "react";

const Preloader = () => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center flex items-center justify-center z-50"
      style={{
        backgroundImage: "url('/images/img2.jpg')", // make sure this image exists in public folder
        backgroundSize: "cover", // Ensure the image covers the entire screen
        backgroundPosition: "center", // Keep the image centered
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50 z-40"></div>

      <div className="relative z-50 w-24 h-24">
        {/* Outer ring with animation */}
        <div className="absolute w-full h-full rounded-full flex items-center justify-center animate-pulse">
          <div className="w-16 h-16 border-4 border-dashed border-pink-400 rounded-full border-t-transparent animate-spin"></div>
        </div>

        {/* Glowing ring effect */}
        <div className="absolute w-20 h-20 rounded-full border-4 border-pink-600 opacity-40 animate-ping"></div>

        {/* Center core with more dynamic shadow */}
        <div className="absolute w-8 h-8 bg-white rounded-full border-4 border-pink-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-pink-400"></div>
      </div>
    </div>
  );
};

export default Preloader;
