// Components
import GradientBanner from "@/components/sections/gradient-banner";
import PortfolioGrid from "@/components/grids/portfolio-grid";
import TestimonialsCarousel from "@/components/carousels/testimonials-carousel";
import LogoCarousel from "@/components/carousels/logo-carousel";
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

            <TestimonialsCarousel containerClassName="noPaddingBottom" />

            <LogoCarousel />

            <ContactSection />

        </>

    );

}