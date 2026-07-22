"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05050A]"
        >
          <div className="absolute h-[450px] w-[450px] rounded-full bg-violet-700/20 blur-[180px]" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/logo.png"
                alt="NineX"
                width={120}
                height={120}
                priority
              />
            </motion.div>

            <h1 className="mt-8 text-5xl font-black tracking-[0.35em] text-white">
              NINE<span className="text-violet-500">X</span>
            </h1>

            <p className="mt-4 text-zinc-400">
              Dominando o FiveM...
            </p>

            <div className="mt-10 h-[6px] w-72 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="relative h-full rounded-full bg-violet-500"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "300%" }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm"
                />
              </motion.div>
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-sm font-semibold tracking-[0.3em] text-violet-400"
            >
              LOADING...
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}