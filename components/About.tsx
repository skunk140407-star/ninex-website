"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-36 overflow-hidden bg-[#050505]"
    >
      {/* Glow */}
      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-violet-700/20 blur-[180px]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-8 lg:flex-row">

        {/* Imagem */}
        <div className="relative flex-1">
          <div className="absolute inset-0 rounded-3xl bg-violet-600/20 blur-3xl" />

          <Image
            src="/images/about.png"
            alt="NineX"
            width={650}
            height={750}
            className="relative z-10 rounded-3xl"
          />
        </div>

        {/* Texto */}
        <div className="flex-1">

          <span className="text-sm uppercase tracking-[6px] text-violet-400">
            Sobre a NineX
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight lg:text-6xl">
            Mais que uma organização.
            <br />
            <span className="text-violet-400">
              Uma referência no competitivo.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-white/70">
            A <strong className="text-white">NineX</strong> nasceu em
            <strong className="text-violet-400"> 2022</strong> com o objetivo de
            reunir jogadores competitivos do FiveM.
          </p>

          <p className="mt-5 text-lg leading-9 text-white/70">
            Ao longo do tempo conquistou
            <strong className="text-violet-400">
              {" "}17 campeonatos
            </strong>{" "}
            e se consolidou como uma das maiores organizações competitivas
            da comunidade.
          </p>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-2 gap-5">

            <div className="glass rounded-3xl p-6">
              <h3 className="text-4xl font-black text-violet-400">
                2022
              </h3>

              <p className="mt-2 text-white/60">
                Fundação
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-4xl font-black text-violet-400">
                17
              </h3>

              <p className="mt-2 text-white/60">
                Campeonatos
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}