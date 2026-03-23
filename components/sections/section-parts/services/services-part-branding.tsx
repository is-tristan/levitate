"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import Content from "@/components/content/content";
import Buttons from "@/components/handlers/buttons";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

import styles from "@/styles/components/sections/services-section.module.scss";

// Logos
const logos = [
    {
        image: "/images/logos/adobe-photoshop-logo-light.svg",
        alt: "Adobe Photoshop Logo",
        url: "https://www.adobe.com",
    },
    {
        image: "/images/logos/adobe-illustrator-logo-light.svg",
        alt: "Adobe Illustrator Logo",
        url: "https://www.adobe.com",
    },
    {
        image: "/images/logos/figma-logo-light.svg",
        alt: "Figma Logo",
        url: "https://www.figma.com",
    },
]

const brandPalette = [
    {
        name: "Signal",
        value: "#f97316",
    },
    {
        name: "Canvas",
        value: "#f8fafc",
    },
    {
        name: "Midnight",
        value: "#0f172a",
    },
]

export default function ServicesPartBranding() {
    const disableAnimation = useIsBelowBreakpoint();
    const brandingBoardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: brandingBoardRef,
        offset: ["start end", "end start"]
    });
    const brandMarkY = useTransform(scrollYProgress, [0, 0.5, 1], [-56, 0, 0]);
    const paletteY = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, 0]);
    const typeY = useTransform(scrollYProgress, [0, 0.5, 1], [-32, 0, 0]);
    const voiceY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, 0]);
    const containerVariants = getRevealContainerVariants();
    const logoVariants = getRevealContainerVariants();

    return (

        <div className={`container dualCols rowReverse ${styles.brandingContainer}`} data-name="branding" aria-label="Branding">

            <div className={`imageCol aspectRatio1x1 hasRadius ${styles.brandingImageCol}`}>

                <motion.div
                    ref={brandingBoardRef}
                    className={styles.brandingBoard}
                    variants={disableAnimation ? undefined : containerVariants}
                    initial={disableAnimation ? undefined : "hidden"}
                    whileInView={disableAnimation ? undefined : "visible"}
                    viewport={disableAnimation ? undefined : revealViewport}
                >

                    <motion.div variants={disableAnimation ? undefined : revealItemVariants} className={`${styles.brandingCard} ${styles.brandMarkCard}`} style={disableAnimation ? undefined : { y: brandMarkY }} >

                        <span className={styles.brandingCardEyebrow}>Brand mark</span>

                        <div className={styles.brandMark}>LV</div>

                        <p>Minimal geometry with a confident, premium edge.</p>

                    </motion.div>

                    <motion.div variants={disableAnimation ? undefined : revealItemVariants} className={`${styles.brandingCard} ${styles.brandPaletteCard}`} style={disableAnimation ? undefined : { y: paletteY }} >

                        <span className={styles.brandingCardEyebrow}>Palette</span>

                        <div className={styles.brandPalette}>

                            {brandPalette.map((color) => (

                                <div key={color.name} className={styles.brandPaletteSwatch}>

                                    <span className={styles.brandPaletteColor} style={{ backgroundColor: color.value }}></span>

                                    <div>

                                        <strong>{color.name}</strong>

                                        <span>{color.value}</span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </motion.div>

                    <motion.div variants={disableAnimation ? undefined : revealItemVariants} className={`${styles.brandingCard} ${styles.brandTypeCard}`} style={disableAnimation ? undefined : { y: typeY }} >

                        <span className={styles.brandingCardEyebrow}>Typography</span>

                        <div className={styles.brandTypeSpecimen}>Aa</div>

                        <div className={styles.brandTypeMeta}>

                            <strong>Sora</strong>

                            <span>Bold, modern, high-clarity display system.</span>

                        </div>

                    </motion.div>

                    <motion.div variants={disableAnimation ? undefined : revealItemVariants} className={`${styles.brandingCard} ${styles.brandVoiceCard}`} style={disableAnimation ? undefined : { y: voiceY }} >

                        <span className={styles.brandingCardEyebrow}>Tone of voice</span>

                        <ul className={styles.brandVoiceList}>

                            <li>Clear</li>

                            <li>Distinct</li>

                            <li>Trustworthy</li>

                        </ul>

                    </motion.div>

                </motion.div>

                <div className={styles.backgroundImage} aria-hidden="true"></div>

            </div>

            <div className="contentCol">

                <Content
                    eyebrow="Branding"
                    type="h2"
                    heading="Brand identities that <span class='gradientAnimation'>leave a mark</span>"
                    hasFullStop={true}
                    description="Your brand deserves to stand out. Levitate's creative team crafts distinctive brand identities that capture your voice, values, and vision — from logo design to messaging and visuals that make a lasting impression."
                />

                <motion.div
                    className={styles.logos}
                    variants={logoVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                >

                    {logos.map((logo) => (

                        <motion.a
                            variants={revealItemVariants}
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
                    urlOne="/services/branding"
                    btnOneClassName="primary"
                />

            </div>

        </div>

    )

}