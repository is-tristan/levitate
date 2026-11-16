"use client";

// Next
import Image from "next/image";

// Icons
import { quoteIcon } from "@/data/icons";

// Styles
import styles from "@/styles/components/carousels/testimonials-carousel.module.scss";

import type { TestimonialItemProps } from "@/types/all-types";

export default function TestimonialItem({
    testimonial,
}: TestimonialItemProps) {

    return (

        <div className={styles.testimonial}>

            <div className={`hidden-s ${styles.testimonialImage}`}>

                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={576}
                    height={576}
                    sizes="(max-width: 1023px) 0px, 36vw"
                    loading="lazy"
                    quality={70}
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                />

            </div>

            <div className={styles.testimonialContent}>

                <p>{testimonial.quote}</p>

                <div className={styles.testimonialMeta}>

                    <div className={`hidden-l ${styles.testimonialImage}`}>

                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            sizes="48px"
                            loading="lazy"
                            quality={65}
                            style={{ objectFit: "cover", objectPosition: "center", borderRadius: "50%" }}
                        />

                    </div>

                    <div className={`hidden-s ${styles.testimonialMetaIcon}`} dangerouslySetInnerHTML={{ __html: quoteIcon }} />

                    <div className={styles.testimonialMetaContent}>

                        <h3 className={"colorPrimary"}>{testimonial.name}</h3>

                        <span>{testimonial.position}</span>

                    </div>

                </div>

            </div>

        </div>

    );

}
