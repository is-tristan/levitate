// React & Next
import { Suspense } from "react";
import type { Metadata } from "next";

// Components
import Banner from "@/components/sections/banner";
import Section from "@/components/sections/section";
import PartnersGrid from "@/components/grids/partners-grid";
import ResourcesGrid from "@/components/grids/resources-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import CTA from "@/components/sections/cta-section";
import LogoSection from "@/components/sections/logo-section";

// Metadata
export const metadata: Metadata = {
  title: "Google Ads Management",
  description: "Dominate search results with Levitate's Google Ads management. Data-driven PPC campaigns that deliver qualified leads, growth, and measurable ROI from Cardiff.",
  keywords: ["Google Ads", "PPC", "pay per click", "Google Ads management", "Cardiff PPC agency", "search advertising", "lead generation"],
  openGraph: {
    title: "Google Ads Management | Levitate",
    description: "Dominate search results with Levitate's Google Ads management. Data-driven PPC campaigns that deliver qualified leads, growth, and measurable ROI from Cardiff.",
    url: "/services/google-ads",
  },
  twitter: {
    title: "Google Ads Management | Levitate",
    description: "Dominate search results with Levitate's Google Ads management. Data-driven PPC campaigns that deliver qualified leads, growth, and measurable ROI from Cardiff.",
  },
};

// Page
export default function GoogleAds() {

  return (

    <>

      <Banner
        heading="Get more visibility with <span class='gradientAnimation'>ads that convert</span>"
        description="Dominate search with Levitate's Google Ads mastery. Targeted campaigns that deliver leads, growth, and unbeatable ROI from Cardiff."
        backgroundImage={"/images/pages/services/google-ads/google-ads-cover-2.webp"}
      />

      <PartnersGrid />

      <Section
        heading="Rise above the <span class='gradientAnimation'>Competition</span>"
        description="Our data-driven Google Ads strategies put you at the top of searches. We handle keyword research, ad creation, and constant refinement for maximum results. Watch your business soar with precise, cost-effective advertising."
        image={"/images/pages/services/google-ads/google-ads.webp"}
      />

      <Suspense fallback={<Loading />}>
        <ResourcesGrid
          categorySlug="google-ads"
          heading="Google Ads Case Studies"
          description="See how we have helped businesses dominate search results with Google Ads."
        />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TestimonialsSection containerClassName="noPaddingBottom" />
      </Suspense>

      <LogoSection />

      <CTA heading="Let's talk about your <span class='gradientAnimation'>Google Ads goals</span>" description="Boost your online visibility with targeted Google Ads campaigns that deliver measurable results and ROI." />

    </>

  );

}
