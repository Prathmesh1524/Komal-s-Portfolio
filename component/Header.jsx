"use client";

import { Nav } from "./Nav"
import HiremeButton from "./HiremeButton"
import Link from "next/link"
import MobileNav from "./MobileNav"
import { useLanguage } from "../app/context/LanguageContext"
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="xl:py-5 p-8 transition-colors duration-300">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Komal Gat<span className="text-green-400">.</span>
          </h1>
        </Link>
        {/* Desktop NAV */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <HiremeButton /> 
          </Link>
          <button 
            onClick={toggleLanguage} 
            className="px-3 py-1 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all font-semibold"
          >
            {language === "en" ? "NL" : "EN"}
          </button>
          <ThemeToggle />
        </div>
        {/* Mobile View */}
        <div className="xl:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage} 
            className="px-2 py-1 text-sm border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all font-semibold"
          >
            {language === "en" ? "NL" : "EN"}
          </button>
          <ThemeToggle />
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}
