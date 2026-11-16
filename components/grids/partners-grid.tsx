"use client";

// Next
import Image from "next/image";

import { partnerLogos } from "@/data/partner-logos";
import { motion } from "motion/react";
import styles from "@/styles/components/grids/partners-grid.module.scss";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

import type { PartnersGridProps } from "@/types/all-types";

export default function PartnersGrid({
    containerClassName,
}: PartnersGridProps) {
    const disableMotion = useIsBelowBreakpoint();
    const containerVariants = getRevealContainerVariants();

    return (

        <section id="partners" className={`row ${styles.partnersRow}`}>

            <div className={`container ${containerClassName || undefined}`}>

                <div className="heading centered hasFullStop">

                    <h3 className="altHeading">Partnered and <strong className="gradientAnimation">certified</strong> by world-leading digital platforms</h3>

                </div>

                <motion.div
                    className={styles.partnersGrid}
                    variants={disableMotion ? undefined : containerVariants}
                    initial={disableMotion ? undefined : "hidden"}
                    whileInView={disableMotion ? undefined : "visible"}
                    viewport={disableMotion ? undefined : revealViewport}
                >

                    {partnerLogos.map((partner) => (

                        <motion.div
                            variants={disableMotion ? undefined : revealItemVariants}
                            className={styles.partnersGridItem}
                            key={partner.name}
                        >

                            <Image
                                src={partner.image}
                                alt={partner.name}
                                width={256}
                                height={64}
                                sizes="(max-width: 767px) 30vw, (max-width: 1023px) 20vw, 12vw"
                                style={{ objectFit: "contain", width: "100%", height: "auto" }}
                                loading="lazy"
                                quality={75}
                            />

                        </motion.div>

                    ))}

                </motion.div>

            </div>

        </section>

    )

}
