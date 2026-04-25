"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, HardHat, Pickaxe, Truck } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const sectorImages = [
  "/petroleo_bg.png",
  "/mineria_bg.png",
  "/transporte_bg.png",
  "/construccion_bg.png",
];

const sectorIcons = [Building2, Pickaxe, Truck, HardHat];

export default function Sectors() {
  const { t } = useLang();

  if (!t.sectors?.items?.length) return null;

  return (
    <section id="sectors" className="section sectors-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.sectors.tag}</span>
          <h2 className="section-title">{t.sectors.title}</h2>
          <p className="section-desc">{t.sectors.desc}</p>
        </div>

        <div className="sectors-grid" id="sectors-grid">
          {t.sectors.items.slice(0, 4).map((item, i) => {
            const Icon = sectorIcons[i] ?? Building2;

            return (
              <article
                key={item.id || i}
                className="sector-card"
                id={`sector-${item.id}`}
              >
                <Image
                  src={sectorImages[i]}
                  alt={item.name || "Sector"}
                  fill
                  className="sector-card-img"
                  sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 25vw"
                  priority={i < 2}
                  quality={90}
                />
                <div className="sector-card-overlay" />
                <div className="sector-card-content">
                  <div className="sector-card-header">
                    <Icon size={20} strokeWidth={2.25} />
                    <h3 className="sector-name">{item.name}</h3>
                  </div>
                  <p className="sector-desc">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="sectors-cta">
          <Link href="/products" className="btn-primary">
            {t.sectors.cta} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
