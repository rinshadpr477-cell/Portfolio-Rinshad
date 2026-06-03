import React, { useState } from "react";

function Hero() {
  const techs = ["React", "Node JS", "Express JS", "MongoDB", "Angular", "Next JS"];

  const [move, setMove] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    setMove({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center px-8 md:px-16 pt-24 text-white overflow-hidden bg-black"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-[110%] h-[110%] object-cover -z-20 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${move.x}px, ${move.y}px) scale(1.05)`,
        }}
      >
        <source src="/133150-756023074_medium.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <div
        className="relative z-10 max-w-4xl transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${-move.x * 0.3}px, ${-move.y * 0.3}px)`,
        }}
      >
        <p className="mb-4 text-sm tracking-[0.35em] uppercase text-purple-400">
          MEARN Stack Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          RINSHAD PR
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
          I build clean, responsive, and practical full-stack web applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-300">
          {techs.map((tech) => (
            <span
              key={tech}
              className="border border-white/20 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm hover:border-purple-400/40 hover:text-purple-300 hover:-translate-y-1 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-purple-300 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-white/30 bg-white/5 rounded-full text-sm backdrop-blur-sm hover:border-purple-400/40 hover:text-purple-300 hover:-translate-y-1 active:scale-95 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;