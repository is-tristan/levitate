// React & Next
import { Suspense } from "react";
import type { Metadata } from "next";

// Components
import Banner from "@/components/sections/banner";
import PortfolioGrid from "@/components/grids/portfolio-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import LogoSection from "@/components/sections/logo-section";
import ContactSection from "@/components/sections/contact-section";

// SEO
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata("portfolio");

// Page
export default function Portfolio() {

  return (

    <>

      <Banner
        heading="Our Portfolio"
        description="We help ambitious brands explore their full digital potential through award-winning, handcrafted websites that blend creativity, strategy, and performance."
      />

      <Suspense fallback={<Loading />}>
        <PortfolioGrid />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TestimonialsSection containerClassName="noPaddingBottom" />
      </Suspense>

      <LogoSection />

      <ContactSection />

    </>

  );

}