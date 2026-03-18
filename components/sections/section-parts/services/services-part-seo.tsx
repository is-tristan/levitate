"use client";

import Image from "next/image";
import { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "motion/react";

import Content from "@/components/content/content";
import Buttons from "@/components/handlers/buttons";

import styles from "@/styles/components/sections/services-section.module.scss";


// Logos
const logos = [
    {
        image: "/images/logos/google-certified-partner-stacked-light.svg",
        alt: "Google Certified Partner Logo",
        url: "https://www.google.com",
    },
    {
        image: "/images/logos/semrush-logo-light.svg",
        alt: "Semrush Logo",
        url: "https://www.semrush.com",
    },
    {
        image: "/images/logos/moz-logo-light.svg",
        alt: "Moz Logo",
        url: "https://www.moz.com",
    },
]

const graphPoints = [
    { x: 32, y: 216 },
    { x: 124, y: 180 },
    { x: 216, y: 188 },
    { x: 308, y: 124 },
    { x: 400, y: 92 },
    { x: 492, y: 40 }
];

const graphLinePath = graphPoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

const graphAreaPath = `${graphLinePath} L 492 248 L 32 248 Z`;

export default function ServicesPartSEO() {
    const graphRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: graphRef,
        offset: ["start 80%", "end 35%"]
    });
    const graphOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const graphY = useTransform(scrollYProgress, [0, 0.2], [32, 0]);
    const graphAreaOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
    const graphLinePathLength = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);
    const graphLineOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const pointProgress = graphPoints.map((_, index) => ({
        opacity: useTransform(scrollYProgress, [0.3 + index * 0.07, 0.38 + index * 0.07], [0, 1]),
        scale: useTransform(scrollYProgress, [0.3 + index * 0.07, 0.38 + index * 0.07], [0, 1])
    }));
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

        <div className={`container dualCols ${styles.seoContainer}`} data-name="search-marketing" aria-label="Search Marketing">

            <div className={`imageCol aspectRatio1x1 hasRadius ${styles.seoImageCol}`}>
                <motion.div
                    ref={graphRef}
                    className={styles.seoGraph}
                    style={{
                        opacity: graphOpacity,
                        y: graphY
                    }}
                >
                    <div className={styles.seoGraphEyebrow}>
                        <span>Organic growth</span>
                        <span>+187%</span>
                    </div>

                    <svg viewBox="0 0 524 248" className={styles.seoGraphChart} aria-hidden="true">
                        <path d="M 32 248 L 492 248" className={styles.seoGraphAxis} />
                        <path d="M 32 40 L 32 248" className={styles.seoGraphAxis} />
                        <path d="M 32 196 L 492 196" className={styles.seoGraphGrid} />
                        <path d="M 32 144 L 492 144" className={styles.seoGraphGrid} />
                        <path d="M 32 92 L 492 92" className={styles.seoGraphGrid} />

                        <motion.path
                            d={graphAreaPath}
                            className={styles.seoGraphArea}
                            style={{
                                opacity: graphAreaOpacity
                            }}
                        />

                        <motion.path
                            d={graphLinePath}
                            className={styles.seoGraphLine}
                            style={{
                                pathLength: graphLinePathLength,
                                opacity: graphLineOpacity
                            }}
                        />

                        {graphPoints.map((point, index) => (
                            <motion.circle
                                key={`${point.x}-${point.y}`}
                                cx={point.x}
                                cy={point.y}
                                r="7"
                                className={styles.seoGraphPoint}
                                style={{
                                    opacity: pointProgress[index].opacity,
                                    scale: pointProgress[index].scale,
                                    transformOrigin: `${point.x}px ${point.y}px`
                                }}
                            />
                        ))}
                    </svg>

                    <div className={styles.seoGraphLabels}>
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                    </div>
                </motion.div>

                <div className={styles.backgroundImage} aria-hidden="true"></div>
            </div>

            <div className="contentCol">

                <Content
                    eyebrow="Search Marketing"
                    type="h2"
                    heading="Search marketing that <span class='gradientAnimation'>delivers results</span>"
                    hasFullStop={true}
                    description="We help ambitious businesses rise to the top of search results with data-led SEO and Google Ads management. From keyword strategy to campaign optimisation, our approach drives consistent leads, measurable growth, and long-term online performance."
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
                    labelOne="Learn More"
                    urlOne="/services/search-marketing"
                    btnOneClassName="primary"
                />

            </div>

        </div>

    )

}