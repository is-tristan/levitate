// Components
import HomeBanner from "@/components/pages/home/banner/home-banner";
import PortfolioCarousel from "@/components/reusables/carousels/portfolio-carousel";
import PartnersGrid from "@/components/reusables/grids/partners-grid";

export default function Home() {
  return (
    <>
      <HomeBanner
        heading="Bespoke websites that <span class='gradientAnimation'>get results</span>."
        description="We help ambitious brands explore their full digital potential through award-winning, handcrafted websites that blend creativity, strategy, and performance."
      />
      <PortfolioCarousel
        heading="We have built over <span class='gradientAnimation'>600+ websites</span>, here are our best"
        link="/portfolio"
      />
      <PartnersGrid />
    </>
  );
}
