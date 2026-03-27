"use client";

import { facebookLogo, googleLogoMark, starIcons } from "@/data/icons";
import { motion } from "motion/react";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

// Styles
import styles from "@/styles/components/items/review-items.module.scss";

// Types
type ReviewItemsProps = {
    layout?: "default" | "inline";
    className?: string;
}

// Data
const reviewItems = [
    {
        ariaLabel: "Facebook Reviews",
        icon: facebookLogo,
        reviewCount: 110,
        reviewRating: 5.0,
        url: "https://www.facebook.com/LevitateOnline/reviews/",
    },
    {
        ariaLabel: "Google Reviews",
        icon: googleLogoMark,
        reviewCount: 19,
        reviewRating: 4.9,
        url: "https://reviewthis.biz/levitate",
    }
];

export default function ReviewItems({
    layout = "default",
    className,
}: ReviewItemsProps) {
    const isBelowBreakpoint = useIsBelowBreakpoint();
    const containerVariants = getRevealContainerVariants();

    return (

        <motion.div
            className={`${styles.reviewLogos} ${layout === "inline" ? styles.inline : undefined} ${className || undefined}`}
            variants={isBelowBreakpoint ? undefined : containerVariants}
            initial={isBelowBreakpoint ? undefined : "hidden"}
            whileInView={isBelowBreakpoint ? undefined : "visible"}
            viewport={isBelowBreakpoint ? undefined : revealViewport}
        >

            {reviewItems.map((item) => (
                <motion.a
                    key={item.ariaLabel}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.reviewLogo}
                    aria-label={item.ariaLabel}
                    variants={isBelowBreakpoint ? undefined : revealItemVariants}
                >

                    <div className={styles.reviewLogoHeader}>

                        <div className={styles.reviewLogoIcon} dangerouslySetInnerHTML={{ __html: item.icon }}></div>

                        <div className={styles.reviewLogoStar} dangerouslySetInnerHTML={{ __html: starIcons }}></div>

                    </div>

                    <span><strong>{item.reviewRating}</strong> Based on <strong className="colorPrimary">{item.reviewCount}+</strong> reviews</span>

                </motion.a>

            ))}

        </motion.div>

    )

}