// Components
import GradientBanner from "@/components/sections/gradient-banner";
import PortfolioCarousel from "@/components/carousels/portfolio-carousel";
import PartnersGrid from "@/components/grids/partners-grid";
import ServicesSection from "@/components/sections/services-section";
import TestimonialsCarousel from "@/components/carousels/testimonials-carousel";
import CTA from "@/components/sections/cta-section";
import LogoCarousel from "@/components/carousels/logo-carousel";

export default function GoogleAds() {

  return (

    <>

      <GradientBanner
        heading="Bespoke web design, <span class='gradientAnimation'> built in Cardiff</span>"
        description="We help ambitious Cardiff brands unlock their full digital potential through award-winning, handcrafted websites designed right here in the heart of Wales."
        urlOne="#contact"
        urlTwo="#portfolio"
      />

      <PortfolioCarousel
        heading="We've powered over <span class='gradientAnimation'>600+ businesses</span> in South Wales"
      />

      <PartnersGrid containerClassName="noPaddingTop noPaddingBottom" />

      <ServicesSection />

      <TestimonialsCarousel containerClassName="noPaddingTop noPaddingBottom" />

      <CTA heading="Creating a <span class='gradientAnimation'>digital impact worldwide</span>" description="We help brands explore their digital potential, through award winning, hand crafted websites." />

      <LogoCarousel />

    </>

  );

}
