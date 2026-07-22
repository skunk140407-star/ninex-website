"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#05050A]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#05050A] via-[#09070F] to-[#12071A]" />

      <div className="absolute -left-72 top-0 h-[850px] w-[850px] rounded-full bg-violet-600/20 blur-[220px]" />

      <div className="absolute -right-72 top-0 h-[850px] w-[850px] rounded-full bg-fuchsia-600/15 blur-[220px]" />

      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 backdrop-blur-xl">

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-violet-300">
                9X CAMPEÃ DA COPA AMÉRICA
              </span>

            </div>

            {/* Logo */}

            <h2 className="mt-10 text-7xl font-black uppercase leading-none">

              <span className="text-white">
                NINE
              </span>

              <span className="text-violet-500">
                X
              </span>

            </h2>

            {/* Title */}

            <h1 className="mt-8 leading-[0.9]">

              <span className="block text-[90px] font-black text-white xl:text-[110px]">
                DOMINANDO
              </span>

              <span className="block bg-gradient-to-r from-violet-300 via-violet-500 to-fuchsia-500 bg-clip-text text-[90px] font-black text-transparent xl:text-[110px]">
                O FIVEM.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
              A NineX reúne alguns dos melhores jogadores competitivos do
              FiveM, conquistando títulos nacionais e internacionais enquanto
              constrói uma comunidade forte e organizada.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#championships"
                className="rounded-2xl bg-violet-600 px-9 py-5 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500 shadow-[0_0_45px_rgba(139,92,246,.45)]"
              >
                Ver Conquistas
              </a>

              <a
                href="#team"
                className="rounded-2xl border border-white/10 bg-white/5 px-9 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
              >
                Nossa Equipe
              </a>

            </div>
                        {/* Championship Card */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <div className="grid grid-cols-3 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">

                <div className="border-r border-white/10 px-8 py-7">
                  <p className="text-5xl font-black text-violet-500">
                    9x
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    Campeã
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Copa América
                  </p>
                </div>

                <div className="border-r border-white/10 px-8 py-7">
                  <p className="text-5xl font-black text-violet-500">
                    7x
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    Pro League
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Campeã
                  </p>
                </div>

                <div className="px-8 py-7">
                  <p className="text-5xl font-black text-violet-500">
                    3x
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    Arena Cup
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Campeã
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
                        {/* Purple Glow */}

            <div className="absolute h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[180px]" />

            {/* Hero Card */}

            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-[40px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl"
            >
              {/* Image */}

              <Image
                src="/images/hero.png"
                alt="NineX"
                width={760}
                height={900}
                priority
                className="relative z-10 w-full max-w-[700px] object-contain"
              />

              {/* Champion Badge */}

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute right-6 top-6 z-20 rounded-3xl border border-violet-500/30 bg-[#0A0A10]/80 px-6 py-5 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  CHAMPION
                </p>

                <h3 className="mt-2 text-5xl font-black text-violet-400">
                  9x
                </h3>

                <p className="mt-1 text-sm text-zinc-300">
                  Copa América
                </p>
              </motion.div>

              {/* Community Badge */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 z-20 rounded-3xl border border-white/10 bg-[#0A0A10]/80 px-6 py-5 backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  COMUNIDADE
                </p>

                <h3 className="mt-2 text-5xl font-black text-white">
                  1K+
                </h3>

                <p className="mt-1 text-sm text-zinc-300">
                  Membros
                </p>
              </motion.div>

            </motion.div>

          </motion.div>
                    {/* Floating Glow */}

          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-violet-500/20 blur-[90px]"
          />

          <motion.div
            animate={{
              y: [15, -15, 15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-[120px]"
          />

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#05050A] via-[#05050A]/80 to-transparent" />

      {/* Decorative Line */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[90%] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

    </section>
  );
}