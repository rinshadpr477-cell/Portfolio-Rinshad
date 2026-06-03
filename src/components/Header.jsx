import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-4 bg-black/70 backdrop-blur-md border-b border-white/10 z-50">

      <div className="text-lg md:text-xl font-semibold tracking-widest text-white">
        RINSHAD PR
      </div>

      <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        <a className="hover:text-purple-400 transition" href="#home">HOME</a>
        <a className="hover:text-purple-400 transition" href="#about">ABOUT</a>
        <a className="hover:text-purple-400 transition" href="#skills">SKILLS</a>
        <a className="hover:text-purple-400 transition" href="#projects">PROJECTS</a>
        <a className="hover:text-purple-400 transition" href="#journey">EDUCATION</a>
        <a className="hover:text-purple-400 transition" href="#startups">STARTUPS</a>
        <a className="hover:text-purple-400 transition" href="#contact">CONTACT</a>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl text-white"
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-full right-4 mt-3 w-56 bg-black/90 backdrop-blur-xl shadow-xl rounded-2xl border border-white/10 flex flex-col gap-4 py-5 px-6 md:hidden text-gray-300">

          <a onClick={() => setMenuOpen(false)} className="hover:text-purple-400" href="#home">HOME</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-purple-400" href="#about">ABOUT</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-purple-400" href="#skills">SKILLS</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-purple-400" href="#projects">PROJECTS</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-purple-400" href="#journey">JOURNEY</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-purple-400" href="#startups">STARTUPS</a>
          <a onClick={() => setMenuOpen(false)} className="hover:text-purple-400" href="#contact">CONTACT</a>

        </div>
      )}
    </header>
  );
}

export default Header;