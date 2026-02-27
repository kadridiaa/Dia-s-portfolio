import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.skills": { fr: "Compétences", en: "Skills" },
  "nav.education": { fr: "Formation", en: "Education" },
  "nav.projects": { fr: "Projets", en: "Projects" },
  "nav.contact": { fr: "Contact", en: "Contact" },

  // Hero
  "hero.greeting": { fr: "<hello world />", en: "<hello world />" },
  "hero.subtitle": { fr: "Data Engineer & Web Developer", en: "Data Engineer & Web Developer" },
  "hero.description": {
    fr: "Étudiant en Master 1 Informatique à l'Université Côte d'Azur, spécialisé en systèmes, programmation et traitement de données. Passionné par le Data Engineering et le développement web full stack.",
    en: "Master's student in Computer Science at Université Côte d'Azur, specializing in systems, programming and data processing. Passionate about Data Engineering and full-stack web development.",
  },
  "hero.contact": { fr: "Me contacter", en: "Contact me" },
  "hero.projects": { fr: "Voir mes projets", en: "View my projects" },

  // Skills
  "skills.number": { fr: "01.", en: "01." },
  "skills.title": { fr: "Compétences", en: "Skills" },
  "skills.languages": { fr: "Langages", en: "Languages" },
  "skills.webdev": { fr: "Web Dev", en: "Web Dev" },
  "skills.databases": { fr: "Bases de données", en: "Databases" },
  "skills.architecture": { fr: "Architecture", en: "Architecture" },

  // Education
  "edu.number": { fr: "02.", en: "02." },
  "edu.title": { fr: "Formation", en: "Education" },
  "edu.current": { fr: "En cours", en: "In progress" },
  "edu.graduated": { fr: "Diplômé", en: "Graduated" },
  "edu.master": { fr: "Master en Ingénierie Informatique", en: "Master's in Computer Engineering" },
  "edu.licence.uca": { fr: "Licence en Informatique", en: "Bachelor's in Computer Science" },
  "edu.licence.usthb": {
    fr: "Licence en Ingénierie des Systèmes Informatiques et Logiciels",
    en: "Bachelor's in Computer Systems & Software Engineering",
  },

  // Projects
  "projects.number": { fr: "03.", en: "03." },
  "projects.title": { fr: "Projets & Expériences", en: "Projects & Experience" },
  "projects.ecommerce.title": { fr: "Plateforme E-commerce + Web Scraping", en: "E-commerce Platform + Web Scraping" },
  "projects.ecommerce.role": { fr: "Développeur Full-stack", en: "Full-stack Developer" },
  "projects.ecommerce.desc": {
    fr: "Développement d'une plateforme e-commerce full-stack avec intégration d'un système de web scraping automatisé.",
    en: "Development of a full-stack e-commerce platform with automated web scraping integration.",
  },
  "projects.game.title": { fr: "Jeu Java — POO Avancée", en: "Java Game — Advanced OOP" },
  "projects.game.role": { fr: "Ingénieur Logiciel", en: "Software Engineer" },
  "projects.game.desc": {
    fr: "Conception d'un jeu en Java basé sur les principes avancés de la POO et architecture modulaire.",
    en: "Design of a Java game based on advanced OOP principles and modular architecture.",
  },
  "projects.web.title": { fr: "Web Sampler Studio", en: "Web Sampler Studio" },
  "projects.web.role": { fr: "Stagiaire en Développement", en: "Development Intern" },
  "projects.web.desc": {
    fr: "Développement d'une application web MEAN stack avec API REST et gestion CRUD complète.",
    en: "Development of a MEAN stack web application with REST API and full CRUD management.",
  },

  // Interests
  "interests.hackathons": { fr: "Hackathons", en: "Hackathons" },
  "interests.hackathons.desc": {
    fr: "Organisateur et compétiteur de hackathons au sein de Micro-club et du GDG (Google Developer Group) à Alger.",
    en: "Organizer and competitor of hackathons within Micro-club and GDG (Google Developer Group) in Algiers.",
  },
  "interests.calisthenics": { fr: "Calisthenics", en: "Calisthenics" },
  "interests.calisthenics.desc": {
    fr: "Pratique en équipe — discipline, persévérance et esprit collectif.",
    en: "Team practice — discipline, perseverance and team spirit.",
  },

  // Contact
  "contact.number": { fr: "04.", en: "04." },
  "contact.title": { fr: "Me contacter", en: "Get in touch" },
  "contact.desc": {
    fr: "Je suis actuellement à la recherche d'une alternance en Data Engineering ou développement web. N'hésitez pas à me contacter !",
    en: "I'm currently looking for a work-study position in Data Engineering or web development. Feel free to reach out!",
  },
  "contact.send": { fr: "Envoyer un email", en: "Send an email" },
  "contact.footer": { fr: "© 2025 Dia-eddine KADRI — Construit avec passion", en: "© 2025 Dia-eddine KADRI — Built with passion" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
