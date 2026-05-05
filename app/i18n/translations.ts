// app/i18n/translations.ts
export const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "darkmode": "Dark",
    "hero.badge": "Network Engineer & Optimizer",
    "hero.tagline": "Design, secure, and scale modern networks. 4+ years hands‑on experience in infrastructure & troubleshooting.",
    "hero.cvbtn": "View CV",
    "hero.contactbtn": "Contact me",
    "about.title": "About Me",
    "about.text": "Passionate Network Engineer focused on designing resilient infrastructures, implementing security best practices, and optimizing performance. I thrive in solving complex connectivity challenges, and I continuously expand my knowledge in next-gen firewalls, SD-WAN, and cloud networking. Committed to delivering robust network solutions that empower businesses.",
    "skills.title": "Core Competencies",
    "portfolio.title": "Featured Projects",
    "cv.title": "Professional CV",
    "contact.title": "Get in touch",
    "contact.formtitle": "Direct message",
    "contact.send": "Send Message",
    "contact.connect": "Connect socially",
    "contact.location": "Yemen, Sana'a - Technology Hub",
    "contact.available": "Available for freelance & network consulting.",
    "footer.text": "© 2025 Faisal Al-Sawad — Network Engineer. Built with minimal design & performance focus.",
    "footer.slogan": "Secured mindset, reliable connectivity",
    "contact.name": "Full name",
    "contact.email": "Email address",
    "contact.message": "Your message..."
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.cv": "السيرة الذاتية",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بي",
    "darkmode": "داكن",
    "hero.badge": " مهندس شبكات وانظمة كاميرات مراقبة ",
    "hero.tagline": "مهندس شبكات حديث التخرج، متخصص في تصميم وتركيب وصيانة الشبكات السلكية واللاسلكية وأنظمة المراقبة. أمتلك خبرة عملية في تأمين الشبكات، تشخيص الأعطال وحلها، وتقديم الدعم الفني. لدي اهتمام بتقنيات الذكاء الاصطناعي وتطبيقها في تحسين كفاءة الأنظمة. أعمل بكفاءة تحت الضغط وأركز على تقديم حلول عملية وآمنة",
    "hero.cvbtn": "عرض السيرة",
    "hero.contactbtn": "تواصل معي",
    "about.title": "نبذة عني",
    "about.text": "مهندس شبكات شغوف بتصميم بنى تحتية مرنة وتطبيق أفضل ممارسات الأمان وتحسين الأداء. أتفوق في حل تحديات الاتصال المعقدة وأوسع معرفتي باستمرار.",
    "skills.title": "الكفاءات الأساسية",
    "portfolio.title": "المشاريع المميزة",
    "cv.title": "السيرة الذاتية",
    "contact.title": "تواصل معي",
    "contact.formtitle": "مراسلة مباشرة",
    "contact.send": "إرسال",
    "contact.connect": "وسائل التواصل",
    "contact.location": "اليمن، صنعاء - مركز التقنية",
    "contact.available": "متاح للاستشارات والعمل الحر.",
    "footer.text": "© 2025 فيصل السعود — مهندس شبكات. تم البناء بأسلوب بسيط وأداء عالي.",
    "footer.slogan": "عقلية مؤمنة ، اتصال موثوق",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "نص رسالتك..."
  }
};

// بيانات المهارات (مترجمة)
export const skillsData = {
  en: [
    { icon: "fa-network-wired", name: "Network Administration & Design", percent: 90 },
    { icon: "fa-wifi", name: "Network Setup & Maintenance", percent: 88 },
    { icon: "fa-laptop-code", name: "Operating Systems Handling", percent: 85 },
    { icon: "fa-file-excel", name: "Microsoft Office Proficiency", percent: 80 },
    { icon: "fa-lock", name: "Network Security Fundamentals", percent: 86 },
    { icon: "fa-bug", name: "Technical Troubleshooting", percent: 92 }
  ],
  ar: [
    { icon: "fa-network-wired", name: "إدارة وتصميم الشبكات", percent: 90 },
    { icon: "fa-wifi", name: "إعداد وصيانة الشبكات", percent: 88 },
    { icon: "fa-laptop-code", name: "التعامل مع أنظمة التشغيل", percent: 85 },
    { icon: "fa-file-excel", name: "إتقان حزمة مايكروسوفت أوفيس", percent: 80 },
    { icon: "fa-lock", name: "أساسيات أمن الشبكات", percent: 86 },
    { icon: "fa-bug", name: "استكشاف الأعطال وحلها", percent: 92 }
  ]
};

// بيانات المشاريع
export const projectsData = {
  en: [
    { icon: "fa-sitemap", title: "Enterprise VLAN Segmentation", desc: "Multi-site VLAN architecture with inter-VLAN routing, improving security 40%.", tags: ["Cisco","Routing"] },
    { icon: "fa-shield-virus", title: "Zero Trust FW Deployment", desc: "pfSense + Snort rules & VPN gateway for secure remote access.", tags: ["Firewall","VPN"] },
    { icon: "fa-chart-line", title: "Network Monitoring Stack", desc: "Zabbix + Grafana real-time dashboards for bandwidth & health.", tags: ["Monitoring"] },
    { icon: "fa-cloud-upload-alt", title: "Hybrid Cloud SD-WAN", desc: "SD-WAN between on-prem and Azure, reducing latency 28%.", tags: ["SD-WAN"] }
  ],
  ar: [
    { icon: "fa-sitemap", title: "تقسيم شبكة VLAN للمؤسسات", desc: "هندسة VLAN متعددة المواقع مع توجيه بين VLAN، تحسين الأمان بنسبة 40%.", tags: ["Cisco","توجيه"] },
    { icon: "fa-shield-virus", title: "نشر جدار ناري zero trust", desc: "قواعد pfSense + Snort وبوابة VPN للوصول الآمن عن بُعد.", tags: ["جدار ناري","VPN"] },
    { icon: "fa-chart-line", title: "منصة مراقبة الشبكة", desc: "لوحات فورية Zabbix و Grafana لعرض النطاق الترددي والصحة.", tags: ["مراقبة"] },
    { icon: "fa-cloud-upload-alt", title: "SD-WAN هجين سحابي", desc: "SD-WAN بين البنية المحلية و Azure، تقليل زمن الوصول 28%.", tags: ["SD-WAN"] }
  ]
};
