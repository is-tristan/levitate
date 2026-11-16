import type { Metadata } from "next";

import ContactForm from "./components/contact-form";
import ContactInfoCols from "./components/contact-info-cols";
import ContactMap from "./components/contact-map";
import LogoSection from "@/components/sections/logo-section";

// SEO
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata("contact");

export default function ContactUs() {

    return (

        <>

            <ContactForm />

            <ContactInfoCols />

            <LogoSection />

            <ContactMap />

        </>

    );

}