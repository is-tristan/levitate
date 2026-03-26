// Components
import GradientBanner from "@/components/sections/gradient-banner";
import { PortfolioCarouselSection } from "@/components/sections/portfolio-carousel-section";
import PartnersGrid from "@/components/grids/partners-grid";
import ServicesSection from "@/components/sections/services-section";
import PricingCols from "@/components/sections/pricing-cols";
import PaymentTerms from "@/components/sections/payment-terms";
import TestimonialsCarousel from "@/components/carousels/testimonials-carousel";
import CTA from "@/components/sections/cta-section";
import LogoCarousel from "@/components/carousels/logo-carousel";
import ContactSection from "@/components/sections/contact-section";

export default function WebDesignInCardiff() {

  return (

    <>

      <GradientBanner
        heading="Bespoke web design, <span class='gradientAnimation'> built in Cardiff</span>"
        description="We help ambitious Cardiff brands unlock their full digital potential through award-winning, handcrafted websites designed right here in the heart of Wales."
        urlOne="#contact"
        urlTwo="#portfolio"
      />

      <PortfolioCarouselSection heading="We've powered over <span class='gradientAnimation'>600+ businesses</span> in South Wales" />

      <PartnersGrid />

      <ServicesSection hasCardiffOffice={true} />

      <PricingCols />

      <PaymentTerms />

      <TestimonialsCarousel containerClassName="noPaddingBottom" />

      <CTA />

      <LogoCarousel />

      <ContactSection />

    </>

  );

}
