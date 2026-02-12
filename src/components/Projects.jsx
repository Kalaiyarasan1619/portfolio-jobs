import React from "react";
import { useNavigate } from "react-router-dom";
import project1 from "../assets/images/projectsimage.png";
import project2 from "../assets/images/projectsimage.png";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white pt-32"
    >
      <div className="max-w-7xl mx-auto px-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-gray-400 uppercase tracking-[4px] text-sm mb-3">
            Portfolio
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500">
            My Projects
          </h1>
        </div>

        <div className="grid md:grid-cols-1 gap-20 items-center">

          {/* OFFICE PROJECT */}
          <div className="flex flex-col items-center relative text-center">

            <h3 className="mb-6 text-xl font-semibold uppercase tracking-widest text-gray-300">
              Office Project
            </h3>

            {/* Glow (Click block panna koodathu) */}
            <div className="absolute w-[450px] h-[450px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            <img
              src={project1}
              alt="office project"
              className="relative z-10 w-[380px] md:w-[450px] object-contain 
                         drop-shadow-[0_0_50px_rgba(59,130,246,0.7)]
                         hover:scale-105 transition duration-500"
            />

            <button
              onClick={() => navigate("/officeProjectPage")}
              className="relative z-10 mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 
                         transition rounded-lg shadow-lg shadow-blue-600/30"
            >
              Click to View Project
            </button>
          </div>

          {/* SELF PROJECT */}
          {/* <div className="flex flex-col items-center relative text-center">

            <h3 className="mb-6 text-xl font-semibold uppercase tracking-widest text-gray-300">
              Self Project
            </h3>

            <div className="absolute w-[450px] h-[450px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            <img
              src={project2}
              alt="self project"
              className="relative z-10 w-[380px] md:w-[450px] object-contain 
                         drop-shadow-[0_0_50px_rgba(59,130,246,0.7)]
                         hover:scale-105 transition duration-500"
            />

            <button
              onClick={() => navigate("/selfProjectPage")}
              className="relative z-10 mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 
                         transition rounded-lg shadow-lg shadow-blue-600/30"
            >
              Click to View Project
            </button>
          </div> */}

        </div>

      </div>
    </section>
  );
};

export default Projects;
