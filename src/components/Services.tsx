"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const iconSrcs = ["/airplane_icon.svg", "/boat_icon.svg"];
const iconAlts = ["Airplane icon - Air freight", "Boat icon - Sea freight"];

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" style={{ padding: "5rem 2rem" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag" id="services-tag">{t.services.tag}</span>
          <h2 className="section-title" id="services-title">{t.services.title}</h2>
        </div>
        <div className="services-section" id="services-grid">
          {/* Left green panel */}
          <div className="services-left">
            <h3
              className="section-title"
              style={{ color: "white", textAlign: "left", marginBottom: "2rem" }}
              id="services-left-title"
            >
              {t.services.leftTitle.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h3>
            <div className="service-items">
              {t.services.items.map((item, i) => (
                <div className="service-item" key={item.id} id={`service-${item.id}`}>
                  <div className="service-item-icon">
                    <Image src={iconSrcs[i]} alt={iconAlts[i]} width={36} height={36} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="service-item-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="#contact" className="btn-primary" style={{ alignSelf: "flex-start" }} id="services-more-btn">
              {t.services.cta} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="services-right" id="services-images" style={{ position: "relative" }}>
            <Image
              src="/global_logistics.png"
              alt="Nuestros Servicios Logísticos"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={95}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
