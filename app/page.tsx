import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Championships from "@/components/Championships";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Championships />
        <Team />
      </main>

      <Footer />
    </>
  );
}