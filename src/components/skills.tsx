import React, { useState } from "react";
import {
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaTools,
  FaJava,
  FaPython,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
};

const frontend: Skill[] = [
  { name: "Java", icon: <FaJava className="text-orange-500" />, level: 80 },
  { name: "Python", icon: <FaPython className="text-yellow-400" />, level: 30 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" />, level: 80 },
];

const backend: Skill[] = [
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" />, level: 50 },
  { name: "SQL", icon: <FaDatabase className="text-yellow-400" />, level: 50 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 70 },
];

const tools: Skill[] = [
  { name: "Docker", icon: <FaDocker className="text-blue-400" />, level: 30 },
  { name: "AWS", icon: <FaAws className="text-orange-400" />, level: 70 },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: 70 },
  { name: "Figma", icon: <FaFigma className="text-pink-400" />, level: 30 },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const getSkills = () => {
    if (activeTab === "frontend") return frontend;
    if (activeTab === "backend") return backend;
    return tools;
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10">My Skills</h2>

      {/* Tabs con iconos */}
      <div className="flex gap-6 mb-12">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105 ${
            activeTab === "frontend"
              ? "bg-purple-600 text-white shadow-lg scale-105"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaJava className="text-orange-500 text-xl" />
          Frontend
        </button>

        <button
          onClick={() => setActiveTab("backend")}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105 ${
            activeTab === "backend"
              ? "bg-purple-600 text-white shadow-lg scale-105"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaNodeJs className="text-green-400 text-xl" />
          Backend
        </button>

        <button
          onClick={() => setActiveTab("tools")}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105 ${
            activeTab === "tools"
              ? "bg-purple-600 text-white shadow-lg scale-105"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaTools className="text-yellow-400 text-xl" />
          Tools & Tech
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {getSkills().map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-md transition transform hover:scale-105"
          >
            <div className="text-3xl">{skill.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;