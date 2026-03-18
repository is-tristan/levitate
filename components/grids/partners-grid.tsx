"use client";

import Image from "next/image";
import { easeInOut, motion } from "motion/react";

// Data
import { partnerLogos } from "@/data/partner-logos";

// Styles
import styles from "@/styles/components/grids/partners-grid.module.scss";

// Types
type PartnersGridProps = {
    containerClassName?: string;
}

export default function PartnersGrid({
    containerClassName,
}: PartnersGridProps) {

    return (

        <section id="partners" className="row">

            <div className={`container ${containerClassName || undefined}`}>

                <div className="heading centered hasFullStop">

                    <h3 className={styles.heading} style={{fontSize: "1.25rem", fontFamily: "var(--font-dm-sans)", fontWeight: "700"}}>Partnered and <strong className="gradientAnimation">certified</strong> by world-leading digital platforms</h3>

                </div>

                <div className={styles.partnersGrid}>

                    {partnerLogos.map((partner, index) => (

                        <motion.div
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
                                delay: index * 0.08,
                                ease: easeInOut
                            }}
                            className={styles.partnersGridItem}
                            key={partner.name}
                        >

                            <Image src={partner.imageLight} alt={partner.name} width={128} height={64} style={{ objectFit: "contain" }} />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    )

}