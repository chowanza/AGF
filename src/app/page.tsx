import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Sectors from "@/components/Sectors";
import Services from "@/components/Services";
import WhyAGF from "@/components/WhyAGF";
import NewImagesCarouselSection from "@/components/NewImagesCarouselSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Sectors />
        <Services />
        <NewImagesCarouselSection variant="home" />
        <WhyAGF />
      </main>
      <Footer />
    </>
  );
}
