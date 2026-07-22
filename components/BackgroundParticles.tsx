"use client";

import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function BackgroundParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: "#07070A",
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 45,
        },
        color: {
          value: "#8B5CF6",
        },
        links: {
          enable: true,
          color: "#8B5CF6",
          distance: 160,
          opacity: 0.15,
        },
        move: {
          enable: true,
          speed: 0.8,
        },
        opacity: {
          value: 0.35,
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}