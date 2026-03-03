'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function HiremeButton() {
  const { t } = useLanguage();
  return (
    <button
      className="
        px-2 py-1
            text-[12px] 
        uppercase 
        tracking-[2.5px] 
        font-lg
        font-bold
        pointer-cursor
        text-black 
        bg-white 
        rounded-full 
        shadow-[0px_8px_15px_rgba(0,0,0,0.1)] 
        transition 
        duration-300 
        ease-in-out 
        hover:bg-[#23c483] 
        hover:shadow-[0px_15px_20px_rgba(46,229,157,0.4)] 
        hover:text-white 
        hover:-translate-y-[7px] 
        active:translate-y-[-1px] 
        focus:outline-none
      "
    >
      {t("nav.hireMe")}
    </button>
  );
}
