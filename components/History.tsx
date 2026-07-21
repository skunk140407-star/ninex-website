"use client";

export default function History() {
  return (
    <section
      id="historia"
      className="relative bg-[#050505] py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <div className="text-center">
          <span className="text-sm uppercase tracking-[6px] text-violet-400">
            Nossa História
          </span>

          <h2 className="mt-6 text-5xl font-black lg:text-6xl">
            Uma história feita
            <br />
            <span className="text-violet-400">
              para vencer.
            </span>
          </h2>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          <div className="glass rounded-3xl p-8">
            <p className="text-violet-400 font-bold text-xl">2022</p>
            <h3 className="mt-3 text-3xl font-bold">
              Fundação
            </h3>
            <p className="mt-4 text-white/70 leading-8">
              A NineX nasceu com o objetivo de reunir jogadores competitivos
              do FiveM e construir uma organização forte.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <p className="text-violet-400 font-bold text-xl">2022</p>
            <h3 className="mt-3 text-3xl font-bold">
              Primeiros Torneios
            </h3>
            <p className="mt-4 text-white/70 leading-8">
              A organização começou a disputar grandes campeonatos e rapidamente
              chamou atenção da comunidade.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <p className="text-violet-400 font-bold text-xl">2023</p>
            <h3 className="mt-3 text-3xl font-bold">
              Reconhecimento
            </h3>
            <p className="mt-4 text-white/70 leading-8">
              A NineX se consolidou como uma das equipes mais respeitadas do
              cenário competitivo.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 border border-violet-500/40">
            <p className="text-violet-400 font-bold text-xl">Hoje</p>
            <h3 className="mt-3 text-3xl font-bold">
              17 Campeonatos
            </h3>
            <p className="mt-4 text-white/70 leading-8">
              Com 17 títulos conquistados, a NineX continua evoluindo e
              buscando novos desafios.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}