"use client"; // <-- هذا هو الإصلاح الرئيسي

import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import CVSection from "./components/CVSection";
import Contact from "./components/Contact";

export default function Home() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <CVSection />
      <Contact />
    </>
  );
}