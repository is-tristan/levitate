"use client";

// React
import { useMemo, useState } from "react";

// Components
import TestimonialItem from "@/components/item/testimonial-item";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import type { Splide as SplideInstance } from "@splidejs/splide";

// Styles
import styles from "@/styles/components/carousels/testimonials-carousel.module.scss";

import type { TestimonialsCarouselProps } from "@/types/all-types";

// Splide Options
const baseTestimonialsOptions = {
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    pagination: false,
    perPage: 1,
    perMove: 1,
    gap: "0",
    autoplay: true,
    interval: 6000,
    pauseOnHover: false,
    pauseOnFocus: false,
}

export default function TestimonialsCarousel({
    testimonials,
}: TestimonialsCarouselProps) {
    const [progressWidth, setProgressWidth] = useState(`${100 / testimonials.length}%`);
    const isMobile = useIsBelowBreakpoint();
    const testimonialsOptions = useMemo(() => {
        return {
            ...baseTestimonialsOptions,
            autoplay: !isMobile,
        };
    }, [isMobile]);

    const updateProgress = (splide: SplideInstance) => {
        const progress = ((splide.index + 1) / testimonials.length) * 100;
        setProgressWidth(`${progress}%`);
    };

    if (!testimonials.length) {
        return null;
    }

    return (
        <>

            <div className={`hidden-s container noPaddingTop ${styles.testimonialsContainer}`}>

                <Splide
                    className={"hasArrows"}
                    options={testimonialsOptions}
                    onMounted={updateProgress}
                    onMoved={updateProgress}
                >

                    {testimonials.map((testimonial, index) => (

                        <SplideSlide key={index}>

                            <TestimonialItem testimonial={testimonial} />

                        </SplideSlide>

                    ))}

                </Splide>

                <div className={styles.testimonialsProgress}>

                    <div className={styles.testimonialsProgressBar} style={{ width: progressWidth }}></div>

                </div>

            </div>

            <div className={`hidden-l container noPaddingTop ${styles.testimonialsCarouselMobile}`}>

                <div className="carouselContainerMobile">

                    {testimonials.map((testimonial, index) => (

                        <article className="carouselItemMobile" key={index}>

                            <TestimonialItem testimonial={testimonial} />

                        </article>

                    ))}

                </div>

            </div>

        </>

    )

}