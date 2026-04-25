"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { key: "home", label: t.nav.home, href: "#home" },
    { key: "about", label: t.nav.about, href: "#about" },
    { key: "policies", label: t.nav.policies, href: "#policies" },
    { key: "products", label: t.nav.products, href: "#sectors" },
    { key: "service", label: t.nav.service, href: "#services" },
    { key: "contact", label: t.nav.contact, href: "#contact" },
  ];

  /* Track active section on scroll */
  useEffect(() => {
    const sections = ["home", "about", "sectors", "services", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isActive = (key: string) => {
    if (key === "home") return activeSection === "home";
    if (key === "about") return activeSection === "about";
    if (key === "products") return activeSection === "sectors";
    if (key === "service") return activeSection === "services";
    if (key === "contact") return activeSection === "contact";
    return false;
  };

  return (
    <>
      {/* ─── Desktop Navbar ─── */}
      <header className="nav-wrapper" id="main-navbar">
        {/* Pill container */}
        <div className="nav-pill">
          {/* Logo */}
          <Link href="#home" className="nav-logo" id="nav-logo">
            <Image src="/logo.svg" alt="AGF Group" width={110} height={32} priority />
          </Link>

          {/* Links */}
          <ul className="nav-links" id="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  id={`nav-${link.key}`}
                  className={`nav-link ${isActive(link.key) ? "nav-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Language toggle — outside the pill */}
        <button
          className="nav-lang"
          id="lang-toggle"
          onClick={toggleLang}
          aria-label="Toggle language"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger"
          id="hamburger-btn"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} color="#333" /> : <Menu size={22} color="#333" />}
        </button>
      </header>

      {/* ─── Mobile Drawer ─── */}
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
            className={`mobile-link ${isActive(link.key) ? "mobile-link--active" : ""}`}
            onClick={() => setMobileOpen(false)}
            id={`mobile-nav-${link.key}`}
          >
            {link.label}
          </Link>
        ))}
        <button className="mobile-lang" onClick={toggleLang} id="mobile-lang-toggle">
          {lang === "es" ? "🇺🇸 English" : "🇻🇪 Español"}
        </button>
      </div>
    </>
  );
}
