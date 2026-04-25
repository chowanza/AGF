"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { siteNav } from "@/lib/site-nav";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { ...siteNav[0], label: t.nav.home },
    { ...siteNav[1], label: t.nav.about },
    { ...siteNav[2], label: t.nav.policies },
    { ...siteNav[3], label: t.nav.products },
    { ...siteNav[4], label: t.nav.service },
    { ...siteNav[5], label: t.nav.contact },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="nav-wrapper" id="main-navbar">
        <div className="nav-pill">
          <Link href="/" className="nav-logo" id="nav-logo" onClick={() => setMobileOpen(false)}>
            <Image src="/logo.svg" alt="AGF Group" width={110} height={32} priority />
          </Link>

          <ul className="nav-links" id="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  id={`nav-${link.key}`}
                  className={`nav-link ${isActive(link.href) ? "nav-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="nav-lang"
          id="lang-toggle"
          onClick={toggleLang}
          aria-label="Toggle language"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>

        <button
          className="hamburger"
          id="hamburger-btn"
          aria-label="Open menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} color="#333" /> : <Menu size={22} color="#333" />}
        </button>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} id="mobile-menu">
        <div className="mobile-menu-header">
          <Image src="/logo.svg" alt="AGF Group" width={100} height={28} />
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={22} color="#333" />
          </button>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`mobile-link ${isActive(link.href) ? "mobile-link--active" : ""}`}
            onClick={() => setMobileOpen(false)}
            id={`mobile-nav-${link.key}`}
          >
            {link.label}
          </Link>
        ))}
        <button className="mobile-lang" onClick={toggleLang} id="mobile-lang-toggle">
          {lang === "es" ? "English" : "Espanol"}
        </button>
      </div>
    </>
  );
}
