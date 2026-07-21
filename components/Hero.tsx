"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090B]">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-[#09090B] via-[#13071F] to-[#09090B]" />

        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-violet-700/15 blur-[180px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-fuchsia-700/15 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Conteúdo */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
              Organização Competitiva
            </span>

            <h1 className="mt-8 text-6xl font-black leading-none text-white md:text-7xl xl:text-8xl">
              Nine
              <span className="text-violet-500">X</span>
            </h1>

            <h2 className="mt-8 max-w-xl text-4xl font-bold leading-tight text-white xl:text-5xl">
              Dominando o cenário competitivo do FiveM.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Reunimos jogadores de alto nível para competir, evoluir e
              conquistar títulos, construindo uma das organizações mais
              respeitadas do cenário competitivo.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="#"
                className="group flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
              >
                Entrar no Discord

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </Link>

              <Link
  href="https://discord.gg/ninex"
  target="_blank"
  rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-violet-500/30 hover:bg-white/10"
              >
                Conheça a NineX
              </Link>
            </div>

          </motion.div>

          {/* Personagem */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[900px]
                w-[700px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-violet-500/30
                blur-[100px]
              "
            />

            {/* Luz inferior */}

            <div
              className="
                absolute
                bottom-0
                h-40
                w-96
                rounded-full
                bg-violet-500/25
                blur-[90px]
              "
            />

            {/* Personagem */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/images/hero.png"
                alt="NineX"
                width={900}
                height={1200}
                priority
                draggable={false}
                className="
                  h-auto
                  w-[1500px]
                  select-none
                  drop-shadow-[0_0_100px_rgba(124,58,237,.55)]
                  lg:w-[1000px]
                  xl:w-[1000px]
                "
              />
            </motion.div>

            {/* Detalhes */}

            <div className="absolute left-10 top-20 h-2 w-2 rounded-full bg-violet-400" />
            <div className="absolute right-10 top-36 h-3 w-3 rounded-full bg-fuchsia-500" />
            <div className="absolute bottom-24 left-24 h-2 w-2 rounded-full bg-violet-300" />

          </motion.div>

        </div>

      </div>

      {/* ================= Stats ================= */}

      <div className="relative z-20 border-t border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

            {[
              {
                number: "17",
                title: "Campeonatos",
              },
              {
                number: "300+",
                title: "Membros",
              },
              {
                number: "2022",
                title: "Fundação",
              },
              {
                number: "97%",
                title: "Win Rate",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: .2,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-xl
                "
              >
                <h3 className="text-4xl font-black text-white lg:text-5xl">
                  {item.number}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {item.title}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </div>

      {/* Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />

    </section>
  );
}