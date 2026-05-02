"use client";
import { useLanguage } from "../context/LanguageContext";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t, language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_zkydnkc",    // Service ID
        "template_19wpiqf",   // Template ID - تأكد من أنه صحيح
        formRef.current,
        "EltS3meREvjSVac6Z"   // Public Key
      )
      .then(() => {
        alert(language === "en" ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(language === "en" ? "Failed to send. Try again." : "فشل الإرسال. حاول مرة أخرى.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="container fade-up">
      <h2 className="section-title"><i className="fas fa-address-card"></i> {t("contact.title")}</h2>
      <div className="card contact-grid">
        <div>
          <h3><i className="fas fa-paper-plane"></i> {t("contact.formtitle")}</h3>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" name="from_name" placeholder={t("contact.name")} required />
            </div>
            <div className="form-group">
              <input type="email" name="from_email" placeholder={t("contact.email")} required />
            </div>
            <div className="form-group">
              <textarea rows={3} name="message" placeholder={t("contact.message")} required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              <i className="fas fa-paper-plane"></i> {loading ? (language === "en" ? "Sending..." : "جاري الإرسال...") : t("contact.send")}
            </button>
          </form>
        </div>
        <div>
          <h3><i className="fas fa-link"></i> {t("contact.connect")}</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-telegram"></i></a>
          </div>
          <div className="contact-flex"><i className="fas fa-envelope fa-fw"></i> faisal.alsawad@neteng.me</div>
          <div className="contact-flex"><i className="fas fa-phone-alt fa-fw"></i> +967 77 123 4567</div>
          <div className="contact-flex"><i className="fas fa-map-marker-alt fa-fw"></i> {t("contact.location")}</div>
          <p className="available-text">{t("contact.available")}</p>
        </div>
      </div>
    </section>
  );
}