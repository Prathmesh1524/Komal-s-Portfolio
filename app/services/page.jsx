"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const title = t("services.title");
  const items = t("services.items");

  // Ensure items is an array before mapping
  const serviceList = Array.isArray(items) ? items : [];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary"
        >
          {title}
        </motion.h1>
      </div>

      <section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl font-black text-gray-100 group-hover:text-primary transition-colors duration-300 mb-4">
                {service.id}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
