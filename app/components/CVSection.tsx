"use client";

import { useLanguage } from "../context/LanguageContext";
import { useRef } from "react";

export default function CVSection() {
  const { language, t } = useLanguage();
  const cvRef = useRef<HTMLDivElement>(null);
  const isAr = language === "ar";

  const generateCVHTML = () => {
    const profileText = isAr
      ? "مهندس شبكات مهتم بتصميم وإدارة وتحسين أنظمة الشبكات. معرفة قوية بالتقنيات الحديثة، ملتزم بالتعلم المستمر. حلّال مشكلات، لاعب فريق، وقادر على العمل تحت الضغط."
      : "Network engineer passionate about designing, managing, and optimizing network systems. Solid knowledge of modern technologies and commitment to continuous learning. Problem-solver, team collaborator, and effective under pressure.";

    const skillsList = isAr
      ? ["إدارة الشبكات وتكوينها", "إعداد وصيانة الشبكات", "أنظمة التشغيل (ويندوز، لينكس)", "أمن الشبكات (جدران نارية، ACLs)", "استكشاف الأعطال وحلها", "توجيه وتبديل (مستوى CCNA)"]
      : ["Network Administration & Configuration", "Network Setup & Maintenance", "Operating Systems (Windows, Linux)", "Network Security (Firewalls, ACLs)", "Technical Troubleshooting", "Routing & Switching (CCNA level)"];

    const languagesList = isAr
      ? ["العربية (لغة أم)", "الإنجليزية (متوسط B2)"]
      : ["Arabic (Fluent / Native)", "English (Intermediate – B2)"];

    const eduText = isAr
      ? "درجة البكالوريوس في تكنولوجيا المعلومات – الشبكات - جامعة العلوم والتكنولوجيا، اليمن. المقررات: تصميم الشبكات، الأمن السيبراني، البنية التحتية السحابية."
      : "Bachelor of Information Technology – Networks - University of Science & Technology, Yemen. Coursework: Network Design, Cybersecurity, Cloud Infrastructure.";

    const exp1 = isAr
      ? "مهندس دعم شبكات | العمليات التقنية (2022 - حتى الآن): إدارة شبكات المؤسسات، تكوين الأجهزة، مراقبة الأداء، تشخيص المشكلات المعقدة، تطبيق التصحيحات الأمنية. تحسين وقت التشغيل بنسبة 15%."
      : "Network Support Engineer | Technical Operations (2022 – Present): Managing enterprise networks, device configurations, performance monitoring, diagnosing complex issues, implementing security patches. Improved uptime 15%.";

    const exp2 = isAr
      ? "فني شبكات مبتدئ (2021-2022): مساعدة في البنية التحتية للكابلات، تكوين المحولات، حل أكثر من 150 تذكرة دعم. التعاون مع كبار المهندسين لنشر VLANs وقواعد الجدران النارية الأساسية."
      : "Junior Network Technician (2021-2022): Assisted cable infrastructure, switch configuration, resolved 150+ tickets. Collaborated on VLANs and firewall rules.";

    const contactRow = `${isAr ? "البريد" : "Email"}: faisal.alsawad@neteng.me  |  ${isAr ? "الهاتف" : "Phone"}: +967 77X XXX XXX  |  ${isAr ? "الموقع" : "Location"}: ${isAr ? "صنعاء، اليمن" : "Sana'a, Yemen"}`;

    return `
      <div class="cv-header">
        <div><i class="fas fa-id-card" style="font-size: 1.8rem; color:var(--accent);"></i> <strong style="font-size:1.5rem;">${isAr ? "فيصل السعود – مهندس شبكات" : "Faisal Al-Sawad – Network Engineer"}</strong></div>
        <button class="download-btn" id="downloadCVBtnInner"><i class="fas fa-file-pdf"></i> ${isAr ? "تحميل السيرة PDF" : "Download CV as PDF"}</button>
      </div>
      <div class="cv-grid">
        <div>
          <div style="margin-bottom:1.6rem;"><i class="fas fa-user-circle"></i> <strong>${isAr ? "الملف الشخصي" : "Profile"}</strong><br><p style="margin-top:0.4rem;">${profileText}</p></div>
          <div style="margin-bottom:1.6rem;"><i class="fas fa-tools"></i> <strong>${isAr ? "المهارات التقنية" : "Technical Skills"}</strong><ul style="margin-top:0.6rem; margin-left:1.2rem;">${skillsList.map(s => `<li>${s}</li>`).join('')}</ul></div>
          <div><i class="fas fa-language"></i> <strong>${isAr ? "اللغات" : "Languages"}</strong><ul style="margin-top:0.5rem; margin-left:1.2rem;">${languagesList.map(l => `<li>${l}</li>`).join('')}</ul></div>
        </div>
        <div>
          <div style="margin-bottom:1.6rem;"><i class="fas fa-graduation-cap"></i> <strong>${isAr ? "التعليم" : "Education"}</strong><div class="timeline-item" style="margin-top:0.8rem;"><div class="timeline-year">2020 – 2023</div><div><strong>${isAr ? "بكالوريوس تقنية المعلومات – شبكات" : "Bachelor of Information Technology – Networks"}</strong><br>${eduText}</div></div></div>
          <div><i class="fas fa-briefcase"></i> <strong>${isAr ? "الخبرات المهنية" : "Experience"}</strong><div class="timeline-item"><div class="timeline-year">2022 – ${isAr ? "حالياً" : "Present"}</div><div>${exp1}</div></div><div class="timeline-item"><div class="timeline-year">2021 – 2022</div><div>${exp2}</div></div></div>
        </div>
      </div>
      <div style="margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1rem; display: flex; flex-wrap: wrap; gap: 1.2rem; justify-content: space-between;"><div>${contactRow}</div></div>
    `;
  };

  const handleDownloadPDF = async () => {
    if (cvRef.current) {
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: 0.5,
        filename: isAr ? "فيصل_السعود_السيرة.pdf" : "Faisal_AlSawad_CV.pdf",
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" as const },
      };
      html2pdf().set(opt).from(cvRef.current).save();
    }
  };

  return (
    <section id="cv-section" className="container fade-up">
      <h2 className="section-title"><i className="fas fa-file-alt"></i> {t("cv.title")}</h2>
      <div className="cv-wrapper">
        <div className="cv-inner" ref={cvRef} dangerouslySetInnerHTML={{ __html: generateCVHTML() }} />
      </div>
    </section>
  );
}