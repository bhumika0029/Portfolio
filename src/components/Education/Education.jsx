import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] 
                 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div
          className="w-32 h-1 bg-[#00ffff] mx-auto mt-4
                     shadow-[0_0_15px_rgba(0,255,255,0.8)]"
        ></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Line */}
       {/* Vertical Line */}
<div
  className="absolute top-0 bottom-0 left-0 sm:left-1/2
             transform sm:-translate-x-1/2
             w-[3px] bg-gradient-to-b
             from-transparent via-[#00ffff] to-transparent
             shadow-[0_0_20px_rgba(0,255,255,0.8)]"
></div>


        {/* Education Cards */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl
                          bg-gray-900/80 backdrop-blur-md
                          border border-cyan-400/30
                          shadow-[0_0_25px_rgba(0,255,255,0.3)]
                          hover:shadow-[0_0_40px_rgba(0,255,255,0.55)]
                          transform transition-all duration-300 hover:scale-105
                          ${index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"} ml-8`}
            >
              {/* Header */}
              <div className="flex items-center space-x-6">
                {/* Logo */}
                <div
                  className="w-24 h-16 bg-white rounded-md overflow-hidden
                             flex items-center justify-center
                             shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[#00ffff] font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-4 text-gray-400">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
