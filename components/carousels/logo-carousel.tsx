"use client";

import { useEffect, useState } from "react";
import { logos } from "@/data/logos";
import { useDelayedViewportMount } from "@/utils/helpers/device-rendering";

import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";

import styles from "@/styles/components/carousels/logo-carousel.module.scss";

const options = {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "3rem",
    arrows: false,
    pagination: false,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    pauseOnHover: false,
    pauseOnFocus: false,
    drag: false,
    fixedWidth: 128,
    fixedHeight: 64,
    breakpoints: {
        1023: {
            perPage: 3,
        },
        767: {
            perPage: 2,
        },
    },
    autoScroll: {
        speed: 0.5,
        pauseOnHover: false,
        pauseOnFocus: false,
    },
};

const shuffleLogos = (items: typeof logos) => {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
    }

    return shuffledItems;
};

export default function LogoCarousel() {
    const [topLogos, setTopLogos] = useState(logos);
    const [bottomLogos, setBottomLogos] = useState(logos);
    const { isMounted, viewportRef } = useDelayedViewportMount<HTMLDivElement>();

    useEffect(() => {
        setTopLogos(shuffleLogos(logos));
        setBottomLogos(shuffleLogos(logos));
    }, []);

    return (

        <section id="logos" className="row" aria-hidden="true">

            <div className="container noPaddingBottom">

                <div className="heading centered hasFullStop">

                    <h3 className={styles.heading} style={{ fontSize: "1.25rem", fontFamily: "var(--font-dm-sans)", fontWeight: "700" }}>Over <strong className="gradientAnimation">700+</strong> businesses have chosen us to grow online</h3>

                </div>

            </div>

            <div ref={viewportRef} className="container noPaddingTop">

                <div className={styles.carouselContainer}>

                    {isMounted ? (
                        <>
                            <Splide
                                options={options}
                                extensions={{ AutoScroll }}
                                className={styles.splide}
                            >
                                {topLogos.map((logo) => (

                                    <SplideSlide className={styles.logoItem} key={logo.name}>

                                        <Image src={logo.logo} alt={logo.name} width={128} height={64} loading="lazy" style={{ objectFit: "contain" }} />

                                    </SplideSlide>

                                ))}

                            </Splide>

                            <Splide
                                options={{ ...options, direction: "rtl" }}
                                extensions={{ AutoScroll }}
                                className={styles.splide}
                            >
                                {bottomLogos.map((logo) => (

                                    <SplideSlide className={styles.logoItem} key={logo.name}>

                                        <Image src={logo.logo} alt={logo.name} width={128} height={64} loading="lazy" style={{ objectFit: "contain" }} />

                                    </SplideSlide>

                                ))}

                            </Splide>
                        </>
                    ) : (
                        <>
                            <div className={styles.staticTrack}>
                                {topLogos.slice(0, 5).map((logo) => (

                                    <div className={styles.logoItem} key={logo.name}>

                                        <Image src={logo.logo} alt={logo.name} width={128} height={64} loading="lazy" style={{ objectFit: "contain" }} />

                                    </div>

                                ))}
                            </div>

                            <div className={styles.staticTrack}>
                                {bottomLogos.slice(0, 5).map((logo) => (

                                    <div className={styles.logoItem} key={logo.name}>

                                        <Image src={logo.logo} alt={logo.name} width={128} height={64} loading="lazy" style={{ objectFit: "contain" }} />

                                    </div>

                                ))}
                            </div>
                        </>
                    )}

                </div>

            </div>

        </section>

    );

}