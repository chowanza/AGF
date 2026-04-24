import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Share2, Send, Users, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Policies", href: "#policies" },
  { label: "Products", href: "#sectors" },
  { label: "Services", href: "#services" },
  { label: "Contact us", href: "#contact" },
];

const services = [
  { label: "Carga Aérea", href: "#services" },
  { label: "Carga Marítima", href: "#services" },
  { label: "Transporte Terrestre", href: "#services" },
  { label: "Agencia Aduanal", href: "#services" },
  { label: "Almacenamiento", href: "#services" },
  { label: "Logística Integral", href: "#services" },
];

const socialLinks = [
  { icon: Share2, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Users, href: "#", label: "Facebook" },
  { icon: Send, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background image with dark overlay */}
      <Image
        src="/footer_bg.png"
        alt="AGF Group footer background - infraestructura industrial"
        fill
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
        sizes="100vw"
      />
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #6b7c3a, #c8d44a, #6b7c3a)",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/logo.svg"
                alt="AGF Group Logo"
                width={121}
                height={34}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p>
              Líderes en soluciones globales de cadena de suministro para los
              sectores de Petróleo y Gas, Minería, Transporte y Construcción.
              Conectamos su negocio con el mundo.
            </p>
            <div className="footer-social">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label} id={`footer-social-${s.label.toLowerCase()}`}>
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} id={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} id={`footer-service-${s.label.toLowerCase().replace(/ /g, "-")}`}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <div className="footer-contact-item">
              <MapPin size={14} />
              <span>Av. Principal, Torre AGF, Piso 12<br />Caracas, Venezuela</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} />
              <span>+58 212 555 0000</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <span>info@agfgroup.com</span>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <Link href="mailto:info@agfgroup.com" className="btn-primary" id="footer-cta-btn" style={{ fontSize: "0.8rem", padding: "0.65rem 1.4rem" }}>
                Envíanos un mensaje
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AGF Group. Todos los derechos reservados.</span>
          <span>
            <Link href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", marginRight: "1rem" }}>
              Política de Privacidad
            </Link>
            <Link href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Términos y Condiciones
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
