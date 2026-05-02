// app/components/Hero.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="hero container fade-up">
      <div className="hero-badge">
        <i className="fas fa-shield-haltered"></i> <span>{t("hero.badge")}</span>
      </div>
      <h1>Faisal Al-Sawad</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>{t("hero.tagline")}</p>
      <div className="hero-buttons">
        <a href="#cv-section" className="btn-primary">{t("hero.cvbtn")}</a>
        <a href="#contact" className="btn-secondary">{t("hero.contactbtn")}</a>
      </div>
    </section>
  );
}