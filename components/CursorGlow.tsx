"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Point = {
  x: number;
  y: number;
};

export default function CursorGlow() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const move = (e: MouseEvent) => {
      setPoints((old) => [
        ...old.slice(-5),
        {
          x: e.clientX,
          y: e.clientY,
        },
      ]);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setPoints([]);
      }, 300);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      clearTimeout(timer);
    };
  }, []);


  const path = points
    .map((p, i) =>
      `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`
    )
    .join(" ");


  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[999]"
      width="100%"
      height="100%"
    >

      {/* brilho */}
      <motion.path
        d={path}
        fill="none"
        stroke="rgba(168,85,247,0.35)"
        strokeWidth="8"
        strokeLinecap="round"
        style={{
          filter: "blur(6px)",
        }}
      />

      {/* linha */}
      <motion.path
        d={path}
        fill="none"
        stroke="#a855f7"
        strokeWidth="2"
        strokeLinecap="round"
      />

    </svg>
  );
}