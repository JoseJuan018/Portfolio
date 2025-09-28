import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-[#111827] text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="max-w-3xl text-gray-300 mb-12 text-center">
        I'm a passionate full-stack developer with 5+ years of experience crafting secure and scalable digital solutions. What began as curiosity has grown into a deep commitment to mastering modern web technologies and cybersecurity practices.
      </p>

      {/* Contadores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <div>
          <h3 className="text-4xl font-extrabold text-purple-400">
            {inView && <CountUp end={5} duration={2} />}+
          </h3>
          <p className="text-gray-400">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-purple-400">
            {inView && <CountUp end={50} duration={2} />}+
          </h3>
          <p className="text-gray-400">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-purple-400">
            {inView && <CountUp end={30} duration={2} />}+
          </h3>
          <p className="text-gray-400">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-purple-400">
            {inView && <CountUp end={15} duration={2} />}+
          </h3>
          <p className="text-gray-400">Technologies</p>
        </div>
      </div>
    </section>
  );
};

export default About;