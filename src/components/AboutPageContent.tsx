"use client";

import Image from "next/image";
import { Target, Eye, ShieldCheck, Building2, MapPin, Factory } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const aboutIcons = [Building2, Target, Eye, ShieldCheck, Factory] as const;

export default function AboutPageContent() {
  const { t } = useLang();

  const sections = [
    { ...t.aboutPage.sections.whoWeAre, icon: aboutIcons[0] },
    { ...t.aboutPage.sections.goal, icon: aboutIcons[1] },
    { ...t.aboutPage.sections.mission, icon: aboutIcons[2] },
    { ...t.aboutPage.sections.vision, icon: aboutIcons[3] },
    { ...t.aboutPage.sections.faja, icon: aboutIcons[4] },
  ];

  return (
    <main className="inner-page-main">
      <section className="inner-page-hero">
        <Image
          src="/footer_bg.png"
          alt="AGF Group operations"
          fill
          className="inner-page-hero-bg"
          sizes="100vw"
          priority
        />
        <div className="inner-page-hero-overlay" />
        <div className="inner-page-hero-content">
          <span className="section-tag">{t.aboutPage.eyebrow}</span>
          <h1 className="inner-page-title">{t.aboutPage.title}</h1>
          <p className="inner-page-intro">{t.aboutPage.intro}</p>
          <div className="about-company-card">
            <div className="about-company-card-title">
              <MapPin size={18} />
              <span>{t.aboutPage.companyCardTitle}</span>
            </div>
            <p>{t.aboutPage.companyCardBody}</p>
          </div>
        </div>
      </section>

      <section className="section about-page-section">
        <div className="container about-grid">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.title} className="about-detail-card">
                <div className="about-detail-icon">
                  <Icon size={18} />
                </div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section about-quality-section">
        <div className="container about-quality-wrap">
          <div className="section-header about-quality-header">
            <span className="section-tag">{t.aboutPage.sections.quality.title}</span>
            <h2 className="section-title">{t.aboutPage.sections.quality.title}</h2>
            <p className="section-desc">{t.aboutPage.sections.quality.body}</p>
          </div>
          <div className="about-pillars-grid">
            {t.aboutPage.qualityPillars.map((item) => (
              <div key={item} className="about-pillar">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
