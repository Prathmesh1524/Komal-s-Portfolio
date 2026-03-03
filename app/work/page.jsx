"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  const { t } = useLanguage();
  const title = t("work.title");
  const clients = t("work.clients");

  const clientList = Array.isArray(clients) ? clients : [];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-screen pt-20 pb-12 px-4 md:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary text-center">
          {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientList.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                {client.name}
              </h2>
              <p className="text-gray-600 mb-6">{client.description}</p>

              <div className="flex items-center text-primary font-semibold">
                <span>Bezoek website</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
