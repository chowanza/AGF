"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const contactIcons = [MapPin, Phone, Mail, Globe];

export default function ContactPageContent() {
  const { t } = useLang();

  return (
    <main className="inner-page-main">
      <section className="inner-page-hero">
        <Image
          src="/footer_bg.webp"
          alt="AGF Group contact"
          fill
          className="inner-page-hero-bg"
          sizes="100vw"
          priority
        />
        <div className="inner-page-hero-overlay" />
        <div className="inner-page-hero-content">
          <span className="section-tag">{t.contactPage.eyebrow}</span>
          <h1 className="inner-page-title">{t.contactPage.title}</h1>
          <p className="inner-page-intro">{t.contactPage.intro}</p>
        </div>
      </section>

      <section className="section about-page-section">
        <div className="container contact-layout">
          <div className="contact-details-panel">
            <h2>{t.contactPage.detailsTitle}</h2>
            <div className="contact-cards">
              {t.contactPage.details.map((item, index) => {
                const Icon = contactIcons[index] ?? Mail;
                return (
                  <article key={item.id} className="contact-card">
                    <div className="about-detail-icon">
                      <Icon size={18} />
                    </div>
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="contact-request-panel">
            <span className="section-tag">{t.contactPage.requestTitle}</span>
            <h2>{t.contactPage.requestTitle}</h2>
            <ul className="policy-list">
              {t.contactPage.requestItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="contact-actions">
              <Link href="mailto:agarcia@arkonv.com" className="btn-primary">
                {t.contactPage.primaryCta}
              </Link>
              <Link href="tel:8322695511" className="btn-outline contact-btn-outline">
                {t.contactPage.secondaryCta}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
