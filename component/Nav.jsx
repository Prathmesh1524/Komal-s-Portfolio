"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

import { useLanguage } from "@/context/LanguageContext";

export const Nav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="flex gap-8 items-center">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={link.path === pathname ? "text-green-400 border-b-2 border-green hover:text-green-200 transition-all " : ""}
        >
          {t(`nav.${link.key}`)}
        </Link>
      ))}
    </nav>
  );
};
