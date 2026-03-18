"use client";

// Data
import { logos } from "@/data/logos";

// Next
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
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
}

export default function LogoCarousel() {

    return (

        <section id="logos" className="row" aria-hidden="true">

            <div className="container noPaddingBottom">

                <div className="heading centered hasFullStop">

                    <h3 className={styles.heading} style={{ fontSize: "1.25rem", fontFamily: "var(--font-dm-sans)", fontWeight: "700" }}>Over <strong className="gradientAnimation">700+</strong> businesses have chosen us to grow online</h3>

                </div>

            </div>

            <div className="container noPaddingTop">

                <div className={styles.carouselContainer}>

                    <Splide
                        options={options}
                        extensions={{ AutoScroll }}
                        className={styles.splide}
                    >
                        {logos.map((logo) => (

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
                        {logos.map((logo) => (

                            <SplideSlide className={styles.logoItem} key={logo.name}>

                                <Image src={logo.logo} alt={logo.name} width={128} height={64} loading="lazy" style={{ objectFit: "contain" }} />

                            </SplideSlide>

                        ))}

                    </Splide>

                </div>

            </div>

        </section>

    )

}