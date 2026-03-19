"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../app/context/LanguageContext";

export const Nav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const links = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.affinity, path: "/services" },
    { name: t.nav.about, path: "/resume" },
    { name: t.nav.clients, path: "/work" },
    { name: t.nav.contact, path: "/contact" },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={link.path === pathname ? "text-green-400 border-b-2 border-green hover:text-green-200 transition-all "  : ""}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
