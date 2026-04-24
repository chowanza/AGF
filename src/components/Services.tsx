import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceItems = [
  {
    id: "air-freight",
    iconSrc: "/airplane_icon.svg",
    iconAlt: "Ícono avión - carga aérea",
    title: "Carga Aérea",
    description:
      "Servicio desde/hacia cualquier parte del mundo. Rapidez, seguridad y fiabilidad. Manejo de carga general y especial, incluyendo productos perecederos y peligrosos.",
  },
  {
    id: "sea-freight",
    iconSrc: "/boat_icon.svg",
    iconAlt: "Ícono barco - carga marítima",
    title: "Carga Marítima",
    description:
      "Cobertura global. Transporte FCL (Carga Completa) y LCL (Carga Consolidada). Cobertura global. Asesoramiento en aduanas y documentación.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "5rem 2rem" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag" id="services-tag">
            Lo que ofrecemos
          </span>
          <h2 className="section-title" id="services-title">
            Nuestro Servicios Logísticos Clave
          </h2>
        </div>

        <div className="services-section" id="services-grid">
          {/* Left - green panel */}
          <div className="services-left">
            <h3
              className="section-title"
              style={{ color: "white", textAlign: "left", marginBottom: "2rem" }}
              id="services-left-title"
            >
              Nuestro Servicios
              <br />
              Logísticos Clave
            </h3>

            <div className="service-items">
              {serviceItems.map((item) => (
                <div className="service-item" key={item.id} id={`service-${item.id}`}>
                  <div className="service-item-icon">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={36}
                      height={36}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="service-item-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="btn-primary"
              style={{ alignSelf: "flex-start" }}
              id="services-more-btn"
            >
              Más información
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right - real image from Figma assets */}
          <div className="services-right" id="services-images">
            <div style={{ overflow: "hidden", position: "relative" }}>
              <Image
                src="/nuestros_servicios_logisticos.png"
                alt="Servicios logísticos de AGF Group - avión y puerto"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="50vw"
              />
            </div>
            <div style={{ overflow: "hidden", position: "relative" }}>
              <Image
                src="/nuestros_servicios_logisticos.png"
                alt="Servicios logísticos de AGF Group - operaciones portuarias"
                fill
                style={{ objectFit: "cover", objectPosition: "bottom" }}
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
