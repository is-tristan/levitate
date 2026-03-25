"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

// Styles
import styles from "@/styles/pages/contact-us.module.scss";

// Form
import Form from "@/components/handlers/form";

// Grid Background
const gridBackground = "/images/backgrounds/grid-background.svg";

export default function ContactForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const disableAnimation = useIsBelowBreakpoint();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });
    const headingYTarget = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 0, 0, -64]);
    const headingY = useSpring(headingYTarget, {
        stiffness: 128,
        damping: 32,
        mass: 0.8
    });

    return (

        <section ref={sectionRef} id="contactUs" className={`row contactUs ${styles.contactUs}`}>

            <div className={`container ${styles.contactUsContainer}`}>

                <motion.div className={`heading centered ${styles.headingContainer}`} style={disableAnimation ? undefined : { y: headingY }}>

                    <h1>Let<span className="colorPrimary">'</span>s <span className={styles.levitateText}>levitate</span> your digital presence<span className="colorPrimary">.</span></h1>

                    <div className={styles.blurredShape}></div>

                </motion.div>

                <div className={`form ${styles.contactUsForm}`}>

                    <Form />

                </div>

            </div>

            <div className={styles.gridBackground} style={{ backgroundImage: `url(${gridBackground})` }}></div>

        </section>

    )

}