import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github: string;
};

const projects: Project[] = [
  /*{
    title: "E-Commerce Platform",
    description:
      "An e-commerce platform built with React, Node.js, and PostgreSQL featuring real-time inventory management and payment processing.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "Full Stack",
    github: "https://github.com/tuusuario/ecommerce-platform",
  },
  
  {
    title: "AI Dashboard",
    description:
      "An intelligent dashboard for data visualization and analytics with machine learning insights and real-time data processing.",
    technologies: ["React", "TypeScript", "Python"],
    category: "Frontend",
    github: "https://github.com/tuusuario/ai-dashboard",
  },*/
];


const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
      <p className="text-gray-300 mb-10 text-center max-w-2xl">
        Here are some of my recent projects that showcase my skills and expertise
      </p>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-lg font-semibold transition transform hover:scale-105 ${
              activeCategory === cat
                ? "bg-purple-600 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {filteredProjects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-gray-900 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-purple-700/40 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-purple-400 mt-4">
              <FaGithub className="text-xl" />
              <span>View on GitHub</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;