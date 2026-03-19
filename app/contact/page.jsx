"use client";

import { useState } from "react";
import { Send, Mail, User, MessageSquare, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    const templateID = "template_g8kr8qi";
    const serviceID = "service_3rs67qd";
    const publicKey = "10CG2U2CC15hSAk1P";

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log("Message sent successfully");
        
      setIsSubmitted(true);
      setFormData({ 
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error occurred while sending email:", error);
      alert("Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#58bc82] rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#58bc82] rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-[#58bc82] rounded-full mix-blend-screen filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mt-20">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#58bc82] rounded-full mb-4 animate-bounce-slow">
            <Mail className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-bold text-green-400 mb-2 animate-slide-in-left">
            {t.contact.title}
          </h1>
          <p className="text-gray-300 opacity-80 animate-slide-in-right animation-delay-200">
            {t.contact.desc}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 w-full animate-fade-in-up animation-delay-400"
        >
          <div className="w-full flex flex-col gap-2 group animate-slide-in-left animation-delay-600">
            <label
              htmlFor="name"
              className="self-start text-[#58bc82] font-semibold flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1"
            >
              <User className="w-4 h-4 animate-pulse" />
              {t.contact.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="rounded-lg px-4 py-4 w-full bg-gray-900 border-2 border-gray-700 text-white
                focus:border-[#58bc82] transition-all duration-300 transform hover:scale-[1.02] 
                focus:scale-[1.02] hover:shadow-lg focus:shadow-xl placeholder:text-gray-400 
                placeholder:opacity-60"
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          <div className="w-full flex flex-col gap-2 group animate-slide-in-right animation-delay-800">
            <label
              htmlFor="email"
              className="self-start text-[#58bc82] font-semibold flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1"
            >
              <Mail className="w-4 h-4 animate-pulse animation-delay-500" />
              {t.contact.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="rounded-lg px-4 py-4 w-full bg-gray-900 border-2 border-gray-700 text-white
                focus:border-[#58bc82] transition-all duration-300 transform hover:scale-[1.02] 
                focus:scale-[1.02] hover:shadow-lg focus:shadow-xl placeholder:text-gray-400 
                placeholder:opacity-60"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div className="w-full flex flex-col gap-2 group animate-slide-in-left animation-delay-1000">
            <label
              htmlFor="message"
              className="self-start text-[#58bc82] font-semibold flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1"
            >
              <MessageSquare className="w-4 h-4 animate-pulse animation-delay-1000" />
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="rounded-lg px-4 py-4 w-full bg-gray-900 border-2 border-gray-700 text-white
                focus:border-[#58bc82] transition-all duration-300 transform hover:scale-[1.02] 
                focus:scale-[1.02] hover:shadow-lg focus:shadow-xl placeholder:text-gray-400 
                placeholder:opacity-60 resize-none"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full flex items-center justify-center gap-3 px-4 py-4 rounded-full 
              bg-gray-800 text-white font-semibold text-sm transition-all duration-500 
              hover:bg-[#58bc82] hover:text-black transform hover:scale-105 hover:shadow-xl 
              active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
              animate-slide-in-up animation-delay-1200 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#58bc82] to-[#4a9d6f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <div className="relative z-10 flex items-center gap-3">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {t.contact.sending}
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5 animate-bounce" />
                  {t.contact.sent}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  {t.contact.sendBtn}
                </>
              )}
            </div>
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-center animate-fade-in-up animation-delay-1400">
          <p className="text-gray-400 text-sm mb-2">
            {t.contact.orReachUs}
          </p>
          <p className="text-green-400 font-semibold text-[13px] md:text-sm tracking-wide bg-gray-900/50 p-3 rounded-lg border border-green-500/20 shadow-[0_0_15px_rgba(88,188,130,0.1)]">
            {t.contact.contactInfo}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
