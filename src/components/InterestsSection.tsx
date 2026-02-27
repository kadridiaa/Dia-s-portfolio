import { motion } from "framer-motion";
import { Trophy, Dumbbell } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const InterestsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">{t("interests.hackathons")}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("interests.hackathons.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-3">
              <Dumbbell className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">{t("interests.calisthenics")}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("interests.calisthenics.desc")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
