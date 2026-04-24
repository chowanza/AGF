import Image from "next/image";
import Link from "next/link";
import { Flame, Mountain, Truck, HardHat } from "lucide-react";

const sectors = [
  {
    id: "petroleum",
    name: "Petróleo y Gas",
    icon: Flame,
    description:
      "Soluciones logísticas especializadas para exploración, producción y distribución de hidrocarburos.",
    image: "/petroleo_bg.png",
    alt: "Plataforma petrolera - sector petróleo y gas",
    highlighted: false,
  },
  {
    id: "mining",
    name: "Minería",
    icon: Mountain,
    description:
      "Equipamiento y logística para proyectos mineros en cualquier parte del mundo.",
    image: "/mineria_bg.png",
    alt: "Operaciones mineras a cielo abierto",
    highlighted: false,
  },
  {
    id: "transport",
    name: "Transporte",
    icon: Truck,
    description:
      "Maximizamos estratégicamente el transporte en todas sus modalidades.",
    image: "/transporte_bg.png",
    alt: "Flota de camiones de transporte de carga",
    highlighted: true,
  },
  {
    id: "construction",
    name: "Construcción",
    icon: HardHat,
    description:
      "Material y equipamiento para el desarrollo de proyectos de construcción.",
    image: "/construccion_bg.png",
    alt: "Proyecto de construcción con grúas",
    highlighted: false,
  },
];

export default function Sectors() {
  return (
    <section className="section" id="sectors" style={{ background: "#fafaf5" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag" id="sectors-tag">
            Nuestras Industrias
          </span>
          <h2 className="section-title" id="sectors-title">
            Sectores que Atendemos
          </h2>
          <p className="section-desc">
            Brindamos soluciones logísticas integrales y especializadas para
            los principales sectores industriales a nivel mundial.
          </p>
        </div>

        <div className="sectors-grid" id="sectors-grid">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className={`sector-card ${sector.highlighted ? "highlighted" : ""}`}
                id={`sector-${sector.id}`}
              >
                <Image
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  className="sector-card-img"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="sector-card-overlay" />
                <div className="sector-card-content">
                  <div className="sector-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="sector-name">{sector.name}</h3>
                  <p className="sector-desc">{sector.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sectors-cta">
          <Link href="#contact" className="btn-primary" id="sectors-cta-btn">
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}
