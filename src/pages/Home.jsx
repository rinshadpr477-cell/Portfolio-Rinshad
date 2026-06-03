import React from "react";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Journey from "../sections/Journey";
import Contact from "../sections/Contact";


function Home() {
  return (
    <div className="min-h-screen bg-black text-white animate-fadeIn">
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      
    </div>
  );
}

export default Home;