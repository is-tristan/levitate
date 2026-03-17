"use client";

import { facebookLogo, googleLogoMark, starIcons } from "@/data/icons";
import { easeInOut, motion } from "motion/react";

// Styles
import styles from "@/styles/components/items/review-items.module.scss";

export default function ReviewItems() {
    const reviewItems = [
        {
            ariaLabel: "Facebook Reviews",
            icon: facebookLogo
        },
        {
            ariaLabel: "Google Reviews",
            icon: googleLogoMark
        }
    ];

    return (

        <div className={styles.reviewLogos}>

            {reviewItems.map((item, index) => (
                <motion.a
                    key={item.ariaLabel}
                    href="#"
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

                    <span><strong>5.0</strong> Based on <strong className="colorPrimary">114+</strong>reviews</span>

                </motion.a>
            ))}

        </div>

    )

}