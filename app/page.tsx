import { Suspense } from "react";

// Components
import GradientBanner from "@/components/sections/gradient-banner";
import { PortfolioCarouselSection } from "@/components/sections/portfolio-carousel-section";
import PartnersGrid from "@/components/grids/partners-grid";
import ServicesSection from "@/components/sections/services-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import CTA from "@/components/sections/cta-section";
import LogoSection from "@/components/sections/logo-section";

export default function Home() {

  return (

    <>

      <GradientBanner
        heading="Bespoke websites that <span class='gradientAnimation'>get results</span>"
        description="We help ambitious brands explore their full digital potential through award-winning, handcrafted websites that blend creativity, strategy, and performance."
      />

      <Suspense fallback={<Loading />}>
        <PortfolioCarouselSection heading="We have built over <span class='gradientAnimation'>600+ websites</span>, here are our best" />
      </Suspense>

      <PartnersGrid />

      <ServicesSection />

      <Suspense fallback={<Loading />}>
        <TestimonialsSection containerClassName="noPaddingBottom" />
      </Suspense>

      <CTA />

      <LogoSection />

    </>

  );

}
