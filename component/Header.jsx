import { Nav } from "./Nav"
import HiremeButton from "./HiremeButton"
import Link from "next/link"
import MobileNav from "./MobileNav"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  return (
    <header className="xl:py-5 text-gray-900 p-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Komal<span className="text-green-300">.</span></h1>
        </Link>
        {/* Dekstop NAV */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <HiremeButton /> </Link>
          <LanguageSwitcher />
        </div>
        {/* Mobile View */}
        <div className="xl:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  )

}


