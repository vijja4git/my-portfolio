import React from 'react';
import { Link } from 'react-scroll';

import About from './comp/About';
import Skills from './comp/Skills';
import Education from './comp/Education';
import Experience from './comp/Experience';
import Certifications from './comp/Certifications';
import Projects from './comp/Projects';
import Footer from './comp/Footer';

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      
      {/* PAGE 1: Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-12 px-4">
        <h1 className="text-6xl font-extrabold text-blue-500">Cherish Vijjagiri</h1>

        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <Link to="about" smooth duration={700} className="cursor-pointer hover:text-blue-400">About</Link>
          <Link to="skills" smooth duration={700} className="cursor-pointer hover:text-blue-400">Skills</Link>
          <Link to="education" smooth duration={700} className="cursor-pointer hover:text-blue-400">Education</Link>
          <Link to="experience" smooth duration={700} className="cursor-pointer hover:text-blue-400">Experience</Link>
          <Link to="certifications" smooth duration={700} className="cursor-pointer hover:text-blue-400">Certifications</Link>
          <Link to="projects" smooth duration={700} className="cursor-pointer hover:text-blue-400">Projects</Link>
        </div>

        <p className="mt-20 text-sm text-gray-500 animate-bounce">Scroll to explore ↓</p>
      </section>

      {/* PAGE 2: All Content Sections */}
      <main className="space-y-40 px-6 md:px-16 lg:px-32">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}