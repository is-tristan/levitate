"use client";

// Next
import Image from "next/image";

import { partnerLogos } from "@/data/partner-logos";
import { motion } from "motion/react";
import styles from "@/styles/components/grids/partners-grid.module.scss";
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";

type PartnersGridProps = {
    containerClassName?: string;
}

export default function PartnersGrid({
    containerClassName,
}: PartnersGridProps) {
    const containerVariants = getRevealContainerVariants();

    return (

        <section id="partners" className="row">

            <div className={`container ${containerClassName || undefined}`}>

                <div className="heading centered hasFullStop">

                    <h3 className={styles.heading} style={{ fontSize: "1.25rem", fontFamily: "var(--font-dm-sans)", fontWeight: "700" }}>Partnered and <strong className="gradientAnimation">certified</strong> by world-leading digital platforms</h3>

                </div>

                <motion.div
                    className={styles.partnersGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                >

                    {partnerLogos.map((partner, index) => (

                        <motion.div
                            variants={revealItemVariants}
                            className={styles.partnersGridItem}
                            key={partner.name}
                        >

                            <ViewportBreakpoint mode="mobile">

                                <Image src={partner.image} alt={partner.name} width={128} height={64} style={{ objectFit: "contain" }} loading="lazy" />

                            </ViewportBreakpoint>

                            <ViewportBreakpoint mode="desktop">

                                <Image src={partner.image} alt={partner.name} width={256} height={64} style={{ objectFit: "contain" }} loading="lazy" />

                            </ViewportBreakpoint>

                        </motion.div>

                    ))}

                </motion.div>

            </div>

        </section>

    )

}