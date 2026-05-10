"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="home">
      <Image
        src="/home_bg.webp"
        alt="Puerto marítimo con grúas y contenedores - AGF Group"
        fill
        priority
        className="hero-bg-img"
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />
      <div className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-title animate-in delay-1" id="hero-title">
          {t.hero.title1}
          <br />
          <span>{t.hero.title2}</span>
        </h1>
        <p className="hero-subtitle animate-in delay-2" id="hero-subtitle">
          {t.hero.subtitle}
        </p>
        <div className="hero-cta-group animate-in delay-3">
          <Link href="/service" className="btn-primary" id="hero-cta-primary">
            {t.hero.cta1} <ArrowRight size={18} />
          </Link>
          <Link href="/contact-us" className="btn-outline" id="hero-cta-secondary">
            {t.hero.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
