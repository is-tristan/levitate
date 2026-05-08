"use client";

// Types
import { SectionProps } from "@/types/all-types";

// Next
import Image from "next/image";
import { motion } from "motion/react";
  
// Components
import Content from "@/components/content/content";

// Styles
import styles from "@/styles/components/sections/section.module.scss";

export default function Section({ heading, description, image, imageAlignment = "right" }: SectionProps) {

    return (

        <section className={`row ${styles.section}`}>

            <div className={`container ${styles.sectionContainer} ${image ? "dualCols" : "centered"} ${imageAlignment === "right" ? "rowReverse" : null}`}>

                {image && (

                    <motion.div
                        className="imageCol"
                        initial={{ opacity: 0, x: imageAlignment === "right" ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >

                        <Image src={image} alt={heading} width={768} height={768} sizes="(max-width: 768px) 100vw, 768px" style={{ objectFit: "contain" }} loading="lazy" />

                    </motion.div>

                )}

                <div className="contentCol">

                    <Content
                        type="h2"
                        heading={heading}
                        description={description || undefined}
                        hasFullStop={true}
                        layout={description ? "default" : "centered"}
                        labelOne="Contact Us"
                        urlOne="#contact"
                        btnOneClassName="primary"
                    />

                </div>

            </div>

        </section>

    )


}