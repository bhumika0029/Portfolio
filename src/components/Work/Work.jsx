import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#00ffff] mx-auto mt-4 
                        shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-cyan-400/30 bg-gray-900/80 backdrop-blur-md
                       rounded-2xl overflow-hidden cursor-pointer
                       shadow-[0_0_25px_rgba(0,255,255,0.25)]
                       hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]
                       hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl
                           group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#0f172a]
                               text-xs font-semibold text-[#00ffff]
                               border border-cyan-400/30
                               rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center
                        bg-black/90 p-4">
          <div className="bg-gray-900 rounded-xl max-w-3xl w-full
                          shadow-[0_0_40px_rgba(0,255,255,0.6)]
                          border border-cyan-400/30 relative">

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-3xl font-bold
                         text-[#00ffff] hover:scale-110 transition"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="flex justify-center p-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-xl"
                />
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold text-[#00ffff]
                                 border border-cyan-400/30 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 text-[#00ffff]
                               hover:bg-gray-700 border border-cyan-400/30
                               py-2 rounded-xl text-center font-semibold"
                  >
                    View Code
                  </a>
                  {/* {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-[#00ffff] text-black
                                 hover:bg-cyan-300 py-2 rounded-xl
                                 text-center font-semibold"
                    >
                      View Live
                    </a>
                  )} */}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
