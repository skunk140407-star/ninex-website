"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#sobre" },
  { name: "História", href: "#historia" },
  { name: "Elenco", href: "#elenco" },
  { name: "Campeonatos", href: "#campeonatos" },
  { name: "Galeria", href: "#galeria" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          className={`
            flex
            h-20
            items-center
            justify-between
            rounded-3xl
            px-8
            transition-all
            duration-500
            ${
              scrolled
                ? "border border-violet-500/20 bg-black/60 backdrop-blur-2xl shadow-[0_0_45px_rgba(139,92,246,.18)]"
                : "border border-transparent bg-transparent"
            }
          `}
        >
                    {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-4 select-none"
          >
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              transition={{ duration: .25 }}
            >
              <Image
                src="/images/logo.png"
                alt="NineX"
                width={46}
                height={46}
                priority
              />
            </motion.div>

            <span className="text-3xl font-black tracking-wide text-white">
              Nine<span className="text-violet-500">X</span>
            </span>
          </a>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-10 lg:flex">

            {links.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="
                  group
                  relative
                  text-sm
                  font-medium
                  text-white/75
                  transition
                  duration-300
                  hover:text-white
                "
              >

                {item.name}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-violet-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

              </a>

            ))}

          </nav>

          {/* Discord */}

          <a
            href="https://discord.gg/ninex"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              hidden
              overflow-hidden
              rounded-full
              border
              border-violet-500/30
              bg-violet-600
              px-7
              py-3
              font-semibold
              text-white
              shadow-[0_0_30px_rgba(139,92,246,.35)]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-violet-500
              hover:shadow-[0_0_50px_rgba(139,92,246,.6)]
              lg:flex
            "
          >

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
              "
            />

            <span className="relative">
              🚀 Entrar no Discord
            </span>

          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden"
          >

            {menuOpen ? <X size={28} /> : <Menu size={28} />}

          </button>
                    {/* Mobile Menu */}

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="
                absolute
                left-0
                top-[105%]
                w-full
                rounded-3xl
                border
                border-violet-500/20
                bg-black/90
                p-6
                backdrop-blur-2xl
                lg:hidden
              "
            >

              <nav className="flex flex-col gap-5">

                {links.map((item) => (

                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      rounded-xl
                      px-4
                      py-3
                      text-white/80
                      transition
                      hover:bg-violet-500/10
                      hover:text-violet-400
                    "
                  >
                    {item.name}
                  </a>

                ))}

              </nav>

              <a
                href="https://discord.gg/ninex"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  flex
                  justify-center
                  rounded-2xl
                  bg-violet-600
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-violet-500
                "
              >
                🚀 Entrar no Discord
              </a>

            </motion.div>

          )}
                  </motion.div>
      </div>
    </header>
  );
}