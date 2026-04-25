"use client";
import { useLang } from "@/context/LanguageContext";

export default function StatsBar() {
  const { t } = useLang();
  return (
    <div className="stats-bar" id="stats-bar">
      {t.stats.map((stat, i) => (
        <div className="stat-item" key={i} id={`stat-${i}`}>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
