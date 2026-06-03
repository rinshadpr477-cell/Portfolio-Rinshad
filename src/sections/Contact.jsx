import React from "react";

function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Contact
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold">
          Let’s build something valuable
        </h2>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Open to internships, freelance projects, and junior MEARN stack developer roles.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-4 text-left">
          <a
            href="mailto:rinshadpr477@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-purple-400/40 transition"
          >
            <p className="text-sm text-purple-400">Email</p>
            <p className="mt-2 text-gray-300">rinshadpr477@gmail.com</p>
          </a>

          <a
            href="tel:+918593923135"
            className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-purple-400/40 transition"
          >
            <p className="text-sm text-purple-400">Phone</p>
            <p className="mt-2 text-gray-300">+91 8593923135</p>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/rinshadpr477-cell/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm hover:border-purple-400/40 hover:text-purple-300 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/rinshadpr477-cell"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm hover:border-purple-400/40 hover:text-purple-300 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:rinshadpr477@gmail.com?subject=Hiring Inquiry - Full Stack Developer&body=Hi Rinshad,%0A%0AI saw your portfolio and would like to discuss an opportunity with you.%0A%0APosition:%0ACompany:%0A%0ALet me know your availability.%0A%0ARegards,"
            className="px-7 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-purple-300 transition"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;