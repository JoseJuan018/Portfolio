import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "IT Support Technician",
    company: "El Corte Inglés",
    date: "2022 - 2023",
    location: "Valencia, Spain",
    description:
      "I Provided technical support and maintenance for internal systems, ensuring optimal performance and user satisfaction.",
    achievements: [
      "Computer Support Technician Internship",
      "Resolved 95% of support tickets",
      "Provided hardware and software maintenance",
    ],
    technologies: ["Windows", "Linux", "Networking", "Hardware"],
  },
  {
    role: "Junior Web Developer",
    company: "Universitat Politècnica de València",
    date: "2025 - 2026",
    location: "Valencia, Spain",
    description:
      "Worked on various web development projects, contributing to both frontend and backend tasks.",
    achievements: [
      "Created 10+ web applications",
      "Manteined websites with 99% uptime",
      "Improved website performance by 70%",
    ],
    technologies: ["WordPress", "JavaScript", "MySQL", "HTML", "CSS"],
  },
  /*{
    role: "Junior Web Developer",
    company: "WebCraft Agency",
    date: "2018 - 2019",
    location: "Remote",
    description:
      "Started my professional journey building websites for small businesses.",
    achievements: [
      "Completed 30+ client websites",
      "Learned 10+ new technologies",
      "Maintained 99% client satisfaction rate",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },*/
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="min-h-[220vh] flex flex-col justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-white px-6 py-40 relative"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Work Experience</h2>
      <p className="text-gray-300 mb-24 text-center max-w-3xl text-base md:text-lg">
        My professional journey and the experiences that shaped my expertise
      </p>

      <div className="relative w-full max-w-6xl">
        {/* Línea vertical */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600/40"></div>

        <div className="flex flex-col gap-48">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative flex items-center w-full ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Punto en la línea */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-[#0f172a] shadow-lg"></div>

              {/* Tarjeta con contenido */}
              <div
                className={`w-[90%] md:w-[60%] bg-gray-900 p-10 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-purple-500/40 ${
                  idx % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-purple-400 text-xl" />
                  <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                </div>
                <h4 className="text-purple-300 font-semibold text-lg">{exp.company}</h4>
                <p className="text-sm md:text-base text-gray-400 mb-3">
                  {exp.date} • {exp.location}
                </p>
                <p className="text-gray-300 mb-4 text-base">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-400 mb-4 text-sm md:text-base">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs md:text-sm bg-purple-700/40 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;