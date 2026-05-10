"use client";

import Image from "next/image";
import { Shield, Leaf, Users, Ban, Scale, ClipboardCheck } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const policyIcons = [Users, Scale, ClipboardCheck, Ban, Leaf];

export default function PoliciesPageContent() {
  const { t } = useLang();

  return (
    <main className="inner-page-main">
      <section className="inner-page-hero policy-hero">
        <Image
          src="/home_bg.png"
          alt="AGF Group policies"
          fill
          className="inner-page-hero-bg"
          sizes="100vw"
          priority
        />
        <div className="inner-page-hero-overlay" />
        <div className="inner-page-hero-content policy-hero-content">
          <div className="policy-hero-copy">
            {t.policiesPage.eyebrow ? (
              <span className="section-tag">{t.policiesPage.eyebrow}</span>
            ) : null}
            <h1 className="inner-page-title">{t.policiesPage.title}</h1>
            {t.policiesPage.intro ? (
              <p className="inner-page-intro">{t.policiesPage.intro}</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section policies-detail-section">
        <div className="container policies-detail-stack">
          {t.policiesPage.items.map((item, index) => {
            const Icon = policyIcons[index] ?? Shield;
            const isAlternate = index % 2 === 1;
            const listHeading = "listHeading" in item ? item.listHeading : undefined;
            const secondaryListHeading =
              "secondaryListHeading" in item ? item.secondaryListHeading : undefined;
            const secondaryBullets =
              "secondaryBullets" in item ? item.secondaryBullets : undefined;

            return (
              <article
                key={item.id}
                className={`policy-panel ${isAlternate ? "policy-panel-alt" : ""}`}
              >
                <div className="policy-panel-head">
                  <div className="policy-panel-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="policy-panel-content">
                  <div className="policy-panel-summary">
                    <h2>{item.title}</h2>
                    {Array.isArray(item.body) ? (
                      item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                    ) : (
                      <p>{item.body}</p>
                    )}
                  </div>

                  {listHeading || item.bullets.length > 0 || secondaryListHeading ? (
                    <div className="policy-panel-points">
                      {listHeading ? <h3>{listHeading}</h3> : null}

                      {item.bullets.length > 0 ? (
                        <ul className="policy-list">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}

                      {secondaryListHeading ? (
                        <h3 className="policy-panel-subheading">{secondaryListHeading}</h3>
                      ) : null}

                      {secondaryBullets?.length ? (
                        <ul className="policy-list">
                          {secondaryBullets.map((bullet: string) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
