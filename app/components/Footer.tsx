// app/components/Footer.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <p>{t("footer.text")}<br /><i className="fas fa-shield-haltered"></i> {t("footer.slogan")}</p>
    </footer>
  );
}