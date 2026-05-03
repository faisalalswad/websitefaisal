"use client";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = ["home", "about", "skills", "projects", "cv", "blog", "contact"];

  const getHref = (item: string) => {
    switch (item) {
      case "blog":
        return "/blog/index.html";   // ✅ تغيير الرابط إلى ملف HTML الثابت
      case "projects":
        return "/#portfolio";
      case "cv":
        return "/#cv-section";
      default:
        return `/#${item}`;
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <span className="logo">
          <i className="fas fa-wifi"></i> Faisal<span className="accent-text"> Alwqidi</span>
        </span>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={getHref(item)}>
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