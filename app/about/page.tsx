import { Suspense } from "react";
import type { Metadata } from "next";

import Banner from "@/components/sections/banner";
import TeamGrid from "@/components/grids/team-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import CTA from "@/components/sections/cta-section";
import LogoSection from "@/components/sections/logo-section";

// SEO
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata("about");

export default function Branding() {

    return (

        <>

            <Banner
                className="contactBanner"
                heading="The Minds Behind the <span class='gradientAnimation'>Magic</span>"
                description="Behind every campaign, every website, and every scroll-stopping piece of content is a team that genuinely cares. Based in Cardiff and connected to the wider digital world, we're a creative, curious bunch who love what we do."
                backgroundImage={"/images/pages/about/team-cover.webp"}
                backgroundPosition={"center 33.33%"}
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
