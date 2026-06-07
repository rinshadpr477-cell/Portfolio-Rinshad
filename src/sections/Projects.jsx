import React from "react";

function Projects() {
  const projects = [
    {
      title: "LaundryNear",
      type: "Main Project",
      description:
        "Laundry service marketplace connecting customers, laundry shops, delivery agents, and admins with order tracking, role-based dashboards, authentication, and payment integration.",
      techs: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",
      ],
      live: "https://laundry-near-frontend.vercel.app",
      github: "#",
    },

    {
      title: "Book Store",
      type: "Main Project",
      description:
        "Full-stack bookstore application with book management, authentication, API integration, responsive UI, and complete CRUD functionality.",
      techs: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      live: "https://book-store-frontend-zh6w.vercel.app/",
      github: "#",
    },

    {
      title: "EKART Web App",
      type: "E-Commerce",
      description:
        "Modern e-commerce platform with product listing, search, cart management, and responsive shopping experience.",
      techs: ["React", "Redux", "Bootstrap", "REST API"],
      live: "https://ekart-lime.vercel.app/",
      github: "#",
    },

    {
      title: "Resume Builder",
      type: "Productivity Tool",
      description:
        "Interactive resume builder with live preview, customizable sections, and downloadable professional resume templates.",
      techs: ["React", "Forms", "State Management"],
      live: "https://resume-builder-frontend-l6dr.vercel.app/",
      github: "#",
    },

    {
      title: "Book Management System",
      type: "CRUD System",
      description:
        "Book management application supporting create, read, update, and delete operations with API integration and responsive design.",
      techs: ["React", "Node.js", "MongoDB", "REST API"],
      live: "https://book-management-system-react.vercel.app/",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="px-8 md:px-16 py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Projects
        </p>

        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
              Selected Projects Built with Real-World Logic
            </h2>

            <p className="mt-5 text-gray-400 max-w-2xl leading-relaxed">
              Full-stack and frontend applications focused on authentication,
              CRUD operations, REST APIs, role-based access control, payment
              integration, and responsive user experiences.
            </p>
          </div>

          <div className="rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            Portfolio Work
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-purple-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300 group-hover:border-purple-400/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-purple-300 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:border-purple-400/40 hover:text-purple-300 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;