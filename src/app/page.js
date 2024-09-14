"use client";
import { useRef } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Link from "./components/Link"; // Assuming you have the Link component

export default function Home() {
  // Define refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <>
     <Header
        heroRef={heroRef}
        aboutRef={aboutRef}
        featuresRef={featuresRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      
      <Hero ref={heroRef} />
      <hr className="mb-5 border-zinc-300" />
      <AboutMe ref={aboutRef} />
      <hr className="mb-5 border-zinc-300" />
      <Features ref={featuresRef} />
      <hr className="mb-5 border-zinc-300" />
      <Projects ref={projectsRef} />
      <hr className="mb-5 border-zinc-300" />
      <Contact ref={contactRef} />
      <hr className="mb-5 border-zinc-300" />
      <Footer />
      
      {/* Navigation */}
   

   
    </>
  );
}
