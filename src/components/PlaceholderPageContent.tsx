"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function PlaceholderPageContent({ title }: { title: string }) {
  const { t } = useLang();

  return (
    <main className="inner-page-main placeholder-page">
      <section className="section placeholder-section">
        <div className="container placeholder-box">
          <span className="section-tag">{t.pageStatus.eyebrow}</span>
          <h1 className="section-title">{title}</h1>
          <p className="section-desc">{t.pageStatus.body}</p>
          <Link href="/" className="btn-primary">
            {t.pageStatus.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
