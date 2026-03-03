"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Send, Info } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLanguage();
  const title = t("contact.title");
  const subtitle = t("contact.subtitle");
  const formLabels = t("contact.form");
  const info = t("contact.info");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      className="min-h-screen pt-20 pb-12 px-4 md:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
            <Mail className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Direct Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-700">
                <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                <a href={`mailto:${info.email}`} className="hover:text-primary transition-colors">
                  {info.email}
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <Info className="text-primary w-5 h-5 flex-shrink-0" />
                <span>{info.big}</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <Info className="text-primary w-5 h-5 flex-shrink-0" />
                <span>{info.agb}</span>
              </li>
              <li className="flex items-center gap-4 text-gray-700">
                <Info className="text-primary w-5 h-5 flex-shrink-0" />
                <span>{info.kvk}</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={formLabels.firstName}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder={formLabels.lastName}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <input
                type="email"
                placeholder={formLabels.email}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder={formLabels.phone}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder={formLabels.message}
                rows={4}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Sent Complete
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {formLabels.send}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
