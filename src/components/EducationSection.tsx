import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();

  const educations = [
    {
      degree: t("edu.master"),
      school: "Université Côte d'Azur",
      period: "2025 - 2026",
      current: true,
    },
    {
      degree: t("edu.licence.uca"),
      school: "Université Côte d'Azur — Campus Valrose",
      period: "2024 - 2025",
      badge: t("edu.graduated"),
    },
    {
      degree: t("edu.licence.usthb"),
      school: "Université USTHB — Alger",
      period: "2021 - 2024",
      badge: t("edu.graduated"),
    },
  ];

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">{t("edu.number")}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t("edu.title")}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {educations.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6"
              >
                <div className="relative z-10 mt-1.5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                    edu.current
                      ? "bg-primary/20 border-primary text-primary"
                      : "bg-card border-border text-muted-foreground"
                  }`}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    {edu.current && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-primary/20 text-primary border border-primary/30">
                        {t("edu.current")}
                      </span>
                    )}
                    {edu.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-accent/20 text-accent border border-accent/30">
                        {edu.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                  <p className="text-muted-foreground/60 text-xs font-mono mt-1">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
