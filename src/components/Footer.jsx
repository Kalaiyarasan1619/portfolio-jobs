import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 ">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-blue-600/10 blur-[100px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* Main Text */}
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
          <span className="text-gray-400">© 2025</span>{" "}
          <span className="text-blue-500 font-bold">
            Seenu@creation
          </span>
        </h2>

        {/* Small Sub Text */}
        <p className="text-gray-500 mt-3 text-sm">
          Built with React 
        </p>

      </div>
    </footer>
  );
};

export default Footer;
