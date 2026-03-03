"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("nl"); // default to Dutch

    // Load language from localStorage if available on mount
    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang && (savedLang === "nl" || savedLang === "en")) {
            setLanguage(savedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
