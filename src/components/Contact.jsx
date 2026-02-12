import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20 flex items-center justify-center">

      <div className="max-w-4xl w-full px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-gray-400 uppercase tracking-[4px] text-sm mb-3">
            Get In Touch
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500">
            Contact Me
          </h1>
        </div>

        {/* Glass Card */}
        <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60
                        backdrop-blur-2xl rounded-3xl
                        border border-gray-800
                        shadow-[0_0_80px_rgba(59,130,246,0.15)]
                        p-12">

          {/* Glow */}
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-3xl pointer-events-none"></div>

          <div className="relative space-y-10 text-lg">

            {/* Phone */}
            <div
              onClick={() => window.open("tel:+919514821902")}
              className="flex items-center gap-6 cursor-pointer hover:text-blue-400 transition"
            >
              <FaPhone className="text-blue-500 text-2xl" />
              <span>+91 95148 21902</span>
            </div>

            {/* Email */}
            <div
              onClick={() => window.open("mailto:m.kalaiyarasangi1619@gmail.com")}
              className="flex items-center gap-6 cursor-pointer hover:text-blue-400 transition"
            >
              <FaEnvelope className="text-blue-500 text-2xl" />
              <span>m.kalaiyarasangi1619@gmail.com</span>
            </div>

            {/* LinkedIn */}
            <div
              onClick={() => window.open("https://www.linkedin.com/in/kalai-yarasan1603/", "_blank")}
              className="flex items-center gap-6 cursor-pointer hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-blue-500 text-2xl" />
              <span>LinkedIn Profile</span>
            </div>

            {/* Instagram */}
            <div
              onClick={() => window.open("https://www.instagram.com/my_favourites16?igsh=M3pkcXlubXlranhy", "_blank")}
              className="flex items-center gap-6 cursor-pointer hover:text-blue-400 transition"
            >
              <FaInstagram className="text-blue-500 text-2xl" />
              <span>Instagram</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;
