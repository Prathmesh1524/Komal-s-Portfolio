"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("about");
  const { t } = useLanguage();

  const about = t.about;
  const education = {
    title: t.about.educationTitle,
    desc: t.about.educationDesc,
    items: t.about.educationItems,
  };

  const TabButton = ({ value, children }) => (
    <button
      className={`px-4 py-2 rounded transition-colors text-white hover:bg-gray-700 ${
        activeTab === value ? "bg-green-600" : ""
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );

  const TabContent = ({ value, children }) =>
    activeTab === value ? <div className="mt-8">{children}</div> : null;

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto py-12 px-4"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            {t.nav.about}
          </h1>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="w-full max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="grid w-full grid-cols-2 bg-gray-900 border border-gray-800 rounded-lg p-1">
            <TabButton value="about">{t.nav.about}</TabButton>
            <TabButton value="education">{t.about.educationTitle}</TabButton>
          </div>

          {/* About Tab */}
          <TabContent value="about">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-green-400">{about.title}</h2>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">{about.desc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {about.info.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">{item.fieldName}</span>
                      <span className="text-white font-semibold">{item.fieldValue}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabContent>

          {/* Education Tab */}
          <TabContent value="education">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-green-400">{education.title}</h2>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">{education.desc}</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-green-600"></div>

                  {education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className={`relative flex items-center mb-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-black z-10"></div>

                      {/* Content */}
                      <div
                        className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                      >
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-green-500 transition-colors">
                          <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                          <p className="text-green-400 font-semibold mb-2">{item.institution}</p>
                          <span className="text-gray-400 text-sm">{item.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabContent>
        </motion.div>
      </motion.div>
    </div>
  );
}
