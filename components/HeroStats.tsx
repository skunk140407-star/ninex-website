"use client";

const stats = [
  {
    value: "8",
    label: "Campeonatos",
  },
  {
    value: "300+",
    label: "Membros",
  },
  {
    value: "97%",
    label: "Win Rate",
  },
  {
    value: "2023",
    label: "Fundação",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="glass glow rounded-3xl p-8 hover:scale-105 duration-300"
        >
          <h2 className="text-6xl font-black text-violet-400">
            {item.value}
          </h2>

          <p className="mt-2 text-white/60">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}