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
          src="/global_logistics.webp"
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
            const imgSrc = `/prod_${category.id.replace('-', '_')}.webp`;

            return (
              <section key={category.id} className="product-category-card" style={{ display: 'flex', flexDirection: 'column', marginBottom: '4rem', background: '#fff', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '350px' }}>
                  <Image src={imgSrc} alt={category.title} fill style={{ objectFit: 'cover' }} sizes="100vw" />
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <div className="product-category-header" style={{ marginBottom: '2rem' }}>
                    <div className="about-detail-icon">
                      <Icon size={18} />
                    </div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>{category.title}</h2>
                  </div>
                  <div className="product-groups-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
                    {category.groups.map((group) => (
                      <article key={group.title} className="product-group-card" style={{ padding: '1.5rem', boxShadow: 'none', background: '#f8f9f5', borderRadius: '1rem', border: '1px solid rgba(59, 86, 40, 0.1)' }}>
                        <h3 style={{ fontSize: '1.1rem', color: '#3B5628', marginBottom: '1rem', fontWeight: 700 }}>{group.title}</h3>
                        <ul className="policy-list" style={{ listStyle: 'none', padding: 0 }}>
                          {group.items.map((item) => (
                            <li key={item} style={{ position: 'relative', paddingLeft: '1.2rem', marginBottom: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.4 }}>
                              <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', backgroundColor: '#C0C049', borderRadius: '50%' }}></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
