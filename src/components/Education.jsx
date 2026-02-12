import React, { useEffect, useState } from "react";

const Education = () => {

  const educationData = [
    {
      title: "10th Standard",
      institution: "Shri Natesan Vidyasala ",
      marks: "60%",
      year: "2019"
    },
    {
      title: "12th Standard",
      institution: "Shri Natesan Vidyasala ",
      marks: "71%",
      year: "2021"
    },
    {
      title: "Computer Application",
      institution: "Vales Institute of Science and Technology",
      marks: "CGPA: 7.0",
      year: "2024"
    },
    // {
    //   title: "Java Full Stack Development",
    //   institution: "Qspiders",
    //   marks: "Certified Course Completion",
    //   year: "2023"
    // }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % educationData.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center text-white pt-28"
    >
      <div className="relative w-full max-w-4xl px-6">

        {/* Glow */}
        <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full"></div>

        {/* Card */}
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 
                        backdrop-blur-xl p-12 rounded-3xl 
                        border border-gray-700 
                        shadow-[0_0_40px_rgba(59,130,246,0.2)]
                        transition duration-500">

          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-gray-400 uppercase tracking-[4px] text-sm mb-3">
              My Education
            </h2>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
              {educationData[index].title}
            </h1>
          </div>

          {/* LEFT-RIGHT CONTENT */}
          <div className="space-y-6 text-lg">

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="font-semibold text-white">Institution</span>
              <span className="text-gray-300 text-right">
                {educationData[index].institution}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="font-semibold text-white">
                Marks / Certification
              </span>
              <span className="text-gray-300 text-right">
                {educationData[index].marks}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-white">Year</span>
              <span className="text-gray-300 text-right">
                {educationData[index].year}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
