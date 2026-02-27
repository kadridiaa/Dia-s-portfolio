import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const links = [
    { href: "#home", label: t("nav.home") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#education", label: t("nav.education") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-mono text-primary font-bold text-lg">
          DK<span className="text-muted-foreground">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
          >
            <Languages className="w-3.5 h-3.5" />
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>
        {/* Mobile lang toggle */}
        <button
          onClick={toggleLang}
          className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
        >
          <Languages className="w-3.5 h-3.5" />
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
