import type { Metadata } from "next";

import ContactForm from "./components/contact-form";
import ContactInfoCols from "./components/contact-info-cols";
import ContactMap from "./components/contact-map";
import LogoSection from "@/components/sections/logo-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Levitate to discuss your next web design, branding, or digital marketing project. Based in Cardiff, working with ambitious brands across the UK.",
  openGraph: {
    title: "Contact Us | Levitate",
    description: "Get in touch with Levitate to discuss your next web design, branding, or digital marketing project. Based in Cardiff, working with ambitious brands across the UK.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Us | Levitate",
    description: "Get in touch with Levitate to discuss your next web design, branding, or digital marketing project. Based in Cardiff, working with ambitious brands across the UK.",
  },
};

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