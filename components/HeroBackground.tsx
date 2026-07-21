"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Fundo */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#050505]">

        {/* Glow superior */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-52
            left-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-violet-600/30
            blur-[170px]
          "
        />

        {/* Glow esquerdo */}
        <motion.div
          animate={{
            x: [-30, 20, -30],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-220px]
            top-32
            h-[520px]
            w-[520px]
            rounded-full
            bg-purple-700/20
            blur-[150px]
          "
        />

        {/* Glow direito */}
        <motion.div
          animate={{
            x: [20, -30, 20],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            bottom-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-fuchsia-600/20
            blur-[160px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Vinheta */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/70" />

      </div>
    </>
  );
}