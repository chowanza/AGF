"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About us", href: "#about" },
  { label: "Policies", href: "#policies" },
  { label: "Products", href: "#sectors" },
  { label: "Services", href: "#services" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="navbar"
        style={{
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.12)"
            : "0 2px 20px rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo */}
        <Link href="#home" className="navbar-logo" id="nav-logo">
          <Image
            src="/logo.svg"
            alt="AGF Group Logo"
            width={121}
            height={34}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar-nav" id="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={link.active ? "active" : ""}
                id={`nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          <button className="lang-toggle" id="lang-toggle" aria-label="Toggle language">
            <Globe size={12} style={{ display: "inline", marginRight: "4px" }} />
            ES
          </button>
          <button
            className="hamburger"
            id="hamburger-btn"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} id="mobile-menu">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={link.active ? "active" : ""}
            onClick={() => setMobileOpen(false)}
            id={`mobile-nav-${link.label.toLowerCase().replace(" ", "-")}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
