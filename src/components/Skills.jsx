import React from "react";
import {
  FaJava,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Vue JS", icon: <FaVuejs /> },
    // { name: "React Native", icon: <FaReact /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    // { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    // { name: "Bootstrap", icon: <FaBootstrap /> },
    // { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center pt-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-gray-400 uppercase tracking-[5px] text-sm mb-4">
            Technical Expertise
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500">
            My Skills
          </h1>
        </div>

        {/* 6 Column Grid - Perfect Center */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative w-40 h-40
                           bg-gradient-to-br from-gray-800/70 to-gray-900/90
                           backdrop-blur-xl rounded-3xl
                           border border-gray-700
                           shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                           hover:shadow-[0_20px_60px_rgba(59,130,246,0.6)]
                           transition duration-500
                           transform hover:-translate-y-4 hover:scale-105
                           flex flex-col items-center justify-center"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-blue-600/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div className="relative text-4xl mb-3 text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]">
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="relative text-sm font-semibold tracking-wide text-center px-2">
                  {skill.name}
                </h3>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
