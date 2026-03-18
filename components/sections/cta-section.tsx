"use client";

import { easeInOut, motion } from "motion/react";

// Imports
import Content from "@/components/content/content";
import Vanta from "@/components/sections/section-parts/cta/vanta";

// Styles
import styles from "@/styles/components/sections/cta-section.module.scss";

// Flags
import { ukFlag, usFlag, nzFlag, uaeFlag, caFlag, chFlag } from "@/data/icons";

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
    heading: string;
    description?: string;
    labelOne?: string;
    urlOne?: string;
    labelTwo?: string;
    urlTwo?: string;
}

export default function CTA({
    eyebrow = "",
    heading = "Creating a digital impact worldwide.",
    description = "We help brands explore their digital potential, through award winning, hand crafted websites.",
    labelOne = "Get in touch",
    urlOne = "/contact",
    labelTwo = "View our work",
    urlTwo = "/portfolio",
}: CTAProps) {

    return (

        <section id="cta" className={`row ${styles.ctaSection}`}>

            <div className={`container dualCols ${styles.ctaContainer}`}>

                <div className="contentCol">

                    <div className={`${styles.flags}`}>

                        {flags.map((flag, index) => (

                            <motion.span
                                className={`${styles.flag}`}
                                key={flag.name}
                                initial={{
                                    opacity: 0,
                                    x: 16
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.4
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.12,
                                    ease: easeInOut
                                }}
                                dangerouslySetInnerHTML={{ __html: flag.flag }}
                            />

                        ))}

                    </div>

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