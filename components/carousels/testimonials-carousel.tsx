"use client";

// Next
import Image from "next/image";

// React
import { useMemo, useState } from "react";

// Data
import { testimonials } from "@/data/testimonials";

// Imports
import Content from "@/components/content/content";
import ReviewItems from "@/components/items/review-items";
import { useDelayedViewportMount, useIsBelowBreakpoint, ViewportBreakpoint } from "@/utils/helpers/device-rendering";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import type { Splide as SplideInstance } from "@splidejs/splide";

// Styles
import styles from "@/styles/components/carousels/testimonials-carousel.module.scss";

// Icons
import { quoteIcon } from "@/data/icons";

// Types
type TestimonialsCarouselProps = {
    containerClassName?: string;
}

// Splide Options
const baseTestimonialsOptions = {
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    pagination: false,
    perPage: 1,
    perMove: 1,
    gap: "0",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    autoplay: true,
    interval: 6000,
    pauseOnHover: false,
    pauseOnFocus: false,
}

export default function TestimonialsCarousel({
    containerClassName,
}: TestimonialsCarouselProps) {
    const [progressWidth, setProgressWidth] = useState(`${100 / testimonials.length}%`);
    const isMobile = useIsBelowBreakpoint();
    const { isMounted, viewportRef } = useDelayedViewportMount<HTMLDivElement>();
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

    return (

        <section id="testimonials" className="row testimonials">

            <div className={`container ${containerClassName || undefined} ${styles.headingContainer}`}>

                <Content
                    type="h2"
                    heading="We've got over <span class='gradientAnimation'>150+ 5 star reviews</span> on all platforms"
                    hasFullStop={true}
                    className={styles.heading}
                />

                <ViewportBreakpoint mode="desktop">

                    <ReviewItems layout="inline" />

                </ViewportBreakpoint>

            </div>

            <div ref={viewportRef} className={`container noPaddingTop ${styles.testimonialsContainer}`}>

                {isMounted ? (
                    <Splide
                        className={"hasArrows"}
                        options={testimonialsOptions}
                        onMounted={updateProgress}
                        onMoved={updateProgress}
                    >

                        {testimonials.map((testimonial, index) => (

                            <SplideSlide key={index}>

                                <div className={styles.testimonial}>

                                    <div className={styles.testimonialImage}>

                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={576}
                                            height={576}
                                            sizes="(max-width: 1023px) 100vw, 50vw"
                                            loading="lazy"
                                            style={{ objectFit: "cover", objectPosition: "center top" }}
                                        />

                                    </div>

                                    <div className={styles.testimonialContent}>

                                        <p>{testimonial.quote}</p>

                                        <div className={styles.testimonialMeta}>

                                            <div className={styles.testimonialMetaIcon} dangerouslySetInnerHTML={{ __html: quoteIcon }}></div>

                                            <div className={styles.testimonialMetaContent}>

                                                <h3 className={`colorPrimary`}>{testimonial.name}</h3>

                                                <span>{testimonial.position}</span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </SplideSlide>

                        ))}

                    </Splide>
                ) : (
                    <div className={styles.testimonial}>

                        <div className={styles.testimonialImage}>

                            <Image
                                src={testimonials[0].image}
                                alt={testimonials[0].name}
                                width={576}
                                height={576}
                                sizes="(max-width: 1023px) 100vw, 50vw"
                                loading="lazy"
                                style={{ objectFit: "cover", objectPosition: "center top" }}
                            />

                        </div>

                        <div className={styles.testimonialContent}>

                            <p>{testimonials[0].quote}</p>

                            <div className={styles.testimonialMeta}>

                                <div className={styles.testimonialMetaIcon} dangerouslySetInnerHTML={{ __html: quoteIcon }}></div>

                                <div className={styles.testimonialMetaContent}>

                                    <h3 className={`colorPrimary`}>{testimonials[0].name}</h3>

                                    <span>{testimonials[0].position}</span>

                                </div>

                            </div>

                        </div>

                    </div>
                )}

                <div className={styles.testimonialsProgress}>

                    <div className={styles.testimonialsProgressBar} style={{ width: progressWidth }}></div>

                </div>

            </div>

        </section>

    )

}