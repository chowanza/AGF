import Image from "next/image";
import { Shield, Globe2, Clock, Award, Headphones, TrendingUp } from "lucide-react";

const features = [
  {
    id: "global-network",
    icon: Globe2,
    title: "Red Global",
    description:
      "Presencia en más de 50 países con socios estratégicos certificados.",
  },
  {
    id: "security",
    icon: Shield,
    title: "Seguridad Total",
    description:
      "Procesos auditados y certificados para proteger su carga en todo momento.",
  },
  {
    id: "on-time",
    icon: Clock,
    title: "Puntualidad",
    description:
      "98.7% de cumplimiento en tiempos de entrega según compromisos establecidos.",
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excelencia",
    description:
      "Certificaciones ISO 9001 y BASC que garantizan la calidad de nuestros servicios.",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Soporte 24/7",
    description:
      "Equipo dedicado disponible en todo momento para atender sus necesidades.",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Crecimiento",
    description:
      "Soluciones escalables que crecen con su empresa y se adaptan a su demanda.",
  },
];

export default function WhyAGF() {
  return (
    <section className="why-agf" id="about">
      {/* Subtle texture overlay */}
      <div className="why-agf-overlay" />

      <div className="why-agf-content">
        <div className="why-grid">
          {/* Left column */}
          <div className="why-left">
            <span className="section-tag" id="why-agf-tag">
              Nuestra Propuesta de Valor
            </span>
            <h2 className="section-title" id="why-agf-title">
              ¿Por qué AGF?
            </h2>
            <p className="section-desc" id="why-agf-desc">
              En AGF Group combinamos décadas de experiencia con tecnología de
              punta para ofrecer soluciones logísticas que superan las
              expectativas de nuestros clientes. Somos su socio estratégico de
              confianza en la cadena de suministro global.
            </p>

            <div className="why-features" id="why-features-grid">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div className="why-feature" key={feature.id} id={`why-${feature.id}`}>
                    <div className="why-feature-icon">
                      <Icon size={18} />
                    </div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column - real footer/construction bg image */}
          <div className="why-right">
            <Image
              src="/footer_bg.png"
              alt="Operaciones logísticas AGF Group - infraestructura industrial"
              fill
              className="why-img-main"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="why-img-badge" id="why-badge">
              <strong>+20</strong>
              <span>Años de experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
