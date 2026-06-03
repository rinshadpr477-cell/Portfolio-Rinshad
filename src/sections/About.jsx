import React from "react";

function About() {
  return (
    <section id="about" className="px-8 md:px-16 py-24 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          About Me
        </p>

        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Full-stack developer focused on building clean, scalable web applications
          </h2>

          <div className="rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            MEARN Developer
          </div>
        </div>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
          I build practical, real-world applications using React, Node.js, and MongoDB.
          My focus is on clean UI, structured backend logic, authentication systems,
          and building products that are actually usable and scalable.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend",
              text: "Building responsive UIs using React, Tailwind CSS, and modern design principles.",
            },
            {
              title: "Backend",
              text: "Developing REST APIs, authentication systems, and scalable server-side logic.",
            },
            {
              title: "Database",
              text: "Designing MongoDB schemas, handling CRUD operations, and managing data efficiently.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300 font-bold">
                {item.title.charAt(0)}
              </div>

              <h3 className="font-semibold text-xl">{item.title}</h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {item.text}
              </p>

              <div className="mt-6 h-[1px] w-full bg-white/10 group-hover:bg-purple-400/40 transition" />
            </div>
          ))}
        </div>

        {/* bottom highlight */}
        <div className="mt-16 border border-white/10 rounded-3xl p-6 bg-white/5">
          <p className="text-sm text-purple-400 uppercase tracking-widest">
            Focus
          </p>

          <p className="mt-3 text-gray-300">
            I focus on building real applications with clean architecture, scalable backend,
            and smooth user experience — not just UI screens.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;