import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-white px-6 py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-300 mb-20 text-center max-w-2xl text-lg md:text-xl"
      >
        Ready to start your next project? Let’s discuss how we can work together
        to bring your ideas to life.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Lado izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Let’s Connect</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3 hover:text-purple-400 transition">
              <FaEnvelope className="text-purple-400" />
              <a
                href="mailto:josaremar.daw@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Jose,%0A%0AI%20just%20visited%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch..."
                className="hover:underline"
              >
                josarmar.daw@gmail.com
              </a>
            </li>
            {/*
            <li className="flex items-center gap-3 hover:text-purple-400 transition">
              <FaPhone className="text-purple-400" />
              <a href="tel:+34657668654" className="hover:underline">
                +34 657 66 86 54
              </a>
            </li>
            */}
            <li className="flex items-center gap-3 hover:text-purple-400 transition">
              <FaMapMarkerAlt className="text-purple-400" />
              <a
                href="https://www.google.com/maps/place/Valencia,+Spain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Valencia, Spain
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-purple-400 transition">
              <FaLinkedin className="text-purple-400" />
              <a
                href="https://linkedin.com/in/jose-juan-arenas-88b8a8365"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Lado derecho: formulario */}
        <form
        action="https://formspree.io/f/mgvnoblz" // ← tu endpoint aquí
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md"
        >
          Send Message
        </button>
      </form>
            </div>
          </section>
        );
      };

export default Contact;