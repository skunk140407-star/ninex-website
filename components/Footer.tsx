"use client";

import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  MessageCircle,
  Music2,
  Globe,
} from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Campeonatos", href: "#championships" },
  { name: "Equipe", href: "#team" },
];

const socials = [
  {
    icon: MessageCircle,
    href: "https://discord.gg/ninex",
  },
  {
    icon: Globe,
    href: "https://instagram.com/",
  },
  {
    icon: Music2,
    href: "https://www.tiktok.com/@ninexfivem_",
  },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05050A]">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Marca */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div className="flex items-center gap-4">

              <Image
                src="/images/logo.png"
                alt="NineX"
                width={60}
                height={60}
              />

              <div>
                <h2 className="text-4xl font-black text-white">
                  NINE<span className="text-violet-500">X</span>
                </h2>

                <p className="text-sm text-zinc-400">
                  FiveM Organization
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-md leading-8 text-zinc-400">
              Organização competitiva focada em FiveM, reunindo
              jogadores de alto nível e conquistando títulos
              nos principais campeonatos.
            </p>
                      </motion.div>

          {/* Navegação */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">
              Navegação
            </h3>

            <nav className="space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-zinc-400 transition-all duration-300 hover:translate-x-2 hover:text-violet-400"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Redes Sociais */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">
              Redes Sociais
            </h3>

            <div className="flex flex-wrap gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:shadow-[0_0_35px_rgba(139,92,246,.35)]"
                  >
                    <Icon
                      size={22}
                      className="text-zinc-300 transition-colors duration-300 group-hover:text-violet-400"
                    />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollTop}
              className="mt-10 flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-3 text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,.35)]"
            >
              <ArrowUp size={18} />
              Voltar ao topo
            </button>
          </motion.div>

        </div>
                {/* Divider */}

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              NineX
            </span>
            . Todos os direitos reservados.
          </p>

          <p className="flex items-center gap-2">
            Desenvolvido para
            <span className="font-semibold text-violet-400">
              NineX
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}