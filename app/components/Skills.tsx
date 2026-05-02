// app/components/Skills.tsx
"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { skillsData } from "../i18n/translations";

export default function Skills() {
  const { language } = useLanguage();
  const skills = skillsData[language];
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector(".progress-fill") as HTMLElement;
            const percent = entry.target.getAttribute("data-skill");
            if (fill && percent) fill.style.width = percent + "%";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    skillRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [skills]);

  return (
    <section id="skills" className="container fade-up">
      <h2 className="section-title"><i className="fas fa-microchip"></i> Core Competencies</h2>
      <div className="card">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="skill-item"
            data-skill={skill.percent}
            ref={(el) => { skillRefs.current[idx] = el; }}
          >
            <div className="skill-header">
              <i className={`fas ${skill.icon}`}></i> {skill.name}
            </div>
            <div className="progress-bar-bg">
              <div className="progress-fill" style={{ width: "0%" }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}