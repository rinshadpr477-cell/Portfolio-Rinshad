import React from "react";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      desc: "Building responsive, reusable, and user-friendly interfaces.",
      skills: ["React", "Next.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React Router", "Redux"],
    },
    {
      title: "Backend Development",
      desc: "Creating APIs, authentication systems, and server-side logic.",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware", "Cookies", "Sessions", "Error Handling", "NPM"],
    },
    {
      title: "Database & Tools",
      desc: "Managing data, testing APIs, version control, and deployment.",
      skills: ["MongoDB", "Mongoose", "RDBMS", "Aggregation", "Git", "GitHub", "Postman", "Vercel", "VS Code"],
    },
  ];

  const highlights = [
    "Full-stack CRUD Applications",
    "API Integration with Axios",
    "Authentication & Authorization",
    "Responsive Web Design",
    "MongoDB Data Modelling",
    "Clean Component Architecture",
  ];

  return (
    <section id="skills" className="px-8 md:px-16 py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Skills
        </p>

        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
            Skills As A Full-Stack Developer
          </h2>

          <div className="rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            MEARN Stack
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300 font-bold">
                {group.title.charAt(0)}
              </div>

              <h3 className="font-semibold text-xl">{group.title}</h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {group.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs border border-white/15 rounded-full text-gray-300 group-hover:border-purple-400/40 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">What I can build</h3>

          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-300"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;