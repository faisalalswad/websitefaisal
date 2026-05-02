// app/components/Portfolio.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";
import { projectsData } from "../i18n/translations";

export default function Portfolio() {
  const { language, t } = useLanguage();
  const projects = projectsData[language];

  return (
    <section id="portfolio" className="container fade-up">
      <h2 className="section-title"><i className="fas fa-code-branch"></i> {t("portfolio.title")}</h2>
      <div className="portfolio-grid">
        {projects.map((proj, i) => (
          <div key={i} className="portfolio-card">
            <i className={`fas ${proj.icon}`}></i>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            {proj.tags.map((tag, j) => (
              <span key={j} className="skill-badge">{tag}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}