"use client";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();
  
  // ضع مسار صورتك هنا (ضع الملف في مجلد public/images/)
  const profileImagePath = "/images/profile.jpg";

  return (
    <section id="home" className="hero container fade-up">
      {/* الصورة الدائرية */}
      <div className="hero-image-wrapper">
        <div className="hero-image-container">
          <Image
            src={profileImagePath}
            alt="Faisal Al-Sawad"
            width={180}
            height={180}
            className="hero-image"
            priority
            unoptimized // لأننا في وضع export ثابت
          />
          <div className="hero-image-ring"></div>
        </div>
      </div>

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
