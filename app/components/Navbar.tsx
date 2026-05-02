// app/components/Navbar.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = ["home", "about", "skills", "projects", "cv", "contact"];

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <span className="logo">
          <i className="fas fa-wifi"></i> Faisal<span className="accent-text"> Alwqidi</span>
        </span>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item === "projects" ? "portfolio" : item === "cv" ? "cv-section" : item}`}>
              {t(`nav.${item}`)}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle">
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
            <span>{theme === "dark" ? (language === "en" ? "Light" : "فاتح") : (language === "en" ? "Dark" : "داكن")}</span>
          </button>
          <button onClick={toggleLanguage} className="lang-toggle">
            <i className="fas fa-globe"></i> <span>{language === "en" ? "العربية" : "English"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}