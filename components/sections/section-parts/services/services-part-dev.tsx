"use client";

import Image from "next/image";
import { motion, type MotionValue, useTransform } from "motion/react";

import Content from "@/components/content/content";
import Buttons from "@/components/handlers/buttons";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

import styles from "@/styles/components/sections/services-section.module.scss";

// Development Services Images
const serviceImages = [
    {
        image: "/images/services/development/phone-1.webp",
        alt: "Web Development 1",
    },
    {
        image: "/images/services/development/phone-2.webp",
        alt: "Web Development 2",
    },
    {
        image: "/images/services/development/phone-3.webp",
        alt: "Web Development 3",
    },
    {
        image: "/images/services/development/phone-4.webp",
        alt: "Web Development 4",
    },
    {
        image: "/images/services/development/phone-5.webp",
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

type ServicesPartDevelopmentProps = {
    scrollProgress: MotionValue<number>;
};

export default function ServicesPartDevelopment({ scrollProgress }: ServicesPartDevelopmentProps) {
    const disableAnimation = useIsBelowBreakpoint();
    const imageVariants = getRevealContainerVariants();
    const logoVariants = getRevealContainerVariants();

    const imageOneY = useTransform(scrollProgress, [0, 0.14, 0.78], [0, 0, -360]);
    const imageTwoY = useTransform(scrollProgress, [0, 0.14, 0.78], [0, 0, -288]);
    const imageThreeY = useTransform(scrollProgress, [0, 0.14, 0.78], [0, 0, -216]);
    const imageFourY = useTransform(scrollProgress, [0, 0.14, 0.78], [0, 0, -144]);
    const imageFiveY = useTransform(scrollProgress, [0, 0.14, 0.78], [0, 0, -72]);
    const imageYValues = [imageOneY, imageTwoY, imageThreeY, imageFourY, imageFiveY];

    return (

        <div className={`container dualCols rowReverse ${styles.devContainer}`} data-name="web-development" aria-label="Web Development">

            <div className={`imageCol aspectRatio1x1 hasRadius ${styles.devImageCol}`}>

                <motion.div
                    className={styles.devStackedImages}
                    variants={disableAnimation ? undefined : imageVariants}
                    initial={disableAnimation ? undefined : "hidden"}
                    whileInView={disableAnimation ? undefined : "visible"}
                    viewport={disableAnimation ? undefined : revealViewport}
                >

                    {serviceImages.map((image, index) => (

                        <motion.div
                            key={index}
                            className={`${styles.devStackedImage} ${styles[`stackedImage-${index + 1}`]}`}
                            variants={disableAnimation ? undefined : revealItemVariants}
                            style={disableAnimation ? undefined : { y: imageYValues[index] }}
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

                </motion.div>

                <div className={styles.backgroundImage} aria-hidden="true"></div>

            </div>

            <div className="contentCol">

                <Content
                    eyebrow="Web Development"
                    type="h2"
                    heading="Web design that <span class='gradientAnimation'>inspires confidence</span>"
                    hasFullStop={true}
                    description="At Levitate, we create beautiful, performance-driven websites that engage users and convert visitors into customers. Our Cardiff-based team designs with precision, combining creativity and strategy to build digital experiences that truly elevate your brand."
                />

                <motion.div
                    className={styles.logos}
                    variants={disableAnimation ? undefined : logoVariants}
                    initial={disableAnimation ? undefined : "hidden"}
                    whileInView={disableAnimation ? undefined : "visible"}
                    viewport={disableAnimation ? undefined : revealViewport}
                >

                    {logos.map((logo) => (

                        <motion.a
                            variants={disableAnimation ? undefined : revealItemVariants}
                            href={logo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={logo.alt}
                            className={styles.logo}
                        >

                            <Image src={logo.image} alt={logo.alt} width={128} height={80} style={{ objectFit: "contain" }} loading="lazy" />

                        </motion.a>

                    ))}

                </motion.div>

                <Buttons
                    animationDelay={0.4}
                    labelOne="Learn More"
                    urlOne="/services/web-development"
                    btnOneClassName="primary"
                />

            </div>

        </div>

    )

}