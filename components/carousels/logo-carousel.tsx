"use client";

// React
import { useEffect, useState } from "react";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";

// Styles
import styles from "@/styles/components/carousels/logo-carousel.module.scss";

// Options
const options = {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "3rem",
    arrows: false,
    pagination: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    drag: false,
    fixedWidth: 128,
    fixedHeight: 64,
    lazyLoad: "nearby",
    breakpoints: {
        1023: {
            perPage: 3,
            gap: "1.5rem",
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

type LogoItem = {
    name: string;
    logo: string;
};

type LogoCarouselProps = {
    logos?: LogoItem[];
};

// Shuffle
const shuffleLogos = (items: LogoItem[]) => {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
    }

    return shuffledItems;
};

export default function LogoCarousel({
    logos = [],
}: LogoCarouselProps) {
    const [topLogos, setTopLogos] = useState(logos);
    const [bottomLogos, setBottomLogos] = useState(logos);

    useEffect(() => {
        setTopLogos(shuffleLogos(logos));
        setBottomLogos(shuffleLogos(logos));
    }, [logos]);

    if (!logos.length) {
        return null;
    }

    return (

        <div className="container noPaddingTop">

            <div className={styles.carouselContainer}>

                <>

                    <Splide
                        options={options}
                        extensions={{ AutoScroll }}
                        className={styles.splide}
                    >
                        {topLogos.map((logo) => (

                            <SplideSlide className={styles.logoItem} key={logo.name}>

                                <img data-splide-lazy={logo.logo} alt={logo.name} width={128} height={64} style={{ objectFit: "contain" }} />

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

                                <img data-splide-lazy={logo.logo} alt={logo.name} width={128} height={64} style={{ objectFit: "contain" }} />

                            </SplideSlide>

                        ))}

                    </Splide>

                </>

            </div>

        </div>

    );

}