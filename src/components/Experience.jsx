import React from "react";
import experienceImage from "../assets/images/experienceImage.png"; // make sure extension correct

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center pt-32"
    >
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE - Bigger Image */}
        <div className="flex justify-center md:justify-start relative">

          {/* Stronger Glow */}
          <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full"></div>

          <img
            src={experienceImage}
            alt="experience"
            className="relative w-[420px] md:w-[520px] object-contain 
                       drop-shadow-[0_0_60px_rgba(59,130,246,0.8)] 
                       transition duration-500 hover:scale-105"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          <div>
            <h2 className="text-gray-400 uppercase tracking-[4px] text-sm mb-2">
              MY JOURNEY
            </h2>

            <h1 className="text-5xl font-extrabold text-blue-500 leading-tight">
              Professional Experience
            </h1>
          </div>

          {/* Stylish Experience Card */}
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 
                          backdrop-blur-xl p-8 rounded-2xl 
                          border border-gray-700 
                          shadow-[0_0_40px_rgba(59,130,246,0.2)]
                          hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]
                          transition duration-500">

            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 rounded-l-2xl"></div>

            <div className="ml-4 space-y-4">

              <h3 className="text-2xl font-bold text-white">
                Software Developer
              </h3>

              <p className="text-gray-400 text-sm">
                Align Tectalik | February 2023 - Present
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-3 mt-4 text-base">
                <li>Developed scalable full-stack web applications.</li>
                <li>Worked with React, Spring Boot & PostgreSQL.</li>
                <li>Implemented JWT authentication & REST APIs.</li>
                <li>Improved UI performance & enhanced UX.</li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
