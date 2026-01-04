import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
      ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#00ffff]">&lt;</span>
          <span className="text-white">Bhumika</span>
          <span className="text-[#00ffff]">/</span>
          <span className="text-white">Godbole</span>
          <span className="text-[#00ffff]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`hover:text-[#00ffff] transition ${
                  activeSection === item.id ? "text-[#00ffff]" : ""
                }`}
              >
                {item.label}
              </button>

              {/* Active underline */}
              {activeSection === item.id && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#00ffff] shadow-[0_0_8px_rgba(0,255,255,0.8)]"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/bhumika0029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00ffff] transition drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhumika-godbole-9a6a93270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00ffff] transition drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#00ffff] cursor-pointer drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#00ffff] cursor-pointer drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5
          bg-[#050414]/80 backdrop-blur-lg rounded-lg shadow-[0_0_25px_rgba(0,255,255,0.4)] md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-[#00ffff] ${
                    activeSection === item.id ? "text-[#00ffff]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4 pt-2">
              <FaGithub className="text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" size={22} />
              <FaLinkedin className="text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" size={22} />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
