"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ResumePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 md:px-8 lg:px-16 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          {t("about.title")}
        </h1>

        <div className="bg-white/5 p-8 rounded-2xl border border-gray-100 shadow-md">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            {t("about.description")}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
            {t("about.practiceStyle")}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
