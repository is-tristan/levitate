// Components
import HomeBanner from "@/components/pages/home/banner/home-banner";
import PortfolioCarousel from "@/components/carousels/portfolio-carousel";
import PartnersGrid from "@/components/grids/partners-grid";
import ServicesSectionTabs from "@/components/sections/services-section-tabs";
import TestimonialsCarousel from "@/components/carousels/testimonials-carousel";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HomeBanner
        heading="Bespoke websites that <span class='gradientAnimation'>get results</span>"
        description="We help ambitious brands explore their full digital potential through award-winning, handcrafted websites that blend creativity, strategy, and performance."
      />
      <PortfolioCarousel
        heading="We have built over <span class='gradientAnimation'>600+ websites</span>, here are our best"
        link="/portfolio"
      />
      <PartnersGrid containerClassName="noPaddingTop noPaddingBottom" />
      <ServicesSectionTabs />
      <TestimonialsCarousel />
      <CTA heading="Creating a <span class='gradientAnimation'>digital impact worldwide</span>" description="We help brands explore their digital potential, through award winning, hand crafted websites." />
    </>
  );
}
