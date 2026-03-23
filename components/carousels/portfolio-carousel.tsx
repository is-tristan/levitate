"use client";

// React
import { Suspense, useEffect, useRef, useState } from "react";

// Next
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import type { Splide as SplideInstance, SlideComponent } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Imports
import Content from "@/components/content/content";
import { websites } from "@/data/websites";
import { arrowRight } from "@/data/icons";
import { useDelayedViewportMount, useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

// Styles
import styles from "@/styles/components/carousels/portfolio-carousel.module.scss";

// Types
type WebsiteCarouselProps = {
    heading: string;
    description?: string | null;
}

// Splide Options
const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    arrows: false,
    pagination: false,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    padding: {
        right: "7.5%",
        left: "7.5%",
    },
    pauseOnHover: false,
    breakpoints: {
        1279: {
            padding: {
                left: "5%",
                right: "5%",
            },
        },
        767: {
            autoScroll: {
                speed: 0.9,
            },
        }
    },
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
};

export default function WebsiteCarousel({
    heading,
    description
}: WebsiteCarouselProps) {

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const isMobile = useIsBelowBreakpoint();
    const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);
    const { isMounted, viewportRef } = useDelayedViewportMount<HTMLDivElement>();

    useEffect(() => {
        if (!isMobile) {
            setActiveSlideIndex(null);
            videoRefs.current.forEach(video => {
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
    }, [isMobile]);

    useEffect(() => {
        if (isMounted) {
            return;
        }

        setActiveSlideIndex(null);
        videoRefs.current.forEach(video => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    }, [isMounted]);

    const playVideoAt = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.currentTime = 0;
            void video.play();
        }
    };

    const getVideoIndex = (index: number, slideIndex: number) => {
        return slideIndex > -1 ? slideIndex : index;
    };

    const pauseVideoAt = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    const handleVideoHover = (index: number) => {
        if (isMobile) {
            return;
        }
        playVideoAt(index);
    };

    const handleVideoLeave = (index: number) => {
        if (isMobile) {
            return;
        }
        pauseVideoAt(index);
    };

    return (

        <section id="portfolio" className="row">

            <div className={`container centered noPaddingBottom ${styles.headingContainer}`}>

                <Content
                    type="h2"
                    heading={heading}
                    hasFullStop={true}
                    description={description || undefined}
                    className={styles.heading}
                />

            </div>

            <div ref={viewportRef} className={`container noPaddingTop ${styles.carouselContainer}`}>

                {isMounted ? (
                    <Splide
                        className={`hasArrows splideTrackNoOverflow`}
                        options={options}
                        extensions={{ AutoScroll }}
                        onMounted={(splide: SplideInstance) => {
                            if (!isMobile) {
                                return;
                            }
                            splide.Components.Slides.get(true).forEach(slide => {
                                if (slide.slide.classList.contains("is-active")) {
                                    const videoIndex = getVideoIndex(slide.index, slide.slideIndex);
                                    setActiveSlideIndex(videoIndex);
                                    playVideoAt(videoIndex);
                                }
                            });
                        }}
                        onActive={(_: SplideInstance, slide: SlideComponent) => {
                            if (!isMobile) {
                                return;
                            }
                            const videoIndex = getVideoIndex(slide.index, slide.slideIndex);
                            setActiveSlideIndex(videoIndex);
                            playVideoAt(videoIndex);
                        }}
                        onInactive={(_: SplideInstance, slide: SlideComponent) => {
                            if (!isMobile) {
                                return;
                            }
                            const videoIndex = getVideoIndex(slide.index, slide.slideIndex);
                            if (activeSlideIndex === videoIndex) {
                                setActiveSlideIndex(null);
                            }
                            pauseVideoAt(videoIndex);
                        }}
                    >

                        {websites.map((website, index) => (

                            <SplideSlide
                                key={index}
                                onMouseEnter={() => handleVideoHover(index)}
                                onMouseLeave={() => handleVideoLeave(index)}
                            >

                                <div
                                    className={`${styles.carouselItem} ${isMobile && activeSlideIndex === index ? styles.slideActive : ""}`}
                                    aria-label={website.name}
                                >

                                    {website.video ? (

                                        <Suspense fallback={"Loading Video..."}>

                                            <video
                                                ref={element => {
                                                    videoRefs.current[index] = element;
                                                }}
                                                src={website.video}
                                                muted
                                                loop
                                                playsInline
                                                className={styles.carouselVideo}
                                                preload="none"
                                                poster={website.poster}
                                            />

                                        </Suspense>

                                    ) : (

                                        <Image src={website.poster} alt={website.name} fill sizes="100%" className={styles.carouselImage} loading="lazy" />

                                    )}

                                    <div className={styles.carouselContent}>

                                        <h3><a href={website.url} target="_blank" rel="noopener noreferrer">{website.name}<span className="colorAccent">.</span></a></h3>

                                        <a href={website.url} className={styles.carouselTextLink} aria-label="View website" target="_blank" rel="noopener noreferrer">View Website <span className={styles.icon} dangerouslySetInnerHTML={{ __html: arrowRight }} /></a>

                                    </div>

                                    <a href={website.url} className={styles.itemLink} aria-label="View website" target="_blank" rel="noopener noreferrer"></a>

                                </div>

                            </SplideSlide>

                        ))}

                    </Splide>
                ) : (
                    <div className="splideTrackNoOverflow">
                        <div className={styles.carouselItem} aria-label={websites[0].name}>
                            <Image src={websites[0].poster} alt={websites[0].name} fill sizes="100%" className={styles.carouselImage} loading="lazy" />

                            <div className={styles.carouselContent}>
                                <h3><a href={websites[0].url} target="_blank" rel="noopener noreferrer">{websites[0].name}<span className="colorAccent">.</span></a></h3>

                                <a href={websites[0].url} className={styles.carouselTextLink} aria-label="View website" target="_blank" rel="noopener noreferrer">View Website <span className={styles.icon} dangerouslySetInnerHTML={{ __html: arrowRight }} /></a>
                            </div>

                            <a href={websites[0].url} className={styles.itemLink} aria-label="View website" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                )}

            </div>

        </section>

    )
}