import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ParallaxSection from "@/components/ParallaxSection";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Hero />
      <Features />
      <ParallaxSection />
      <Gallery />
      <Pricing />
      <CTA />
      <Contact />
      <StickyCTA />

    </main>
  );
}