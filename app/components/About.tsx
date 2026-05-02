// app/components/About.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="container fade-up">
      <h2 className="section-title"><i className="fas fa-user-astronaut"></i> {t("about.title")}</h2>
      <div className="card">
        <p>{t("about.text")}</p>
      </div>
    </section>
  );
}