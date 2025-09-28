import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 relative overflow-hidden"
    >
      <div className="max-w-3xl mt-20 z-10 w-full">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-purple-400">Jose Juan</span>
        </h2>

        {/* Texto animado */}
        <h3 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-6 h-12">
          <Typewriter
            words={[
              "Junior Full Stack Developer",
              "Frontend Specialist",
              "Backend Developer",
              "Creative Problem-Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
          Passionate about creating innovative digital solutions that bridge the
          gap between cutting-edge technology and exceptional user experiences.
        </p>

        {/* Botones alineados izquierda/derecha */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {/* Botón contacto */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-md"
          >
            <FaEnvelope className="text-lg" />
            Get In Touch
          </a>

          {/* Botón CV */}
          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="relative px-6 py-3 rounded-lg overflow-hidden text-white font-semibold group shadow-md"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-[length:200%_200%] animate-gradient-x"></span>
            <span className="relative z-10 group-hover:scale-105 transition-transform">
              Download CV
            </span>
          </a>
        </div>
         

        {/* Redes sociales */}
        <div className="flex gap-6 mt-4 text-2xl justify-center">
          <a
            href="https://github.com/JoseJuan018"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jose-juan-arenas-88b8a8365"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;