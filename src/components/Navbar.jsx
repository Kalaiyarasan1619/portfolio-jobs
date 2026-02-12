import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-blue-500">K</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-blue-400 transition duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-blue-400 transition duration-300"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <button onClick={() => navigate("/contact")}>Contact me</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
