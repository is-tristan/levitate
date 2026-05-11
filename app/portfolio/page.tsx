import { Suspense } from "react";
import type { Metadata } from "next";

import Banner from "@/components/sections/banner";
import PortfolioGrid from "@/components/grids/portfolio-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import LogoSection from "@/components/sections/logo-section";
import ContactSection from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Levitate's portfolio of bespoke websites, branding projects, and digital experiences crafted for ambitious brands across Cardiff and the UK.",
  openGraph: {
    title: "Portfolio | Levitate",
    description: "Explore Levitate's portfolio of bespoke websites, branding projects, and digital experiences crafted for ambitious brands across Cardiff and the UK.",
    url: "/portfolio",
  },
  twitter: {
    title: "Portfolio | Levitate",
    description: "Explore Levitate's portfolio of bespoke websites, branding projects, and digital experiences crafted for ambitious brands across Cardiff and the UK.",
  },
};

export default function Portfolio() {
    return (

        <>

            <Banner
                heading="Our Portfolio"
                description="We help ambitious brands explore their full digital potential through award-winning, handcrafted websites that blend creativity, strategy, and performance."
            />

            <PortfolioGrid />

            <Suspense fallback={<Loading />}>
                <TestimonialsSection containerClassName="noPaddingBottom" />
            </Suspense>

            <LogoSection />

            <ContactSection />

        </>

    );

}