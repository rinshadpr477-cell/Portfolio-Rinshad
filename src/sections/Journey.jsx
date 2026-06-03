import React from "react";

function Journey() {
  const items = [
    {
      title: "B.Tech in Computer Science Engineering",
      date: "2021 – 2025",
      type: "Education",
      points: [
        "Built a strong foundation in programming, databases, and software engineering.",
        "Learned problem-solving, web fundamentals, and application development concepts.",
      ],
    },
    {
      title: "Full Stack MEARN Development",
      date: "2025 – Present",
      type: "Training",
      points: [
        "Hands-on learning in MongoDB, Express.js, Angular, React, Node.js, and Next.js.",
        "Practicing REST APIs, authentication, routing, CRUD systems, and deployment.",
      ],
    },
    {
      title: "Project-Based Development",
      date: "Practical Experience",
      type: "Projects",
      points: [
        "Built responsive React applications with reusable components and clean UI.",
        "Created CRUD apps, API integrations, authentication flows, and database-driven features.",
      ],
    },
  ];

  return (
    <section id="journey" className="px-8 md:px-16 py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Experience & Education
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold max-w-3xl">
          Building strong full-stack skills through learning and real projects
        </h2>

        <div className="mt-12 relative border-l border-white/10 pl-6 space-y-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-purple-400/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.12)] transition-all duration-300"
            >
              <div className="absolute -left-[34px] top-7 h-4 w-4 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.9)] group-hover:scale-125 transition-all duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-sm text-purple-300">0{index + 1}</p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  {item.type}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-400">{item.date}</p>

              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-gray-300 leading-relaxed flex gap-3"
                  >
                    <span className="text-purple-400 group-hover:scale-110 transition">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 h-[1px] w-full bg-white/10 group-hover:bg-purple-400/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;