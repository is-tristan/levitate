// Imports
import ServicesPartDevelopment from "@/components/sections/section-parts/services-part-dev";
import ServicesPartSEO from "@/components/sections/section-parts/services-part-seo";
import ServicesPartBranding from "@/components/sections/section-parts/services-part-branding";

export default function ServicesSection() {

    return (

        <section id="services" className="row" style={{overflow: "visible"}}>

            <ServicesPartDevelopment />

            <ServicesPartSEO />

            <ServicesPartBranding />

        </section>

    )

}