"use client";

// Styles
import bannerStyles from "@/styles/components/sections/banner-section.module.scss";
import styles from "@/styles/components/screens/reviews/reviews-banner.module.scss";

// Motion
import { motion } from "motion/react";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

// Icons
import {
    clutchLogo,
    facebookLogoAlt,
    googleGLogo,
    linkedinLogo,
    starIcon,
    xLogo,
    yelpLogo
} from "@/data/icons";

// Types
import type { ReviewsBannerProps } from "@/types/all-types";

// Platform icons staggered around the title
const platformIcons = [
    {
        name: "google",
        label: "Google",
        icon: googleGLogo,
        className: styles.google
    },
    {
        name: "clutch",
        label: "Clutch",
        icon: clutchLogo,
        className: styles.clutch
    },
    {
        name: "facebook",
        label: "Facebook",
        icon: facebookLogoAlt,
        className: styles.facebook
    },
    {
        name: "yelp",
        label: "Yelp",
        icon: yelpLogo,
        className: styles.yelp
    },
    {
        name: "x",
        label: "X",
        icon: xLogo,
        className: styles.x
    },
    {
        name: "linkedin",
        label: "LinkedIn",
        icon: linkedinLogo,
        className: styles.linkedin
    }
];

export default function ReviewsBanner({ className, heading, description }: ReviewsBannerProps) {
    const isBelowBreakpoint = useIsBelowBreakpoint();
    const disableMotion = isBelowBreakpoint;
    const containerVariants = getRevealContainerVariants();

    return (

        <section className={`row ${bannerStyles.banner} ${styles.reviewsBanner} ${className || undefined}`}>

            <div className={`container ${bannerStyles.bannerContainer} ${styles.bannerContainer}`}>

                {/* Floating review platform icons */}
                <div className={styles.platformIcons} aria-hidden="true">

                    {platformIcons.map((item) => (

                        <div
                            key={item.name}
                            className={`${styles.platformIcon} ${item.className}`}
                            title={item.label}
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                        />

                    ))}

                </div>

                <motion.div
                    className={`content ${bannerStyles.bannerContent} ${styles.bannerContent}`}
                    variants={disableMotion ? undefined : containerVariants}
                    initial={disableMotion ? undefined : "hidden"}
                    whileInView={disableMotion ? undefined : "visible"}
                    viewport={disableMotion ? undefined : revealViewport}
                >

                    <motion.div
                        className={`heading centered hasFullStop ${bannerStyles.bannerHeading}`}
                        variants={disableMotion ? undefined : revealItemVariants}
                    >

                        <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1>

                    </motion.div>

                    {/* Stars scale up between the heading and rating copy */}
                    <motion.div
                        className={styles.stars}
                        initial={disableMotion ? undefined : { scale: 0, opacity: 0 }}
                        whileInView={disableMotion ? undefined : { scale: 1, opacity: 1 }}
                        viewport={revealViewport}
                        transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
                        aria-hidden="true"
                    >

                        {Array.from({ length: 5 }).map((_, index) => (

                            <motion.span
                                key={`star-${index}`}
                                initial={disableMotion ? undefined : { scale: 0 }}
                                whileInView={disableMotion ? undefined : { scale: 1 }}
                                viewport={revealViewport}
                                transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.12 + index * 0.05 }}
                                dangerouslySetInnerHTML={{ __html: starIcon }}
                            />

                        ))}

                    </motion.div>

                    {description && (

                        <motion.p
                            variants={disableMotion ? undefined : revealItemVariants}
                            dangerouslySetInnerHTML={{ __html: description }}
                            suppressHydrationWarning={true}
                        ></motion.p>

                    )}

                </motion.div>

            </div>

        </section>

    );

}
