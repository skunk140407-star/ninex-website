"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

const members = [
  {
    name: "Gr",
    role: "Founder",
    image: "/team/gr.jpg",
    discord: "discord://-/users/1514570067596021790",
  },
  {
    name: "Chumaker",
    role: "Owner",
    image: "/team/chumaker.webp",
    discord: "discord://-/users/1523349948761116813",
  },
  {
    name: "Nyx",
    role: "Owner",
    image: "/team/nyx.jpg",
    discord: "discord://-/users/1516219747908452484",
  },
  {
    name: "Ss4nt",
    role: "Owner",
    image: "/team/ssant.png",
    discord: "discord://-/users/1509957555718324345",
  },
    {
    name: "DaBopi",
    role: "Owner",
    image: "/team/dabopi.gif",
    discord: "discord://-/users/1113653902085193778",
  },
  {
    name: "Skunk",
    role: "Player",
    image: "/team/skunk.gif",
    discord: "discord://-/users/1503687908299903078",
  },
  {
    name: "Fissura",
    role: "Player",
    image: "/team/fissura.jpg",
    discord: "discord://-/users/530005771874992128",
  },
  {
    name: "Gaby",
    role: "Player",
    image: "/team/Gaby.webp",
    discord: "discord://-/users/831697104052813854",
  },
  {
    name: "João",
    role: "Player",
    image: "/team/joao.jpg",
    discord: "discord://-/users/1202756834054766632",
  },
  {
    name: "Rabello",
    role: "Player",
    image: "/team/rabello.gif",
    discord: "discord://-/users/1504243173457658059",
  },
  {
    name: "Rodolfo",
    role: "Player",
    image: "/team/rodolfo.jpg",
    discord: "discord://-/users/494265667730669590",
  },
  {
    name: "Knusking",
    role: "Player",
    image: "/team/knusking.jpg",
    discord: "discord://-/users/1455766871298019431",
  },
  {
    name: "Martins",
    role: "Player",
    image: "/team/martins.png",
    discord: "discord://-/users/1516811770277269673",
  },
  {
    name: "Correa",
    role: "Player",
    image: "/team/correa.png",
    discord: "discord://-/users/1403413598138531935",
  },
];

const filters = ["Todos", "Founder", "Owner", "Player"] as const;

export default function Team() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");

  const filteredMembers = useMemo(() => {
    if (filter === "Todos") return members;
    return members.filter((m) => m.role === filter);
  }, [filter]);

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#05050A] pt-36 pb-16"
    >
      <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-violet-700/15 blur-[220px]" />

      <div className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-fuchsia-700/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[.35em] text-violet-300">
            Nossa Equipe
          </span>

          <h2 className="mt-8 text-6xl font-black text-white">
            QUEM FAZ A
            <span className="block text-violet-500">
              NINEX
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Conheça os membros que representam a organização
            dentro e fora das competições.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  filter === item
                    ? "bg-violet-600 text-white shadow-[0_0_35px_rgba(139,92,246,.45)]"
                    : "border border-white/10 bg-white/5 text-zinc-300 hover:border-violet-500 hover:bg-violet-500/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </motion.div>

        {/* Grid */}

        <motion.div
          layout
          className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredMembers.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.discord}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_70px_rgba(139,92,246,.35)]"
            >

              {/* Glow */}

              <div className="absolute inset-0 bg-violet-600/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Image */}

              <div className="relative h-[430px] overflow-hidden">                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-black/30 to-transparent" />

              </div>

              {/* Content */}

              <div className="relative z-10 p-7">

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-violet-400">
                  {member.role}
                </span>

                <h3 className="mt-3 text-4xl font-black text-white transition-colors duration-300 group-hover:text-violet-300">
                  {member.name}
                </h3>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm text-zinc-400">
                    Ver Perfil
                  </span>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10"
                  >
                    <ExternalLink
                      size={18}
                      className="text-violet-400"
                    />
                  </motion.div>

                </div>

              </div>

            </motion.a>
          ))}
        </motion.div>
                {/* Bottom Glow */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-violet-950/20 to-transparent" />

      </div>
    </section>
  );
}