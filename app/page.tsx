import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Issues } from "@/components/sections/Issues";
import { Donate } from "@/components/sections/Donate";
import { News } from "@/components/sections/News";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Issues />
        <Donate />
        <News />
      </main>
      <Footer />
    </>
  );
}
