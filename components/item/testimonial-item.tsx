"use client";

// Next
import Image from "next/image";

// Icons
import { quoteIcon } from "@/data/icons";

// Styles
import styles from "@/styles/components/carousels/testimonials-carousel.module.scss";

// Helpers
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";

// Types
type TestimonialItemData = {
    name: string;
    position: string;
    quote: string;
    image: string;
};

type TestimonialItemProps = {
    testimonial: TestimonialItemData;
};

export default function TestimonialItem({
    testimonial,
}: TestimonialItemProps) {

    return (

        <div className={styles.testimonial}>

            <ViewportBreakpoint mode="desktop">

                <div className={styles.testimonialImage}>

                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={576}
                        height={576}
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        loading="lazy"
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                    />

                </div>

            </ViewportBreakpoint>

            <div className={styles.testimonialContent}>

                <p>{testimonial.quote}</p>

                <div className={styles.testimonialMeta}>

                    <ViewportBreakpoint mode="mobile">

                        <div className={styles.testimonialImage}>

                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                loading="lazy"
                                style={{ objectFit: "cover", objectPosition: "center", borderRadius: "50%" }}
                            />

                        </div>

                    </ViewportBreakpoint>

                    <ViewportBreakpoint mode="desktop">

                        <div className={styles.testimonialMetaIcon} dangerouslySetInnerHTML={{ __html: quoteIcon }} />

                    </ViewportBreakpoint>

                    <div className={styles.testimonialMetaContent}>

                        <h3 className={"colorPrimary"}>{testimonial.name}</h3>

                        <span>{testimonial.position}</span>

                    </div>

                </div>

            </div>

        </div>

    );

}
