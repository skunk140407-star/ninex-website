"use client";

export default function Championships() {
  const achievements = [
    {
      icon: "🏆",
      title: "Copa América",
      subtitle: "Campeã",
    },
    {
      icon: "🥇",
      title: "Arena Cup",
      subtitle: "Campeã",
    },
    {
      icon: "⚔️",
      title: "Pro League",
      subtitle: "Campeã",
    },
  ];

  const stats = [
    {
      value: "17",
      label: "Campeonatos",
    },
    {
      value: "300+",
      label: "Membros",
    },
    {
      value: "2022",
      label: "Fundação",
    },
    {
      value: "100%",
      label: "Competitividade",
    },
  ];

  return (
    <section
      id="campeonatos"
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="uppercase tracking-[6px] text-violet-400 text-sm">
            Campeonatos
          </span>

          <h2 className="mt-5 text-5xl font-black lg:text-6xl">
            Nossas
            <span className="text-violet-400"> Conquistas</span>
          </h2>

          <p className="mt-6 text-white/60">
            A vitória não é um objetivo, é uma obrigação.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass rounded-3xl border border-white/10 p-10 text-center transition hover:-translate-y-2"
            >
              <div className="text-6xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-violet-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="glass rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-black text-violet-400">
                {item.value}
              </h3>

              <p className="mt-3 text-white/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}