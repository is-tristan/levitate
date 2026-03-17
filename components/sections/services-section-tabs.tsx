"use client";

// Next
import { useState } from "react";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import type { Splide as SplideInstance, SlideComponent } from "@splidejs/splide";

// Imports
import ServicesPartDevelopment from "@/components/sections/section-parts/services-part-dev";

// Styles
import styles from "@/styles/components/sections/services-section-tabs.module.scss";

// Splide Options
const servicesOptions = {
    arrows: false,
    pagination: true,
    perPage: 1,
    perMove: 1,
    direction: "ttb",
    heightRatio: 1,
    wheel: true,
    releaseWheel: true,
    wheelSleep: 1000,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    speed: 1000,
    autoplay: false,
    classes: {
        splide: "servicesSplide",
        active: "is-active",
    },
};

export default function ServicesSection() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (

        <section className="row">

            <Splide
                className="splide"
                options={servicesOptions}
                onActive={(_: SplideInstance, slide: SlideComponent) => setActiveSlideIndex(slide.index)}
            >

                <SplideSlide className={`${styles.slideDevelopment} ${activeSlideIndex === 0 ? `${styles.slideActive}` : undefined}`}>

                    <ServicesPartDevelopment />

                </SplideSlide>

                <SplideSlide className={activeSlideIndex === 1 ? "slideActive" : undefined}>

                    <ServicesPartDevelopment />

                </SplideSlide>

            </Splide>

        </section>

    )

}