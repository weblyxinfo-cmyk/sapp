import Hero from "@/components/home/Hero";
import USPStrip from "@/components/home/USPStrip";
import Statement from "@/components/home/Statement";
import Products from "@/components/home/Products";
import ServisSection from "@/components/home/ServisSection";
import Brands from "@/components/home/Brands";
import Reviews from "@/components/home/Reviews";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <USPStrip />
      <Statement />
      <Products />
      <ServisSection />
      <Brands />
      <Reviews />
      <CTASection />
    </main>
  );
}
