import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const links = ["Home", "About", "Skills", "Projects", "Experience"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition font-medium"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Botón Contact */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold text-white shadow-lg hover:shadow-purple-500/40 transition"
        >
          Contact
        </motion.a>
      </div>
    </header>
  );
};

export default Header;