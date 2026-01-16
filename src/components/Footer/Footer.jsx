import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050414] text-white
                       px-[12vw] md:px-[7vw] lg:px-[20vw] py-12
                       border-t border-cyan-400/30">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px]
                      bg-gradient-to-r from-transparent via-[#00ffff] to-transparent
                      shadow-[0_0_15px_rgba(0,255,255,0.8)]" />

      <div className="flex flex-col items-center text-center gap-6">

        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-[#00ffff]
                       drop-shadow-[0_0_12px_rgba(0,255,255,0.9)]">
          Bhumika Godbole
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="relative hover:text-[#00ffff] transition"
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px]
                           bg-[#00ffff] transition-all duration-300
                           hover:w-full"
              />
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/bhumika0029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400
                       hover:text-[#00ffff]
                       transition transform hover:scale-110
                       drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/bhumika-godbole-9a6a93270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400
                       hover:text-[#00ffff]
                       transition transform hover:scale-110
                       drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Divider */}
        <div className="w-32 h-[1px] bg-cyan-400/30" />

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 <span className="text-[#00ffff]">Bhumika Godbole</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
