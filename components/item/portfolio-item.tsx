"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Icons
import { arrowRight } from "@/data/icons";

// Styles
import styles from "@/styles/components/carousels/portfolio-carousel.module.scss";

import type { PortfolioItemProps } from "@/types/all-types";

export default function PortfolioItem({
    item,
    isMobile,
    onMouseEnter,
    onMouseLeave,
    videoRef,
    priority = false,
}: PortfolioItemProps) {
    return (

        <div
            className={`${styles.carouselItem} ${isMobile ? ` ${styles.slideActive}` : undefined}`}
            aria-label={item.name}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >

            {item.video && !isMobile ? (

                <video
                    ref={videoRef}
                    src={item.video}
                    muted
                    loop
                    playsInline
                    className={styles.carouselVideo}
                    preload="none"
                    poster={item.poster}
                />

            ) : (

                <Image
                    src={item.poster}
                    alt={item.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw"
                    className={styles.carouselImage}
                    priority={priority}
                    loading={priority ? undefined : "lazy"}
                    quality={70}
                />

            )}

            <div className={styles.carouselContent}>

                <h3>{item.name}<span className="colorAccent">.</span></h3>

                <div className={styles.carouselTextLink}>

                    <span>View Website</span>

                    <span className={styles.icon} dangerouslySetInnerHTML={{ __html: arrowRight }} />

                </div>

            </div>

            <Link
                href={item.url}
                className={styles.itemLink}
                aria-label={`View website for ${item.name}`}
                target="_blank"
                rel="noopener noreferrer"
            />

        </div>

    );

}
