"use client";

// React
import { useCallback, useEffect, useMemo, useRef } from "react";

// Next
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Components
import { arrowRight } from "@/data/icons";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

// Styles
import styles from "@/styles/components/carousels/portfolio-carousel.module.scss";

// Types
type PortfolioCarouselProps = {
    items: {
        name: string;
        url: string;
        poster: string;
        video?: string;
        featured: boolean;
    }[];
};

// Splide Options
const baseOptions = {
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
            autoplay: true,
            interval: 4500,
        }
    },
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
};

export default function PortfolioCarousel({
    items,
}: PortfolioCarouselProps) {

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const isMobile = useIsBelowBreakpoint();
    const featuredItems = useMemo(() => {
        return items.filter(item => item.featured);
    }, [items]);
    const carouselOptions = useMemo(() => {
        if (isMobile) {
            return {
                ...baseOptions,
                autoScroll: undefined,
            };
        }

        return baseOptions;
    }, [isMobile]);

    const resetVideos = useCallback(() => {
        videoRefs.current.forEach(video => {
            if (!video) {
                return;
            }

            video.pause();
            video.currentTime = 0;
        });
    }, []);

    useEffect(() => {
        if (!isMobile) {
            resetVideos();
        }
    }, [isMobile, resetVideos]);

    const playVideoAt = useCallback((index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.currentTime = 0;
            void video.play();
        }
    }, []);

    const pauseVideoAt = useCallback((index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }, []);

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

    if (!featuredItems.length) {
        return null;
    }

    return (

        <div className={`container noPaddingTop ${styles.carouselContainer}`}>

            <Splide
                className={`hasArrows splideTrackNoOverflow`}
                options={carouselOptions}
                extensions={isMobile ? undefined : { AutoScroll }}
            >

                {featuredItems.map((item, index) => (

                    <SplideSlide key={`${item.name}-${index}`} onMouseEnter={() => handleVideoHover(index)} onMouseLeave={() => handleVideoLeave(index)} >

                        <div className={`${styles.carouselItem}${isMobile ? ` ${styles.slideActive}` : ""}`} aria-label={item.name} >

                            {item.video && !isMobile ? (

                                <video
                                    ref={element => {
                                        videoRefs.current[index] = element;
                                    }}
                                    src={item.video}
                                    muted
                                    loop
                                    playsInline
                                    className={styles.carouselVideo}
                                    preload="none"
                                    poster={item.poster}
                                />

                            ) : (

                                <Image
                                    src={item.poster}
                                    alt={item.name}
                                    fill
                                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 85vw"
                                    className={styles.carouselImage}
                                    loading="lazy"
                                />

                            )}

                            <div className={styles.carouselContent}>

                                <h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}<span className="colorAccent">.</span></a></h3>

                                <a href={item.url} className={styles.carouselTextLink} aria-label="View website" target="_blank" rel="noopener noreferrer">View Website <span className={styles.icon} dangerouslySetInnerHTML={{ __html: arrowRight }} /></a>

                            </div>

                            <a href={item.url} className={styles.itemLink} aria-label="View website" target="_blank" rel="noopener noreferrer"></a>

                        </div>

                    </SplideSlide>

                ))}

            </Splide>

        </div>

    )
}