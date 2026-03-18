"use client";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// React
import { useLayoutEffect, useRef } from "react";

// Imports
import ServicesPartBranding from "@/components/sections/section-parts/services/services-part-branding";
import ServicesPartDevelopment from "@/components/sections/section-parts/services/services-part-dev";
import ServicesPartSEO from "@/components/sections/section-parts/services/services-part-seo";

// Styles
import styles from "@/styles/components/sections/services-section.module.scss";

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sectionElement = sectionRef.current;
        const panels = panelRefs.current.filter(
            (panel): panel is HTMLDivElement => panel !== null,
        );

        if (!sectionElement || !panels.length) {
            return;
        }

        const getHeaderOffset = () => {
            const headerHeight = getComputedStyle(
                document.documentElement,
            ).getPropertyValue("--headerHeight");

            return Number.parseFloat(headerHeight) || 0;
        };

        const matchMedia = gsap.matchMedia();

        matchMedia.add("(min-width: 1024px)", () => {
            panels.forEach((panel, index) => {
                const nextPanel = panels[index + 1];
                ScrollTrigger.create({
                    trigger: panel,
                    start: () => `top top+=${getHeaderOffset()}`,
                    endTrigger: nextPanel ?? sectionElement,
                    end: nextPanel ? () => `top top+=${getHeaderOffset()}` : "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                });
            });

            const refreshScrollTrigger = () => ScrollTrigger.refresh();
            const refreshTimeout = window.setTimeout(refreshScrollTrigger, 250);

            window.addEventListener("load", refreshScrollTrigger);

            return () => {
                window.clearTimeout(refreshTimeout);
                window.removeEventListener("load", refreshScrollTrigger);
            };
        });

        return () => {
            matchMedia.revert();
        };
    }, []);

    const setPanelRef = (index: number) => (element: HTMLDivElement | null) => {
        panelRefs.current[index] = element;
    };

    return (

        <section ref={sectionRef} id="services" className={styles.servicesSection}>

            <div ref={setPanelRef(0)} className={styles.servicePanel} style={{ zIndex: 1 }}>

                <ServicesPartDevelopment />

            </div>

            <div ref={setPanelRef(1)} className={styles.servicePanel} style={{ zIndex: 2 }}>

                <ServicesPartSEO />

            </div>

            <div ref={setPanelRef(2)} className={styles.servicePanel} style={{ zIndex: 3 }}>

                <ServicesPartBranding />

            </div>

        </section>
    );
}