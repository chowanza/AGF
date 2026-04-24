import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <Image
        src="/home_bg.png"
        alt="Puerto marítimo con grúas y contenedores - AGF Group"
        fill
        priority
        className="hero-bg-img"
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="hero-bg" />

      {/* Content */}
      <div className="hero-content">
        <div className="animate-in">
          <span className="hero-badge" id="hero-badge">
            🌐 Operamos en más de 50 países
          </span>
        </div>

        <h1 className="hero-title animate-in delay-1" id="hero-title">
          Soluciones Globales de
          <br />
          <span>Cadena de Suministro</span>
        </h1>

        <p className="hero-subtitle animate-in delay-2" id="hero-subtitle">
          Petróleo y Gas, Minería, Transporte y Construcción
        </p>

        <div className="hero-cta-group animate-in delay-3">
          <Link href="#services" className="btn-primary" id="hero-cta-primary">
            Explora Nuestros Servicios
            <ArrowRight size={18} />
          </Link>
          <Link href="#contact" className="btn-outline" id="hero-cta-secondary">
            Contáctanos
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
