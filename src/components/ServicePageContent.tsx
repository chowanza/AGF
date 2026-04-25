"use client";

import Image from "next/image";
import { ArrowRightLeft, ClipboardList, FileCheck2, PackageCheck } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const serviceIcons = [
  ClipboardList,
  ArrowRightLeft,
  FileCheck2,
  PackageCheck,
];

export default function ServicePageContent() {
  const { t } = useLang();

  return (
    <main className="inner-page-main">
      <section className="inner-page-hero">
        <Image
          src="/nuestros_servicios_logisticos.png"
          alt="AGF Group services"
          fill
          className="inner-page-hero-bg"
          sizes="100vw"
          priority
        />
        <div className="inner-page-hero-overlay" />
        <div className="inner-page-hero-content">
          <span className="section-tag">{t.servicePage.eyebrow}</span>
          <h1 className="inner-page-title">{t.servicePage.title}</h1>
          <p className="inner-page-intro">{t.servicePage.intro}</p>
          <div className="about-company-card">
            <div className="about-company-card-title">
              <PackageCheck size={18} />
              <span>{t.services.title}</span>
            </div>
            <p>{t.servicePage.overview}</p>
          </div>
        </div>
      </section>

      <section className="section about-page-section">
        <div className="container service-steps-grid">
          {t.servicePage.steps.map((step, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <article key={step.title} className="service-step-card">
                <div className="service-step-head">
                  <div className="about-detail-icon">
                    <Icon size={18} />
                  </div>
                  <span className="service-step-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
