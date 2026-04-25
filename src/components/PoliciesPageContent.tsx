"use client";

import Image from "next/image";
import { Shield, Leaf, Users, CheckCircle2, Ban } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const policyIcons = [Users, Ban, Shield, Leaf, CheckCircle2];

export default function PoliciesPageContent() {
  const { t } = useLang();

  return (
    <main className="inner-page-main">
      <section className="inner-page-hero">
        <Image
          src="/home_bg.png"
          alt="AGF Group policies"
          fill
          className="inner-page-hero-bg"
          sizes="100vw"
          priority
        />
        <div className="inner-page-hero-overlay" />
        <div className="inner-page-hero-content">
          <span className="section-tag">{t.policiesPage.eyebrow}</span>
          <h1 className="inner-page-title">{t.policiesPage.title}</h1>
          <p className="inner-page-intro">{t.policiesPage.intro}</p>
        </div>
      </section>

      <section className="section about-page-section">
        <div className="container policy-grid">
          {t.policiesPage.items.map((item, index) => {
            const Icon = policyIcons[index] ?? Shield;

            return (
              <article key={item.id} className="policy-card">
                <div className="about-detail-icon">
                  <Icon size={18} />
                </div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <ul className="policy-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
