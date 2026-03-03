"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { useLanguage } from "@/context/LanguageContext";

const links = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
]

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage();

  return (
    <div className="md:hidden relative">
      {/* Toggle Button */}
      <button className="text-2xl p-2 z-50 relative" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
          <nav className="flex flex-col space-y-8 text-center">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.path}
                className="text-white text-xl hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNav
