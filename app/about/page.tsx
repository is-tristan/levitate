import { Suspense } from "react";
import type { Metadata } from "next";

import Banner from "@/components/sections/banner";
import TeamGrid from "@/components/grids/team-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import CTA from "@/components/sections/cta-section";
import LogoSection from "@/components/sections/logo-section";

export const metadata: Metadata = {
    title: "Meet the Levitate Team & About Us | Cardiff Creative Agency",
    description: "Discover the talented team behind Levitate. Meet our creative directors, designers, developers, and strategists. Based in Cardiff, we craft standout brands, award-winning websites, and memorable campaigns.",
    keywords: [
        "about us",
        "Levitate team",
        "creative agency Cardiff",
        "web design team",
        "designers",
        "developers",
        "branding experts",
        "meet the team",
        "team page",
        "Cardiff digital agency"
    ],
    openGraph: {
        title: "Meet the Team | Levitate Cardiff",
        description: "Get to know the talented minds behind Levitate’s acclaimed web, branding, and digital work. Based in Cardiff, our team delivers creativity and results.",
        url: "/about",
        type: "website",
        images: [
            {
                url: "/images/pages/about/team-cover.webp",
                width: 1200,
                height: 675,
                alt: "Levitate creative team photo"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Meet the Levitate Team | Cardiff Web & Branding Experts",
        description: "Meet the faces behind Levitate's award-winning digital work. Designers, developers, and strategists based in Cardiff, ready to help your brand soar.",
        images: ["/images/pages/about/team-cover.webp"]
    }
};

export default function Branding() {

    return (

        <>

            <Banner
                className="contactBanner"
                heading="The Minds Behind the <span class='gradientAnimation'>Magic</span>"
                description="Behind every campaign, every website, and every scroll-stopping piece of content is a team that genuinely cares. Based in Cardiff and connected to the wider digital world, we're a creative, curious bunch who love what we do."
                backgroundImage={"/images/pages/about/team-cover.webp"}
            />

            <TeamGrid />

            <Suspense fallback={<Loading />}>

                <TestimonialsSection containerClassName="noPaddingBottom" />

            </Suspense>

            <LogoSection />

            <CTA />

        </>

    );

}
