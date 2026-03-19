"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  nl: {
    nav: {
      home: "Home",
      affinity: "Affiniteit",
      about: "Over Mij",
      clients: "Opdrachtgevers",
      contact: "Contact",
      appointment: "Afspraak",
    },
    home: {
      role: "BIG-geregistreerd tandarts",
      greeting: "Hallo, ik ben",
      name: "Komal Gat",
      description:
        "In mijn praktijk streef ik ernaar om al mijn patiënten zo veel mogelijk op hun gemak te stellen. Daarnaast staat preventie in mijn werk centraal, om gebitsproblemen effectief te kunnen voorkomen.",
      contactBtn: "Neem Contact Op",
      socials: "Volg mij",
    },
    about: {
      title: "Over mij",
      desc: "Mijn naam is Komal Gat. In 2022 ben ik afgestudeerd als tandarts aan de 'Rajiv Gandhi University of Health Sciences' in Karnataka, India. Vervolgens heb ik de master 'Healthcare Policy, Innovation and Management' afgerond aan de Universiteit Maastricht. Sinds 2025 ben ik werkzaam als BIG-geregistreerd tandarts in Nederland.",
      info: [
        { fieldName: "Naam", fieldValue: "Komal Gat" },
        { fieldName: "Beroep", fieldValue: "Tandarts" },
        { fieldName: "BIG", fieldValue: "09931899502" },
        { fieldName: "Email", fieldValue: "komalgat1499@gmail.com" },
        { fieldName: "Locatie", fieldValue: "Nederland" },
      ],
      educationTitle: "Opleiding",
      educationDesc: "Mijn academische achtergrond in tandheelkunde en gezondheidszorgbeleid.",
      educationItems: [
        {
          institution: "Universiteit Maastricht",
          degree: "Master Healthcare Policy, Innovation and Management",
          duration: "Afgerond",
        },
        {
          institution: "Rajiv Gandhi University of Health Sciences (India)",
          degree: "Tandarts (BDS)",
          duration: "Afgestudeerd 2022",
        },
      ],
      skillsTitle: "Vaardigheden",
      skillsDesc: "Mijn focus ligt op het bieden van de beste zorg, met nadruk op preventie en comfort.",
      skillsList: ["Algemene tandheelkunde", "Communicatie", "Preventie", "Patiëntgericht", "Beleid & Innovatie"],
    },
    affinity: {
      title: "Affiniteit met",
      desc: "In de tandheelkunde heb ik een speciale interesse en affiniteit voor de volgende gebieden.",
      contactBtn: "Contact opnemen",
      readyToStart: "Klaar voor een afspraak?",
      discuss: "Neem contact op om een afspraak te plannen of kennis te maken.",
      items: [
        {
          num: "01",
          name: "Algemene tandheelkunde",
          desc: "Complete mondzorg voor een gezond en sterk gebit.",
        },
        {
          num: "02",
          name: "Kroon- en brugwerk",
          desc: "Herstel van de functie en esthetiek van uw gebit met hoogwaardige kronen en bruggen.",
        },
        {
          num: "03",
          name: "Kinder tandheelkunde",
          desc: "Gespecialiseerde en geduldige zorg, afgestemd op de behoeftes van kinderen.",
        },
        {
          num: "04",
          name: "Angst patiënten",
          desc: "Een rustige, geruststellende benadering voor patiënten die angst ervaren voor de tandarts.",
        },
        {
          num: "05",
          name: "Esthetische tandheelkunde",
          desc: "Verbetering van de uitstraling van uw gebit voor een stralende lach.",
        },
      ],
    },
    clients: {
      title: "Huidige opdrachtgevers",
      desc: "Momenteel ben ik met veel plezier werkzaam bij de volgende tandartspraktijken.",
      practices: [
        {
          num: "01",
          category: "Tandartspraktijk",
          title: "Tandartspraktijk Novita",
          desc: "Tandartspraktijk Novita | Uw Tandarts in Bergen op Zoom",
          stack: [{ name: "Bergen op Zoom" }],
          link: "https://share.google/f2W9RI9k5WgoqG1TK",
          img: "/assets/novita.jpg", // placeholder, will adjust
        },
        {
          num: "02",
          category: "Tandartspraktijk",
          title: "Reinieren tandartsen",
          desc: "Home - Reinieren Tandarts",
          stack: [{ name: "Tandartspraktijk" }],
          link: "https://share.google/aPvACMzVn1kO0qsC2",
          img: "/assets/reinieren.jpg", // placeholder, will adjust
        },
      ],
    },
    contact: {
      title: "Afspraak of kennismaken?",
      desc: "Plan een afspraak bij één van mijn opdrachtgevers in jouw buurt!",
      nameLabel: "Naam",
      namePlaceholder: "Vul uw naam in",
      emailLabel: "Email",
      emailPlaceholder: "Vul uw email in",
      messageLabel: "Bericht",
      messagePlaceholder: "Waar kunnen we u mee helpen?",
      sendBtn: "Verstuur Bericht",
      sending: "Verzenden...",
      sent: "Bericht Verzonden!",
      orReachUs: "Of bereik mij direct via",
      contactInfo: "komalgat1499@gmail.com | BIG 09931899502 | AGB 12104390 | KVK 96512199",
    },
  },
  en: {
    nav: {
      home: "Home",
      affinity: "Affinity",
      about: "About Me",
      clients: "Clients",
      contact: "Contact",
      appointment: "Appointment",
    },
    home: {
      role: "BIG-registered Dentist",
      greeting: "Hello, I am",
      name: "Komal Gat",
      description:
        "In my practice, I strive to make all my patients feel as comfortable as possible. In addition, prevention is central to my work, to effectively prevent dental problems.",
      contactBtn: "Contact Me",
      socials: "Follow me",
    },
    about: {
      title: "About me",
      desc: "My name is Komal Gat. In 2022 I graduated as a dentist from the 'Rajiv Gandhi University of Health Sciences' in Karnataka, India. I then completed the master 'Healthcare Policy, Innovation and Management' at Maastricht University. Since 2025 I have been working as a BIG-registered dentist in the Netherlands.",
      info: [
        { fieldName: "Name", fieldValue: "Komal Gat" },
        { fieldName: "Profession", fieldValue: "Dentist" },
        { fieldName: "BIG", fieldValue: "09931899502" },
        { fieldName: "Email", fieldValue: "komalgat1499@gmail.com" },
        { fieldName: "Location", fieldValue: "Netherlands" },
      ],
      educationTitle: "Education",
      educationDesc: "My academic background in dentistry and healthcare policy.",
      educationItems: [
        {
          institution: "Maastricht University",
          degree: "Master Healthcare Policy, Innovation and Management",
          duration: "Completed",
        },
        {
          institution: "Rajiv Gandhi University of Health Sciences (India)",
          degree: "Dentist (BDS)",
          duration: "Graduated 2022",
        },
      ],
      skillsTitle: "Skills",
      skillsDesc: "My focus is on providing the best care, with an emphasis on prevention and comfort.",
      skillsList: ["General Dentistry", "Communication", "Prevention", "Patient-centered", "Policy & Innovation"],
    },
    affinity: {
      title: "Affinity with",
      desc: "In dentistry, I have a special interest and affinity for the following areas.",
      contactBtn: "Contact us",
      readyToStart: "Ready for an appointment?",
      discuss: "Get in touch to schedule an appointment or to get acquainted.",
      items: [
        {
          num: "01",
          name: "General dentistry",
          desc: "Complete oral care for a healthy and strong set of teeth.",
        },
        {
          num: "02",
          name: "Crown and bridge work",
          desc: "Restoring the function and aesthetics of your teeth with high-quality crowns and bridges.",
        },
        {
          num: "03",
          name: "Pediatric dentistry",
          desc: "Specialized and patient care, tailored to the needs of children.",
        },
        {
          num: "04",
          name: "Anxious patients",
          desc: "A calm, reassuring approach for patients who experience anxiety about the dentist.",
        },
        {
          num: "05",
          name: "Aesthetic dentistry",
          desc: "Improving the appearance of your teeth for a radiant smile.",
        },
      ],
    },
    clients: {
      title: "Current clients",
      desc: "I am currently happily working at the following dental practices.",
      practices: [
        {
          num: "01",
          category: "Dental Practice",
          title: "Tandartspraktijk Novita",
          desc: "Tandartspraktijk Novita | Your Dentist in Bergen op Zoom",
          stack: [{ name: "Bergen op Zoom" }],
          link: "https://share.google/f2W9RI9k5WgoqG1TK",
          img: "/assets/novita.jpg", // placeholder, will adjust
        },
        {
          num: "02",
          category: "Dental Practice",
          title: "Reinieren tandartsen",
          desc: "Home - Reinieren Tandarts",
          stack: [{ name: "Dental Practice" }],
          link: "https://share.google/aPvACMzVn1kO0qsC2",
          img: "/assets/reinieren.jpg", // placeholder, will adjust
        },
      ],
    },
    contact: {
      title: "Appointment or get acquainted?",
      desc: "Plan an appointment at one of my clinical locations near you!",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message",
      messagePlaceholder: "How can we help you?",
      sendBtn: "Send Message",
      sending: "Sending...",
      sent: "Message Sent!",
      orReachUs: "Or reach me directly at",
      contactInfo: "komalgat1499@gmail.com | BIG 09931899502 | AGB 12104390 | KVK 96512199",
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("nl"); // default Dutch

  // Load language from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === "nl" ? "en" : "nl";
    setLanguage(nextLang);
    localStorage.setItem("portfolio_lang", nextLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
