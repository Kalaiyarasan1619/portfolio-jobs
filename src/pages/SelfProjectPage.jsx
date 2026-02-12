import React from "react";
import { useNavigate } from "react-router-dom";
import portfolio from "../assets/images/portfolio.png";
import movie from "../assets/images/movie.png";
import food from "../assets/images/food.png";

const SelfProjectPage = () => {
  const projects = [
    {
      title: "3D Developer Portfolio",
      description:
        "An interactive 3D personal portfolio built using React.js and Three.js, featuring immersive animations, smooth transitions, and real-time 3D rendering. The application showcases projects, skills, and experience in a visually engaging and dynamic environment.",
      usage: [
        "Interactive 3D models rendered using Three.js",
        "Smooth animations and camera transitions",
        "Project showcase with dynamic routing",
        "Responsive design across devices",
        "Optimized rendering performance for better UX",
      ],
      tech: "React.js • Three.js • Tailwind CSS • React Router • WebGL",
      image: portfolio,
      url: "https://my3dportfoliok.netlify.app/",
    },
    {
      title: "Full Stack Movie Booking Application",
      description:
        "A full-stack movie ticket booking platform developed using React.js for the frontend and Java Spring Boot for the backend, with PostgreSQL as the database. The system supports secure user authentication, real-time seat booking, and Stripe payment integration for seamless online transactions.",
      usage: [
        "User registration and secure login with JWT authentication",
        "Browse movies with show timings and seat availability",
        "Real-time seat selection and booking management",
        "Integrated Stripe payment gateway for secure online payments",
        "Admin panel for movie, show, and pricing management",
      ],
      tech: "React.js • Java Spring Boot • PostgreSQL • JWT • Stripe API • REST APIs",
      image: movie,
      url: "https://movie-duplicates.vercel.app/",
    },
    {
      title: "Full Stack Food Ordering Application",
      description:
        "A full-stack food ordering platform developed using React.js for the frontend and Java Spring Boot for the backend, with PostgreSQL as the database. The system enables users to browse restaurants, add items to cart, place orders, and complete secure online payments through Stripe integration.",
      usage: [
        "User registration and secure login using JWT authentication",
        "Browse food items with category-based filtering",
        "Add to cart and manage quantity dynamically",
        "Secure online payment integration using Stripe API",
        "Order history tracking and real-time order status updates",
        "Admin panel for restaurant, menu, and pricing management",
      ],
      tech: "React.js • Java Spring Boot • PostgreSQL • JWT • Stripe API • REST APIs",
      image: food,
      url: "https://foodorder-frontend.vercel.app/",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white pt-32 pb-20">
      <div className="max-w-[90%] mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-20">
          <h2 className="text-gray-400 uppercase tracking-[4px] text-sm mb-3">
            Project Details
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500">
            Self Projects
          </h1>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/90
                       backdrop-blur-2xl rounded-3xl
                       border border-gray-700
                       shadow-[0_0_80px_rgba(59,130,246,0.2)]
                       p-16 mb-20"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[140px] rounded-3xl pointer-events-none"></div>

            <div className={`relative grid lg:grid-cols-2 gap-20 items-center`}>
              {/* Alternate Layout */}
              {index % 2 === 0 ? (
                <>
                  {/* LEFT IMAGE */}
                  <div className="flex justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-lg object-contain
                                 drop-shadow-[0_0_70px_rgba(59,130,246,0.6)]
                                 hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* RIGHT DETAILS */}
                  <div className="space-y-8">
                    <ProjectDetails project={project} />
                  </div>
                </>
              ) : (
                <>
                  {/* LEFT DETAILS */}
                  <div className="space-y-8">
                    <ProjectDetails project={project} />
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-lg object-contain
                                 drop-shadow-[0_0_70px_rgba(59,130,246,0.6)]
                                 hover:scale-105 transition duration-500"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectDetails = ({ project }) => {
  return (
    <>
      <div>
        <h3 className="text-4xl font-bold text-white mb-3">{project.title}</h3>
        <div className="w-24 h-1 bg-blue-500 rounded"></div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-blue-400 mb-2">
          Description
        </h4>
        <p className="text-gray-300 leading-relaxed text-lg">
          {project.description}
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-blue-400 mb-2">Usage</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
          {project.usage.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-blue-400 mb-2">Tech Stack</h4>
        <p className="text-gray-300 text-lg">{project.tech}</p>
      </div>

      {/* View Button */}
      <button
        onClick={() => window.open(project.url, "_blank")}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700
                   transition rounded-lg shadow-lg shadow-blue-600/30"
      >
        View Project
      </button>
    </>
  );
};

export default SelfProjectPage;
