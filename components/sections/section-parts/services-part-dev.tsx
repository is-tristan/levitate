"use client";

import Image from "next/image";
import { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "motion/react";

import Content from "@/components/content/content";
import Buttons from "@/components/handlers/buttons";

import styles from "@/styles/components/sections/services-section-tabs.module.scss";

// Development Services Images
const serviceImages = [
    {
        image: "/images/services/development/web-image-1.webp",
        alt: "Web Development 1",
    },
    {
        image: "/images/services/development/web-image-2.webp",
        alt: "Web Development 2",
    },
    {
        image: "/images/services/development/web-image-3.webp",
        alt: "Web Development 3",
    },
    {
        image: "/images/services/development/web-image-4.webp",
        alt: "Web Development 4",
    },
    {
        image: "/images/services/development/web-image-5.webp",
        alt: "Web Development 5",
    },
]

// Logos
const logos = [
    {
        image: "/images/logos/shopify-logo-light.svg",
        alt: "Shopify Logo",
        url: "https://www.shopify.com",
    },
    {
        image: "/images/logos/wordpress-logo-light.svg",
        alt: "WordPress Logo",
        url: "https://www.wordpress.com",
    },
    {
        image: "/images/logos/next-logo-light.svg",
        alt: "Next.js Logo",
        url: "https://www.nextjs.org",
    },
]

export default function ServicesPartDevelopment() {
    const stackedImagesRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: stackedImagesRef,
        offset: ["start end", "end start"]
    });

    const imageOneY = useTransform(scrollYProgress, [0, 1], [-128, 0]);
    const imageTwoY = useTransform(scrollYProgress, [0, 0.8], [-96, 0]);
    const imageThreeY = useTransform(scrollYProgress, [0, 0.6], [-64, 0]);
    const imageFourY = useTransform(scrollYProgress, [0, 0.4], [-32, 0]);
    const imageFiveY = useTransform(scrollYProgress, [0, 0.2], [0, 0]);
    const imageYValues = [imageOneY, imageTwoY, imageThreeY, imageFourY, imageFiveY];
    const fadeInUp = {
        initial: {
            opacity: 0,
            y: 32
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.5,
            ease: easeInOut
        }
    };

    return (

        <div className="container dualCols" data-name="web-development" aria-label="Web Development">

            <div className="contentCol">

                <Content
                    type="h2"
                    heading="Web design that <span class='gradientAnimation'>inspires confidence</span>"
                    hasFullStop={true}
                    description="At Levitate, we create beautiful, performance-driven websites that engage users and convert visitors into customers. Our Cardiff-based team designs with precision, combining creativity and strategy to build digital experiences that truly elevate your brand."
                />

                <div className={styles.logos}>

                    {logos.map((logo, index) => (

                        <motion.a
                            {...fadeInUp}
                            transition={{
                                ...fadeInUp.transition,
                                delay: 0.3 + index * 0.1
                            }}
                            href={logo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={logo.alt}
                            className={styles.logo}
                        >

                            <Image src={logo.image} alt={logo.alt} width={128} height={80} style={{ objectFit: "contain" }} />

                        </motion.a>

                    ))}

                </div>

                <Buttons
                    animationDelay={0.4}
                    labelOne="Send us your brief"
                    urlOne="/contact"
                    btnOneClassName="primary"
                />

            </div>

            <div className={`imageCol hasRadius ${styles.devImageCol}`}>

                <div ref={stackedImagesRef} className={styles.devStackedImages}>

                    {serviceImages.map((image, index) => (

                        <motion.div
                            key={index}
                            className={`${styles.devStackedImage} ${styles[`stackedImage-${index + 1}`]}`}
                            style={{ y: imageYValues[index] }}
                        >
                            <Image
                                src={image.image}
                                alt={image.alt}
                                fill
                                sizes="100%"
                                style={{ objectFit: "contain" }}
                                priority={index === 0}
                            />
                        </motion.div>

                    ))}

                </div>

            </div>

        </div>

    )

}