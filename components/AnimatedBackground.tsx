"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07070A] pointer-events-none">
      {/* Glow esquerdo */}
      <motion.div
        className="absolute -left-80 -top-80 h-[900px] w-[900px] rounded-full bg-violet-600/20 blur-[220px]"
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow direito */}
      <motion.div
        className="absolute -right-80 bottom-[-300px] h-[900px] w-[900px] rounded-full bg-fuchsia-600/15 blur-[220px]"
        animate={{
          x: [40, -40, 40],
          y: [20, -20, 20],
          scale: [1.15, 1, 1.15],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Linha vertical */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[1500px]
          w-[2px]
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-violet-500/25
          to-transparent
        "
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Linha horizontal */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[1500px]
          w-[2px]
          rotate-90
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-fuchsia-500/20
          to-transparent
        "
        animate={{ rotate: [360, 0] }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Névoa */}
      <motion.div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-violet-500/10
          via-transparent
          to-fuchsia-500/10
          blur-[160px]
        "
        animate={{
          x: [-80, 80, -80],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Luz central */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/15
          blur-[180px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vinheta */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.65)_100%)]" />
    </div>
  );
}