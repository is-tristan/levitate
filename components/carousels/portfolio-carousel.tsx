"use client";

// React
import { useCallback, useEffect, useMemo, useRef } from "react";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Components
import PortfolioItem from "@/components/item/portfolio-item";
import { useIsBelowBreakpoint, ViewportBreakpoint } from "@/utils/helpers/device-rendering";

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
    pauseOnHover: true,
    pauseOnFocus: true,
    padding: {
        right: "7.5%",
        left: "7.5%",
    },
    autoScroll: {
        speed: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
    },
};

export default function PortfolioCarousel({
    items,
}: PortfolioCarouselProps) {

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const shouldPlayVideoRefs = useRef<boolean[]>([]);
    const isMobile = useIsBelowBreakpoint();
    const featuredItems = useMemo(() => {
        return items
            .filter(item => item.featured)
            .sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));
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
        shouldPlayVideoRefs.current = [];
    }, []);

    useEffect(() => {
        if (!isMobile) {
            resetVideos();
        }
    }, [isMobile, resetVideos]);

    const playVideoAt = useCallback((index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            shouldPlayVideoRefs.current[index] = true;
            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise) {
                void playPromise
                    .then(() => {
                        if (!shouldPlayVideoRefs.current[index]) {
                            video.pause();
                            video.currentTime = 0;
                        }
                    })
                    .catch(() => { });
            }
        }
    }, []);

    const pauseVideoAt = useCallback((index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            shouldPlayVideoRefs.current[index] = false;
            video.pause();
            video.currentTime = 0;
        }
    }, []);

    const handleVideoHover = (index: number) => {
        playVideoAt(index);
    };

    const handleVideoLeave = (index: number) => {
        pauseVideoAt(index);
    };

    if (!featuredItems.length) {
        return null;
    }

    return (

        <div className={`container noPaddingTop ${styles.carouselContainer}`}>

            <ViewportBreakpoint mode="desktop">

                <Splide
                    className={`hasArrows splideTrackNoOverflow`}
                    options={carouselOptions}
                    extensions={isMobile ? undefined : { AutoScroll }}
                >

                    {featuredItems.map((item, index) => (

                        <SplideSlide key={`${item.name}-${index}`}>
                            <PortfolioItem
                                item={item}
                                isMobile={isMobile}
                                onMouseEnter={() => handleVideoHover(index)}
                                onMouseLeave={() => handleVideoLeave(index)}
                                videoRef={element => {
                                    videoRefs.current[index] = element;
                                }}
                            />

                        </SplideSlide>

                    ))}

                </Splide>

            </ViewportBreakpoint>

            <ViewportBreakpoint mode="mobile">

                <div className={`carouselContainerMobile ${styles.portfolioCarouselMobile}`}>

                    {featuredItems.map((item, index) => (

                        <article className={`carouselItemMobile ${styles.portfolioCarouselItemMobile}`} key={`${item.name}-${index}`}>

                            <PortfolioItem
                                item={item}
                                isMobile={isMobile}
                                onMouseEnter={() => {}}
                                onMouseLeave={() => {}}
                                videoRef={() => {}}
                            />

                        </article>

                    ))}

                </div>

            </ViewportBreakpoint>

        </div>

    )
}