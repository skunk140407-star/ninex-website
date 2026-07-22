"use client";

import { motion } from "framer-motion";


const titles = [
  {
    amount: "9x",
    title: "Copa América",
    subtitle: "Campeã",
  },
  {
    amount: "7x",
    title: "Pro League",
    subtitle: "Campeã",
  },
  {
    amount: "3x",
    title: "Arena Cup",
    subtitle: "Campeã",
  },
];

const timeline = [
  { year: "2026", event: "Copa América", place: "1º Lugar" },
  { year: "2026", event: "Pro League", place: "Campeã" },
  { year: "2025", event: "Arena Cup", place: "Campeã" },
  { year: "2025", event: "Invitational", place: "Top 3" },
  { year: "2024", event: "Copa América", place: "Campeã" },
];

export default function Championships() {
  return (
    <section
      id="championships"
      className="relative overflow-hidden bg-[#05050A] py-32"
    >
      {/* Background */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[.35em] text-violet-300">
            Conquistas
          </span>

          <h2 className="mt-8 text-6xl font-black text-white">
            NOSSA
            <span className="block text-violet-500">
              HISTÓRIA
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Cada campeonato representa dedicação, trabalho em equipe
            e a busca constante pela excelência competitiva.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">
                    {titles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              <h3 className="text-6xl font-black text-violet-500">
                {item.amount}
              </h3>

              <p className="mt-4 text-2xl font-bold text-white">
                {item.title}
              </p>

              <span className="mt-2 block text-zinc-400">
                {item.subtitle}
              </span>

              <div className="mt-8 h-1 w-12 rounded-full bg-violet-500 transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-24 max-w-5xl">

          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-violet-500 via-violet-400 to-transparent" />

          <div className="space-y-8">

            {timeline.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.event}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative ml-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="absolute -left-[43px] top-8 h-4 w-4 rounded-full border-4 border-[#05050A] bg-violet-500" />

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                  <div>
                    <span className="text-sm font-bold tracking-[0.3em] text-violet-400">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {item.event}
                    </h3>
                  </div>

                  <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
                    {item.place}
                  </span>

                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}