"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Share2, Send, Users, MessageCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { siteNav } from "@/lib/site-nav";

const socialLinks = [
  { icon: Share2, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Users, href: "#", label: "Facebook" },
  { icon: Send, href: "#", label: "Instagram" },
];

export default function Footer() {
  const { t } = useLang();

  const navLabels = [t.nav.home, t.nav.about, t.nav.policies, t.nav.products, t.nav.service, t.nav.contact];

  return (
    <footer className="footer" id="contact" style={{ position: "relative", overflow: "hidden" }}>
      <Image
        src="/footer_bg.png"
        alt="AGF Group footer background"
        fill
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
        sizes="100vw"
      />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #3B5628, #C0C049, #3B5628)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo.svg" alt="AGF Group Logo" width={121} height={34} style={{ filter: "brightness(0) invert(1)" }} />
            <p>{t.footer.desc}</p>
            <div className="footer-social">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label} id={`footer-social-${s.label.toLowerCase()}`}>
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.navTitle}</h4>
            <ul>
              {navLabels.map((label, i) => (
                <li key={siteNav[i].key}>
                  <Link href={siteNav[i].href} id={`footer-link-${siteNav[i].key}`}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.servicesTitle}</h4>
            <ul>
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <Link href="/service" id={`footer-service-${label.toLowerCase().replace(/ /g, "-")}`}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.contactTitle}</h4>
            <div className="footer-contact-item">
              <MapPin size={14} />
              <span>{t.footer.address.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} />
              <span>{t.footer.phone}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <span>{t.footer.email}</span>
            </div>
            <div className="footer-contact-item">
              <Globe size={14} />
              <span>{t.footer.website}</span>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/contact-us" className="btn-primary" id="footer-cta-btn" style={{ fontSize: "0.8rem", padding: "0.65rem 1.4rem" }}>
                {t.footer.ctaBtn}
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{"\u00A9"} {new Date().getFullYear()} AGF Group. {t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
