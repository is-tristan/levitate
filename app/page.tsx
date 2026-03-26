// Components
import GradientBanner from "@/components/sections/gradient-banner";
import { PortfolioCarouselSection } from "@/components/sections/portfolio-carousel-section";
import PartnersGrid from "@/components/grids/partners-grid";
import ServicesSection from "@/components/sections/services-section";
import TestimonialsCarousel from "@/components/carousels/testimonials-carousel";
import CTA from "@/components/sections/cta-section";
import LogoCarousel from "@/components/carousels/logo-carousel";

export default function Home() {

  return (

    <>

      <GradientBanner
        heading="Bespoke websites that <span class='gradientAnimation'>get results</span>"
        description="We help ambitious brands explore their full digital potential through award-winning, handcrafted websites that blend creativity, strategy, and performance."
      />

      <PortfolioCarouselSection heading="We have built over <span class='gradientAnimation'>600+ websites</span>, here are our best" />

      <PartnersGrid />

      <ServicesSection />

      <TestimonialsCarousel containerClassName="noPaddingBottom" />

      <CTA />

      <LogoCarousel />

    </>

  );

}
