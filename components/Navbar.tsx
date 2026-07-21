"use client";

import Image from "next/image";

const links = [
  "Home",
  "Sobre",
  "História",
  "Elenco",
  "Campeonatos",
  "Galeria",
  "Contato",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-[9999] w-full">
      <div className="mx-auto max-w-7xl px-8 py-5">
        <div className="flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-8 backdrop-blur-xl">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="NineX"
              width={45}
              height={45}
              priority
            />

            <span className="text-3xl font-black tracking-wide text-violet-400">
              NineX
            </span>
          </div>

          {/* Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 transition hover:text-violet-400"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Botão */}
          <a
            href="https://discord.gg/ninex"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-violet-600 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-violet-500"
          >
            Discord
          </a>

        </div>
      </div>
    </header>
  );
}