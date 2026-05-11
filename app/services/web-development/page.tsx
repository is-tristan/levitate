import { Suspense } from "react";
import type { Metadata } from "next";

import Banner from "@/components/sections/banner";
import Section from "@/components/sections/section";
import { PortfolioCarouselSection } from "@/components/sections/portfolio-carousel-section";
import PartnersGrid from "@/components/grids/partners-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import CTA from "@/components/sections/cta-section";
import LogoSection from "@/components/sections/logo-section";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description: "Elevate your online presence with bespoke web design and development from Levitate. High-performance, responsive websites that convert visitors into customers.",
  keywords: ["web design", "web development", "bespoke websites", "responsive design", "Cardiff web design", "custom websites", "website development"],
  openGraph: {
    title: "Web Design & Development | Levitate",
    description: "Elevate your online presence with bespoke web design and development from Levitate. High-performance, responsive websites that convert visitors into customers.",
    url: "/services/web-development",
  },
  twitter: {
    title: "Web Design & Development | Levitate",
    description: "Elevate your online presence with bespoke web design and development from Levitate. High-performance, responsive websites that convert visitors into customers.",
  },
};

export default function WebDevelopment() {

    return (

        <>

            <Banner
                heading="Launch websites that <span class='gradientAnimation'>soar</span>"
                description="Elevate your online presence with bespoke web design from Levitate in Cardiff. We craft stunning, high-performance websites that convert visitors into loyal customers."
                backgroundImage={"/images/pages/services/web-development/web-development-cover.webp"}
            />

            <PartnersGrid />

            <Section
                heading="Designs Built to <span class='gradientAnimation'>Elevate Brands</span>"
                description="Our Cardiff team blends creativity and strategy to build websites that stand out. From responsive designs to seamless user experiences, we focus on your brand's growth and goals. Expect precision, innovation, and measurable impact every time."
                image={"/images/pages/services/web-development/web-development.webp"}
            />

            <Suspense fallback={<Loading />}>
                <PortfolioCarouselSection heading="We have built over <span class='gradientAnimation'>600+ websites</span>, here are our best" />
            </Suspense>

            <Suspense fallback={<Loading />}>
                <TestimonialsSection containerClassName="noPaddingBottom" />
            </Suspense>

            <LogoSection />

            <CTA heading="Let's talk about your <span class='gradientAnimation'>development goals</span>" description="We help ambitious businesses build websites that convert visitors into customers. From website design to development, our approach drives consistent leads, measurable growth, and long-term online performance." />

        </>

    );

}
