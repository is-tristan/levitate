"use client";

import { facebookLogo, googleLogoMark, starIcons } from "@/data/icons";
import { easeInOut, motion } from "motion/react";

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

    return (

        <div className={`${styles.reviewLogos} ${layout === "inline" ? styles.inline : undefined} ${className || undefined}`}>

            {reviewItems.map((item, index) => (
                <motion.a
                    key={item.ariaLabel}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.reviewLogo}
                    aria-label={item.ariaLabel}
                    initial={{
                        opacity: 0,
                        y: 32
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2
                    }}
                    transition={{
                        duration: 0.5,
                        ease: easeInOut,
                        delay: index * 0.12
                    }}
                >

                    <div className={styles.reviewLogoHeader}>

                        <div className={styles.reviewLogoIcon} dangerouslySetInnerHTML={{ __html: item.icon }}></div>

                        <div className={styles.reviewLogoStar} dangerouslySetInnerHTML={{ __html: starIcons }}></div>

                    </div>

                    <span><strong>{item.reviewRating}</strong> Based on <strong className="colorPrimary">{item.reviewCount}+</strong> reviews</span>

                </motion.a>

            ))}

        </div>

    )

}