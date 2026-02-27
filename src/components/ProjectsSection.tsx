import { motion } from "framer-motion";
import { ShoppingCart, Gamepad2, Globe, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      icon: ShoppingCart,
      title: t("projects.ecommerce.title"),
      role: t("projects.ecommerce.role"),
      location: "USTHB — 2024",
      description: t("projects.ecommerce.desc"),
      tech: ["Python", "MySQL", "Web Scraping"],
      links: [
        { label: "Front-end", url: "https://github.com/kadridiaa/front-end-e-commerce-website-with-scrapping" },
        { label: "Scrapper", url: "https://github.com/kadridiaa/scrapper-ecommerce-websites" },
      ],
    },
    {
      icon: Gamepad2,
      title: t("projects.game.title"),
      role: t("projects.game.role"),
      location: "Nice — 2024",
      description: t("projects.game.desc"),
      tech: ["Java", "POO", "Architecture Modulaire"],
      links: [
        { label: "GitHub", url: "https://github.com/kadridiaa/GameJava-OOP" },
      ],
    },
    {
      icon: Globe,
      title: t("projects.web.title"),
      role: t("projects.web.role"),
      location: "Nice — 2026",
      description: t("projects.web.desc"),
      tech: ["Angular", "Express", "MongoDB", "Node.js"],
      links: [
        { label: "GitHub", url: "https://github.com/kadridiaa/Web-Sampler-Studio---Live-Demo-Render-" },
        { label: "Live Demo", url: "https://github.com/kadridiaa/Web-Sampler-Studio---Live-Demo-Render-", live: true },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{t("projects.number")}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t("projects.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.05)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <project.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{project.location}</span>
              </div>
              <h3 className="font-semibold mb-1">{project.title}</h3>
              <p className="text-xs text-primary font-mono mb-3">{project.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    {(link as any).live ? <ExternalLink className="w-3 h-3" /> : <Github className="w-3 h-3" />}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
