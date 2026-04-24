import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Sectors from "@/components/Sectors";
import Services from "@/components/Services";
import WhyAGF from "@/components/WhyAGF";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Sectors />
        <Services />
        <WhyAGF />
      </main>
      <Footer />
    </>
  );
}
