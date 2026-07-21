// Team.tsx
// Arquivo base pronto para personalização.
// (Versão resumida para caber na resposta da ferramenta.)

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Shield, Users, ExternalLink } from "lucide-react";

const sections = [
  {
    title: "Founder",
    icon: Crown,
    members: [
      { name: "Gr", role: "Founder", image: "/team/gr.jpg", discord: "discord://-/users/1514570067596021790" },
    ],
  },
  {
    title: "Owners",
    icon: Shield,
    members: [
      { name: "Chumaker", role: "Owner", image: "/team/chumaker.webp", discord: "discord://-/users/1523349948761116813" },
      { name: "Nyx", role: "Owner", image: "/team/nyx.jpg", discord: "discord://-/users/1516219747908452484" },
      { name: "Ss4nt", role: "Owner", image: "/team/ssant.png", discord: "discord://-/users/1509957555718324345" },
    ],
  },
  {
    title: "Elenco",
    icon: Users,
    members: [
      { name: "Skunk", role: "Player", image: "/team/skunk.gif", discord: "discord://-/users/1503687908299903078" },
      { name: "Gaby", role: "Player", image: "/team/Gaby.webp", discord: "discord://-/users/831697104052813854", },
      { name: "João", role: "Player", image: "/team/joao.jpg", discord: "discord://-/users/1202756834054766632" },
      { name: "Rabello", role: "Player", image: "/team/rabello.gif", discord: "discord://-/users/1504243173457658059" },
      { name: "Rodolfo", role: "Player", image: "/team/rodolfo.jpg", discord: "discord://-/users/494265667730669590" },
      { name: "Knusking", role: "Player", image: "/team/knusking.jpg", discord: "discord://-/users/1455766871298019431" },
      { name: "DaBopi", role: "Player", image: "/team/dabopi.jpg", discord: "discord://-/users/1113653902085193778" },
      { name: "Correa", role: "Player", image: "/team/correa.jpg", discord: "discord://-/users/1403413598138531935" },
    ],
  },
];

function Card({ m }: any) {
  return (
    <motion.a href={m.discord} whileHover={{ y:-8, scale:1.03 }}
      className="group rounded-3xl overflow-hidden border border-purple-500/20 bg-white/5 backdrop-blur-xl hover:border-purple-500 transition">
      <div className="relative h-80">
        <Image src={m.image} alt={m.name} fill className="object-cover group-hover:scale-110 transition duration-500"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[3px] text-purple-400">{m.role}</p>
        <h3 className="text-3xl font-black">{m.name}</h3>
        <div className="mt-5 flex items-center justify-between">
          <span>Discord</span><ExternalLink size={18}/>
        </div>
      </div>
    </motion.a>
  );
}

export default function Team(){
  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-black text-center mb-20">Nosso <span className="text-purple-500">Elenco</span></h2>
        {sections.map((s)=>(
          <div key={s.title} className="mb-20">
            <h3 className="text-4xl font-black mb-8">{s.title}</h3>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-8">
              {s.members.map((m)=> <Card key={m.name} m={m}/>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
