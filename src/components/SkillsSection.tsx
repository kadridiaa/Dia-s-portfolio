import { motion } from "framer-motion";
import { Globe, Server, Database, Boxes, Bug } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillBar = ({ name, percent, delay }: { name: string; percent: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="mb-5"
  >
    <div className="flex justify-between mb-1.5">
      <span className="font-medium text-sm">{name}</span>
      <span className="text-xs text-muted-foreground font-mono">{percent}%</span>
    </div>
    <div className="relative h-2 w-full rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        className="absolute h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(142 70% 60%) ${percent}%, hsl(var(--muted)) ${percent}%)`,
        }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Globe,
      title: "Frontend",
      skills: [
        { name: "React", percent: 80 },
        { name: "JavaScript", percent: 85 },
        { name: "HTML / CSS", percent: 90 },
        { name: "Tailwind CSS", percent: 75 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Spring Boot", percent: 80 },
        { name: "Node.js / Express", percent: 70 },
        { name: "Python", percent: 85 },
        { name: "Java", percent: 85 },
        { name: "C", percent: 70 },
        { name: "APIs REST", percent: 85 },
      ],
    },
    {
      icon: Database,
      title: t("skills.databases"),
      skills: [
        { name: "MySQL", percent: 85 },
        { name: "PostgreSQL", percent: 75 },
        { name: "Oracle", percent: 70 },
        { name: "SQLite", percent: 75 },
        { name: "Apache Spark", percent: 65 },
        { name: "Data Pipelines", percent: 60 },
      ],
    },
    {
      icon: Bug,
      title: "Web Scraping",
      skills: [
        { name: "BeautifulSoup", percent: 85 },
        { name: "Scrapy", percent: 75 },
        { name: "Requests / HTTP", percent: 85 },
        { name: "Data Cleaning", percent: 80 },
        { name: "Automation", percent: 75 },
      ],
    },
    {
      icon: Boxes,
      title: t("skills.architecture"),
      skills: [
        { name: "POO / MVC", percent: 85 },
        { name: "Structures de données", percent: 80 },
        { name: "AGILE / Scrum", percent: 75 },
        { name: "Git / GitHub", percent: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{t("skills.number")}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t("skills.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, j) => (
                <SkillBar key={skill.name} name={skill.name} percent={skill.percent} delay={j * 0.05} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
