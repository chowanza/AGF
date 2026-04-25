"use client";
import Image from "next/image";
import Link from "next/link";
import { Flame, Mountain, Truck, HardHat } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const sectorImages = [
  { image: "/petroleo_bg.png", alt: "Sector Petróleo y Gas", icon: Flame },
  { image: "/mineria_bg.png", alt: "Sector Minería", icon: Mountain },
  { image: "/transporte_bg.png", alt: "Sector Transporte", icon: Truck, highlighted: true },
  { image: "/construccion_bg.png", alt: "Sector Construcción", icon: HardHat },
];

export default function Sectors() {
  const { t } = useLang();
  return (
    <section className="section" id="sectors" style={{ background: "#fafaf5" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag" id="sectors-tag">{t.sectors.tag}</span>
          <h2 className="section-title" id="sectors-title">{t.sectors.title}</h2>
          <p className="section-desc">{t.sectors.desc}</p>
        </div>
        <div className="sectors-grid" id="sectors-grid">
          {t.sectors.items.map((item, i) => {
            const { image, alt, icon: Icon, highlighted } = sectorImages[i];
            return (
              <div
                key={item.id}
                className={`sector-card ${highlighted ? "highlighted" : ""}`}
                id={`sector-${item.id}`}
              >
                <Image src={image} alt={alt} fill className="sector-card-img" sizes="(max-width: 900px) 50vw, 25vw" priority quality={90} style={{ objectFit: "cover" }} />
                <div className="sector-card-overlay" />
                <div className="sector-card-content">
                  <div className="sector-card-header">
                    <Icon size={22} strokeWidth={2.5} />
                    <h3 className="sector-name">{item.name}</h3>
                  </div>
                  <p className="sector-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sectors-cta">
          <Link href="#contact" className="btn-primary" id="sectors-cta-btn">{t.sectors.cta}</Link>
        </div>
      </div>
    </section>
  );
}
