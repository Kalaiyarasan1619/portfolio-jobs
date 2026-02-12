import React, { useEffect, useState } from "react";
// import aboutImg from "../assets/images/AboutImage.png";
import aboutImg from "../assets/images/seenu.jpeg";

const About = () => {
  const roles = [
    {
      title: "Full Stack Developer",
      description:
        "I build scalable web applications using React, Spring Boot, PostgreSQL and modern UI frameworks. I love solving real-world problems with clean architecture.",
    },
   
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center pt-28"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-gray-400 uppercase tracking-widest text-sm">
            Hello, I'm Seenu
          </h2>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-blue-500 transition-all duration-500">
              {roles[index].title}
            </span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            {roles[index].description}
          </p>

          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-lg shadow-blue-600/30">
            Download Resume
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end relative">

          {/* Soft Glow Background */}
          <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>

          <img
            src={aboutImg}
            alt="profile"
            className="relative w-80 md:w-96 object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.6)] transition duration-500 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
