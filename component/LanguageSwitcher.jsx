"use client";

import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex gap-2 items-center">
            <button
                onClick={() => changeLanguage("nl")}
                className={`text-sm font-semibold transition-all pb-1 ${language === "nl" ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-primary"
                    }`}
            >
                NL
            </button>
            <span className="text-gray-300">|</span>
            <button
                onClick={() => changeLanguage("en")}
                className={`text-sm font-semibold transition-all pb-1 ${language === "en" ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-primary"
                    }`}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
