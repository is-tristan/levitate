// Components
import GradientBanner from "@/components/sections/gradient-banner";
import PortfolioGrid from "@/components/grids/portfolio-grid";
import TestimonialsSection from "@/components/sections/testimonials-section";
import LogoSection from "@/components/sections/logo-section";
import ContactSection from "@/components/sections/contact-section";

export default function Portfolio() {
    return (

        <>

            <GradientBanner
                heading="Our Portfolio"
                description="We help ambitious brands explore their full digital potential through award-winning, handcrafted websites that blend creativity, strategy, and performance."
                urlTwo={undefined}
            />

            <PortfolioGrid />

            <TestimonialsSection containerClassName="noPaddingBottom" />

            <LogoSection />

            <ContactSection />

        </>

    );

}