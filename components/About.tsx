"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
  id="sobre"
  className="relative overflow-hidden bg-[#07070A] py-40"
    >
      {/* Glow */}
      <div className="absolute -left-48 top-0 h-[600px] w-[600px] rounded-full bg-violet-700/20 blur-[220px]" />
      <div className="absolute -right-52 bottom-0 h-[550px] w-[550px] rounded-full bg-fuchsia-700/15 blur-[220px]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-24 px-8 lg:flex-row">

{/* Imagem */}

<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="relative flex-1 flex justify-center"
>

  {/* Glow */}

  <div className="absolute h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[180px]" />

  <div className="absolute h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-[140px]" />

  {/* Logo ao fundo */}

  <Image
    src="/images/logo.png"
    alt="Logo"
    width={700}
    height={700}
    draggable={false}
    className="
      absolute
      w-[420px]
      opacity-[0.06]
      blur-[2px]
      select-none
      pointer-events-none
      lg:w-[560px]
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
      src="/images/about.png"
      alt="NineX"
      width={700}
      height={850}
      draggable={false}
      className="
        rounded-3xl
        drop-shadow-[0_0_100px_rgba(139,92,246,.55)]
      "
    />

  </motion.div>

</motion.div>

{/* Texto */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="flex-1"
>

  <span className="text-sm font-semibold uppercase tracking-[8px] text-violet-400">
    Sobre a NineX
  </span>

  <h2 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">

    Mais que uma

    <br />

    <span className="text-violet-500">
      organização.
    </span>

  </h2>

  <p className="mt-8 text-lg leading-9 text-white/70">

    A NineX nasceu em <span className="font-bold text-violet-400">2022</span>
    com o objetivo de reunir os melhores jogadores competitivos do FiveM,
    formando uma organização focada em evolução, disciplina e resultados.

  </p>

  <p className="mt-6 text-lg leading-9 text-white/70">

    Hoje somos uma das equipes mais respeitadas da comunidade,
    acumulando títulos, grandes campanhas e uma base sólida de membros.

  </p>

  <div className="mt-12 grid grid-cols-2 gap-5">

    {[
      {
        number: "2022",
        title: "Fundação",
      },
      {
        number: "17",
        title: "Campeonatos",
      },
      {
        number: "300+",
        title: "Membros",
      },
      {
        number: "97%",
        title: "Win Rate",
      },
    ].map((item) => (

      <motion.div
        key={item.title}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        transition={{
          duration: .25,
        }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-6
          backdrop-blur-xl
          transition-all
          hover:border-violet-500/30
          hover:bg-white/[0.06]
        "
      >

        <h3 className="text-4xl font-black text-violet-400">
          {item.number}
        </h3>

        <p className="mt-2 text-white/60">
          {item.title}
        </p>

      </motion.div>

    ))}

  </div>

  </motion.div>

      </div>

    </section>
  );
}