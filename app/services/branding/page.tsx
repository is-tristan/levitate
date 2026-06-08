// React & Next
import { Suspense } from "react";
import type { Metadata } from "next";

// Components
import Banner from "@/components/sections/banner";
import Section from "@/components/sections/section";
import BrandingVisual from "@/components/sections/section-parts/services/inner/branding-visual";
import PartnersGrid from "@/components/grids/partners-grid";
import ResourcesGrid from "@/components/grids/resources-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import CTA from "@/components/sections/cta-section";
import LogoSection from "@/components/sections/logo-section";

// Metadata
export const metadata: Metadata = {
  title: "Branding & Graphic Design",
  description: "Transform your vision into striking visuals with Levitate's expert branding and graphic design services. Logos, identity systems, and marketing materials that capture attention.",
  keywords: ["branding", "graphic design", "logo design", "brand identity", "Cardiff branding agency", "visual identity", "marketing materials"],
  openGraph: {
    title: "Branding & Graphic Design | Levitate",
    description: "Transform your vision into striking visuals with Levitate's expert branding and graphic design services. Logos, identity systems, and marketing materials that capture attention.",
    url: "/services/branding",
  },
  twitter: {
    title: "Branding & Graphic Design | Levitate",
    description: "Transform your vision into striking visuals with Levitate's expert branding and graphic design services. Logos, identity systems, and marketing materials that capture attention.",
  },
};

// Page
export default function Branding() {

  return (

    <>

      <Banner
        heading="Artistry that takes <span class='gradientAnimation'>you higher</span>"
        description="Transform your vision into striking visuals with Levitate's expert graphic design. Powerful designs that capture attention and drive your brand forward."
        backgroundImage={"/images/pages/services/branding/branding-cover.webp"}
      />

      <PartnersGrid />

      <Section
        heading="Visuals That Lift <span class='gradientAnimation'>Your Brand</span>"
        description="We deliver bold, original graphics tailored to your business needs. From logos to marketing materials, our designs build strong identities and lasting impressions. Precision and creativity unite for standout results."
        imageSlot={<BrandingVisual />}
      />

      <Suspense fallback={<Loading />}>
        <ResourcesGrid
          categorySlug="branding"
          heading="Branding Case Studies"
          description="See how we have helped businesses create strong brand identities and lasting impressions."
        />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TestimonialsSection containerClassName="noPaddingBottom" />
      </Suspense>

      <LogoSection />

      <CTA heading="Let's talk about your <span class='gradientAnimation'>Branding</span>" description="Transform your vision into striking visuals with Levitate's expert graphic design. Powerful designs that capture attention and drive your brand forward." />

    </>

  );

}
