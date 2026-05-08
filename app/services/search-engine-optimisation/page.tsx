import { Suspense } from "react";

// Components
import Banner from "@/components/sections/banner";
import Section from "@/components/sections/section";
import PartnersGrid from "@/components/grids/partners-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Loading from "@/components/item/loading";
import CTA from "@/components/sections/cta-section";
import LogoSection from "@/components/sections/logo-section";

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
                image={"/images/pages/services/seo/seo.webp"}
            />

            <Suspense fallback={<Loading />}>
                <TestimonialsSection containerClassName="noPaddingBottom" />
            </Suspense>

            <LogoSection />

            <CTA heading="Let's talk about your <span class='gradientAnimation'>SEO goals</span>" description="We help ambitious businesses rise to the top of search results with data-led SEO and Google Ads management. From keyword strategy to campaign optimisation, our approach drives consistent leads, measurable growth, and long-term online performance." />

        </>

    );

}
