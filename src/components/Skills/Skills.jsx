// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans 
               bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#00ffff] mx-auto mt-2 
                      shadow-[0_0_12px_rgba(0,255,255,0.8)]"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through projects and experience
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-3 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/80 backdrop-blur-md px-6 sm:px-10 py-8 mb-10
                     w-full sm:w-[48%] rounded-2xl border border-cyan-400/30
                     shadow-[0_0_25px_rgba(0,255,255,0.25)]
                     hover:shadow-[0_0_35px_rgba(0,255,255,0.45)]
                     transition duration-300"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#00ffff] mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={800}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center justify-center gap-2
                             border border-gray-700 rounded-3xl py-2 px-3
                             transition duration-300
                             hover:border-[#00ffff]
                             hover:shadow-[0_0_12px_rgba(0,255,255,0.7)]"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8
                               group-hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]"
                  />
                  <span className="text-xs sm:text-sm text-gray-300
                                   group-hover:text-[#00ffff]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
