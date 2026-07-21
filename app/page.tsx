import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import Championships from "@/components/Championships";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <History />

      <Championships />

      <Team />

    </main>
  );
}