"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: .7,
        duration: .6,
      }}
      className="mt-12 flex flex-wrap gap-5"
    >
      {/* Botão Principal */}

      <motion.a
        href="#"
        whileHover={{
          scale: 1.04,
          y: -3,
        }}
        whileTap={{
          scale: .97,
        }}
        className="
        group
        relative
        overflow-hidden
        rounded-full
        bg-violet-600
        px-9
        py-4
        font-bold
        shadow-[0_0_40px_rgba(139,92,246,.45)]
        "
      >
        {/* Shine */}

        <span
          className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          group-hover:translate-x-full
          duration-1000
          "
        />

        <span className="relative flex items-center gap-3">

          Entrar no Discord

          <ArrowRight
            size={20}
            className="transition group-hover:translate-x-1"
          />

        </span>

      </motion.a>

      {/* Botão Secundário */}

      <motion.a
        href="#about"
        whileHover={{
          y: -3,
          scale: 1.03,
        }}
        whileTap={{
          scale: .97,
        }}
        className="
        group
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-9
        py-4
        transition
        hover:border-violet-500/40
        hover:bg-violet-500/10
        "
      >
        <span className="flex items-center gap-3">

          <Trophy
            size={18}
            className="
            text-violet-400
            transition
            group-hover:rotate-12
            "
          />

          Nossa História

        </span>

      </motion.a>

    </motion.div>
  );
}