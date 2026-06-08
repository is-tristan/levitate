// React & Next
import { Suspense } from "react";
import type { Metadata } from "next";

// Components
import Banner from "@/components/sections/banner";
import Section from "@/components/sections/section";
import SeoVisual from "@/components/sections/section-parts/services/inner/seo-visual";
import PartnersGrid from "@/components/grids/partners-grid";
import ResourcesGrid from "@/components/grids/resources-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import CTA from "@/components/sections/cta-section";
import LogoSection from "@/components/sections/logo-section";

// Metadata
export const metadata: Metadata = {
    title: "Search Engine Optimisation (SEO)",
    description: "Climb the search rankings with Levitate's tailored SEO strategies. Technical audits, content optimisation, and link building that drive long-term organic growth.",
    keywords: ["SEO", "search engine optimisation", "organic search", "technical SEO", "Cardiff SEO agency", "link building", "content optimisation", "Google rankings"],
    openGraph: {
        title: "Search Engine Optimisation (SEO) | Levitate",
        description: "Climb the search rankings with Levitate's tailored SEO strategies. Technical audits, content optimisation, and link building that drive long-term organic growth.",
        url: "/services/search-engine-optimisation",
    },
    twitter: {
        title: "Search Engine Optimisation (SEO) | Levitate",
        description: "Climb the search rankings with Levitate's tailored SEO strategies. Technical audits, content optimisation, and link building that drive long-term organic growth.",
    },
};

// Page
export default function SearchEngineOptimisation() {

    return (

        <>

            <Banner
                heading="Rankings that reach <span class='gradientAnimation'>new heights</span>"
                description="Ascend Search Rankings with Levitate SEO Mastery. Dominate Google and capture leads from Cardiff to nationwide."
                backgroundImage={"/images/pages/services/seo/seo-cover.webp"}
            />

            <PartnersGrid />

            <Section
                heading="Rise above the <span class='gradientAnimation'>Competition</span>"
                description="Levitate crafts tailored SEO strategies that boost visibility and traffic. We handle technical audits, content optimisation, and link building for long-term dominance. Real results from on-page tweaks to AI-enhanced AEO tactics."
                imageSlot={<SeoVisual />}
            />

            <Suspense fallback={<Loading />}>
                <ResourcesGrid
                    categorySlug="seo"
                    heading="SEO Case Studies"
                    description="See how we have helped businesses grow their online presence."
                />
            </Suspense>

            <Suspense fallback={<Loading />}>
                <TestimonialsSection containerClassName="noPaddingBottom" />
            </Suspense>

            <LogoSection />

            <CTA heading="Let's talk about your <span class='gradientAnimation'>SEO goals</span>" description="We help ambitious businesses rise to the top of search results with data-led SEO and Google Ads management. From keyword strategy to campaign optimisation, our approach drives consistent leads, measurable growth, and long-term online performance." />

        </>

    );

}
