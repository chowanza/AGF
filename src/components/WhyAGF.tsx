"use client";
import Image from "next/image";
import { Globe2, Shield, Clock, Award, Headphones, TrendingUp } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const featureIcons = [Globe2, Shield, Clock, Award, Headphones, TrendingUp];

export default function WhyAGF() {
  const { t } = useLang();
  return (
    <section className="why-agf" id="about">
      <div className="why-agf-overlay" />
      <div className="why-agf-content">
        <div className="why-grid">
          <div className="why-left">
            <span className="section-tag" id="why-agf-tag">{t.whyAgf.tag}</span>
            <h2 className="section-title" id="why-agf-title">{t.whyAgf.title}</h2>
            <p className="section-desc" id="why-agf-desc">{t.whyAgf.desc}</p>
            <div className="why-features" id="why-features-grid">
              {t.whyAgf.features.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <div className="why-feature" key={feature.id} id={`why-${feature.id}`}>
                    <div className="why-feature-icon"><Icon size={18} /></div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="why-right">
            <Image
              src="/footer_bg.png"
              alt="AGF Group logistics operations"
              fill
              className="why-img-main"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="why-img-badge" id="why-badge">
              <strong>+20</strong>
              <span>{t.whyAgf.badge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
