import type { Metadata } from "next";

// Components
import ReviewsBanner from "@/components/screens/reviews/reviews-banner";
import ReviewsWidget from "@/components/screens/reviews/reviews-widget";
import LogoSection from "@/components/sections/logo-section";
import CTA from "@/components/sections/cta-section";

// SEO
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata("reviews");

export default function Reviews() {

    return (

        <>

            <ReviewsBanner
                heading="<span class='colorPrimary'>150+</span> Reviews across all platforms"
                description="<strong>Rated 5.0 / 5.0</strong> based on <strong class='colorPrimary'>150+</strong> reviews"
            />

            <ReviewsWidget />

            <LogoSection />

            <CTA />

        </>

    );

}
