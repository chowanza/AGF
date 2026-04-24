const stats = [
  { number: "+50", label: "Países atendidos" },
  { number: "+20", label: "Años de experiencia" },
  { number: "98.7%", label: "Entregas a tiempo" },
  { number: "+500", label: "Clientes globales" },
];

export default function StatsBar() {
  return (
    <div className="stats-bar" id="stats-bar">
      {stats.map((stat, i) => (
        <div className="stat-item" key={i} id={`stat-${i}`}>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
