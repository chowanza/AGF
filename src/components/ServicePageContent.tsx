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
          src="/nuestros_servicios_logisticos.webp"
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
        <div className="container service-steps-grid" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {t.servicePage.steps.map((step, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const imageNames = [
              "serv_requisition",
              "serv_evaluation",
              "serv_purchase_order",
              "serv_supplier",
              "serv_logistics",
              "serv_tracking",
              "serv_door_to_door",
              "serv_closeout"
            ];
            const imgSrc = `/${imageNames[index] || "serv_logistics"}.webp`;

            return (
              <article key={step.title} className="service-step-card" style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                  <Image src={imgSrc} alt={step.title} fill style={{ objectFit: 'cover' }} sizes="100vw" />
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <div className="service-step-head" style={{ marginBottom: '1.5rem' }}>
                    <div className="about-detail-icon">
                      <Icon size={18} />
                    </div>
                    <span className="service-step-number" style={{ fontSize: '2rem', fontWeight: 800, color: '#e0e0e0' }}>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3B5628' }}>{step.title}</h2>
                  <p style={{ color: '#555', lineHeight: 1.6, fontSize: '1.05rem' }}>{step.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
