"use client";

import Content from "@/components/content/content";
import Vanta from "@/components/sections/section-parts/cta/vanta";
import { motion } from "motion/react";
import styles from "@/styles/components/sections/cta-section.module.scss";
import { ukFlag, usFlag, nzFlag, uaeFlag, caFlag, chFlag } from "@/data/icons";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";

const flags = [
    {
        name: "UK",
        flag: ukFlag,
    },
    {
        name: "US",
        flag: usFlag,
    },
    {
        name: "NZ",
        flag: nzFlag,
    },
    {
        name: "UAE",
        flag: uaeFlag,
    },
    {
        name: "CA",
        flag: caFlag,
    },
    {
        name: "CH",
        flag: chFlag,
    },
]

// Types
type CTAProps = {
    className?: string;
    eyebrow?: string;
    heading?: string;
    description?: string;
    labelOne?: string;
    urlOne?: string;
    labelTwo?: string;
    urlTwo?: string;
}

export default function CTA({
    eyebrow = "",
    heading = "Creating a digital impact <span class='gradientAnimation'>worldwide</span>",
    description = "We help brands explore their digital potential, through award winning, hand crafted websites.",
    labelOne = "Get in touch",
    urlOne = "/contact",
    labelTwo = "View our work",
    urlTwo = "/portfolio",
}: CTAProps) {
    const flagVariants = getRevealContainerVariants();

    return (

        <section id="cta" className={`row ${styles.ctaSection}`}>

            <div className={`container dualCols ${styles.ctaContainer}`}>

                <div className="contentCol">

                    <motion.div
                        className={`${styles.flags}`}
                        variants={flagVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={revealViewport}
                    >

                        {flags.map((flag) => (

                            <motion.span
                                className={`${styles.flag}`}
                                key={flag.name}
                                variants={revealItemVariants}
                                dangerouslySetInnerHTML={{ __html: flag.flag }}
                            />

                        ))}

                    </motion.div>

                    <Content
                        containerClassName={styles.ctaContent}
                        eyebrow={eyebrow}
                        type="h2"
                        heading={heading}
                        description={description}
                        hasFullStop={true}
                        btnOneClassName="primary"
                        labelOne={labelOne}
                        urlOne={urlOne}
                        btnTwoClassName="secondary"
                        labelTwo={labelTwo}
                        urlTwo={urlTwo}
                    />

                </div>

                <div className="spacerCol hidden-s hidden-m" />

            </div>

            <Vanta />

        </section>

    )

}