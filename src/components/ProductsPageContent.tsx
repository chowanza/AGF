"use client";

import Image from "next/image";
import { Factory, Truck, Wrench } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const categoryIcons = [Factory, Wrench, Truck];

export default function ProductsPageContent() {
  const { t } = useLang();

  return (
    <main className="inner-page-main">
      <section className="inner-page-hero">
        <Image
          src="/global_logistics.png"
          alt="AGF Group products"
          fill
          className="inner-page-hero-bg"
          sizes="100vw"
          priority
        />
        <div className="inner-page-hero-overlay" />
        <div className="inner-page-hero-content">
          <span className="section-tag">{t.productsPage.eyebrow}</span>
          <h1 className="inner-page-title">{t.productsPage.title}</h1>
          <p className="inner-page-intro">{t.productsPage.intro}</p>
        </div>
      </section>

      <section className="section about-page-section">
        <div className="container product-category-stack">
          {t.productsPage.categories.map((category, index) => {
            const Icon = categoryIcons[index] ?? Factory;

            return (
              <section key={category.id} className="product-category-card">
                <div className="product-category-header">
                  <div className="about-detail-icon">
                    <Icon size={18} />
                  </div>
                  <h2>{category.title}</h2>
                </div>
                <div className="product-groups-grid">
                  {category.groups.map((group) => (
                    <article key={group.title} className="product-group-card">
                      <h3>{group.title}</h3>
                      <ul className="policy-list">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
