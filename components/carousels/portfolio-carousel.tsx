"use client";

// React
import { Suspense, useEffect, useRef, useState } from "react";

// Next
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import type { Splide as SplideInstance, SlideComponent } from "@splidejs/splide";

// Imports
import Content from "@/components/content/content";
import { websites } from "@/data/websites";
import { arrowUpRight, arrowRight } from "@/data/icons";

// Styles
import styles from "@/styles/components/carousels/portfolio-carousel.module.scss";

// Types
type WebsiteCarouselProps = {
    heading: string;
    description?: string | null;
    link: string;
}

// Splide Options
const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    arrows: true,
    pagination: false,
    wheel: true,
    wheelSleep: 500,
    releaseWheel: true,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    padding: {
        right: "7.5%",
        left: "7.5%",
    },
    autoplay: true,
    interval: 5000,
    breakpoints: {
        1279: {
            padding: {
                left: "5%",
                right: "5%",
            },
        },
    },
};

export default function WebsiteCarousel({
    heading,
    description,
    link
}: WebsiteCarouselProps) {

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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

            <div className={`container noPaddingTop ${styles.carouselContainer}`}>

                <Splide
                    className={`hasArrows splideTrackNoOverflow`}
                    options={options}
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

            </div>

        </section>

    )
}