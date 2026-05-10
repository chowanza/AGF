"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const galleryImages = [
  "/new_infrastructure.png",
  "/new_lot_of_trucks.png",
  "/new_more_petroleum.png",
  "/new_more_petroleum2.png",
  "/new_petroleum.png",
  "/new_some_trucks.png",
  "/new_tower.png",
  "/new_tower_and_trucks.png",
  "/new_tower_cool_picture.png",
  "/new_truck.png",
] as const;

const AUTO_ADVANCE_MS = 4500;

type NewImagesCarouselSectionProps = {
  variant?: "home" | "about";
};

export default function NewImagesCarouselSection({ variant = "home" }: NewImagesCarouselSectionProps) {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const copy =
    lang === "es"
      ? {
          tag: variant === "home" ? "Galería operativa" : "Galería de campo",
          title: variant === "home" ? "Imágenes de operaciones AGF" : "Nuestra actividad en terreno",
          desc:
            variant === "home"
              ? "Una vista rápida de equipos, logística y operaciones que respaldan nuestros servicios."
              : "Registro visual de nuestras capacidades técnicas y soporte logístico en distintos entornos.",
          prev: "Imagen anterior",
          next: "Siguiente imagen",
        }
      : {
          tag: variant === "home" ? "Operations gallery" : "Field gallery",
          title: variant === "home" ? "AGF operations in images" : "Our field activity",
          desc:
            variant === "home"
              ? "A quick visual view of equipment, logistics, and operations behind our services."
              : "Visual record of our technical capabilities and logistics support in different environments.",
          prev: "Previous image",
          next: "Next image",
        };

  return (
    <section className="section new-gallery-section">
      <div className="container mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-header new-gallery-header">
          <span className="section-tag">{copy.tag}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-desc">{copy.desc}</p>
        </div>

        <div className="new-gallery-carousel" aria-roledescription="carousel">
          <div className="new-gallery-frame">
            <div className="new-gallery-image-wrap">
              <img
                src={galleryImages[activeIndex]}
                alt="AGF operations"
                className="new-gallery-image"
                loading="lazy"
              />
              <button
                type="button"
                className="new-gallery-arrow new-gallery-arrow-prev"
                onClick={goPrev}
                aria-label={copy.prev}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="new-gallery-arrow new-gallery-arrow-next"
                onClick={goNext}
                aria-label={copy.next}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="new-gallery-footer">
            <div className="new-gallery-counter">
              {activeIndex + 1} / {galleryImages.length}
            </div>
            <div className="new-gallery-progress" aria-hidden="true">
              <span style={{ width: `${((activeIndex + 1) / galleryImages.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
