import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/photo.png.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">
            Bhumika Godbole 
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#00ffff]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Java Developer',
                "MERN Stack Developer",
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#00ffff]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
         I am a Full Stack Developer with strong expertise in Java and in building responsive, scalable web applications using modern technologies. Proficient in React, Redux, Tailwind CSS, Java, Spring Boot, Node.js, and Express.js, with hands-on experience in MySQL, PostgreSQL, and MongoDB. Passionate about writing clean, maintainable code, solving real-world problems, and delivering high-quality, user-focused digital solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/10gJmtrF4HLqwBD2Y279CPDvFkPAU1Ils/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: '#00ffff',
              boxShadow:
                '0 0 10px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.6)',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] 
                       border-4 border-cyan-400 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Bhumika Godbole"
              className="w-full h-full rounded-full object-cover"
              style={{
                boxShadow:
                  '0 0 20px rgba(0,255,255,0.7), 0 0 40px rgba(0,255,255,0.6)',
              }}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
