import React from "react";
import lksImg from "../assets/images/lks.png"; 
import vbjImg from "../assets/images/vbj.png"; 
import kamadhenuImg from "../assets/images/kamadhenu.jpg"; 

const MyWorkingStores = () => {

  const stores = [
    {
      name: "LKS Jewellery",
      description: "Worked with multiple branches handling billing & sales dashboard management.",
      image: lksImg,
    },
    {
      name: "VBJ Jewellers",
      description: "Managed gold rate pricing system and real-time billing operations.",
      image: vbjImg,
    },
    {
      name: "Kamadhenu Jewellers",
      description: "Implemented jewellery sales estimation and reporting modules.",
      image: kamadhenuImg,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-gray-400 uppercase tracking-[4px] text-sm mb-3">
            Professional Experience
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500">
            My Working Stores
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

          {stores.map((store, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/90
                         backdrop-blur-xl rounded-3xl
                         border border-gray-700
                         shadow-[0_0_40px_rgba(59,130,246,0.2)]
                         hover:shadow-[0_0_70px_rgba(59,130,246,0.4)]
                         transition duration-500
                         transform hover:-translate-y-4 hover:scale-105
                         p-8 text-center"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-3xl opacity-0 hover:opacity-100 transition duration-500 pointer-events-none"></div>

              <div className="relative">

                {/* Store Image */}
                <div className="flex justify-center mb-6">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-40 h-40 object-contain
                               drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                  />
                </div>

                {/* Store Name */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {store.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed">
                  {store.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default MyWorkingStores;
