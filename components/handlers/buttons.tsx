"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { PowerGlitch, PowerGlitchOptions } from "powerglitch";
import { arrowRight } from "@/data/icons";
import { ButtonsProps } from "@/types/all-types";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

const glitchOptions: PowerGlitchOptions = {
    playMode: "hover",
    optimizeSeo: true,
    createContainers: true,
    hideOverflow: false,
    timing: {
        duration: 200,
        iterations: 1,
        easing: "ease-in-out"
    },
    glitchTimeSpan: {
        start: 0,
        end: 1
    },
    shake: {
        velocity: 2,
        amplitudeX: 0.2,
        amplitudeY: 0.2
    },
    slice: {
        count: 6,
        velocity: 15,
        minHeight: 0.02,
        maxHeight: 0.15,
        hueRotate: true,
        cssFilters: ""
    },
    pulse: false
};

export default function Buttons({
    animationDelay = 0,
    disableAnimation = false,
    buttonContainerClassName,
    buttonAlignment,
    btnOneClassName,
    btnTwoClassName,
    labelOne,
    labelTwo,
    iconOne = arrowRight,
    iconTwo = arrowRight,
    urlOne,
    urlTwo,
    targetOne,
    targetTwo,
    relOne,
    relTwo,
    submitForm = false }: ButtonsProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isBelowBreakpoint = useIsBelowBreakpoint();
    const disableMotion = disableAnimation || isBelowBreakpoint;
    const containerVariants = getRevealContainerVariants(animationDelay);

    useEffect(() => {
        if (!containerRef.current || isBelowBreakpoint) {
            return;
        }

        const buttons = containerRef.current.querySelectorAll(".btn");

        buttons.forEach(button => {
            PowerGlitch.glitch(button as HTMLElement, glitchOptions);
        });
    }, [isBelowBreakpoint]);

    return (

        <motion.div
            ref={containerRef}
            className={`buttons ${buttonContainerClassName || undefined} ${buttonAlignment === "centered" ? "centered" : undefined}`}
            variants={disableMotion ? undefined : containerVariants}
            initial={disableMotion ? undefined : "hidden"}
            whileInView={disableMotion ? undefined : "visible"}
            viewport={disableMotion ? undefined : revealViewport}
        >

            <motion.div variants={disableMotion ? undefined : revealItemVariants}>

                {submitForm ? (

                    <button type="submit" className={`btn ${btnOneClassName || undefined} `}>

                        <div className="buttonContent">

                            <span className="buttonLabel">{labelOne}</span>

                            {iconOne && <div className="icon" dangerouslySetInnerHTML={{ __html: iconOne || { arrowRight } }} />}

                        </div>

                    </button>

                ) : (

                    <Link href={urlOne || "#"} target={targetOne || "_self"} rel={relOne || undefined} className={`btn ${btnOneClassName || undefined} `}>

                        <div className="buttonContent">

                            <span className="buttonLabel">{labelOne}</span>

                            {iconOne && <div className="icon" dangerouslySetInnerHTML={{ __html: iconOne || { arrowRight } }} />}

                        </div>

                    </Link>

                )}

            </motion.div>

            {labelTwo && (

                <motion.div variants={disableMotion ? undefined : revealItemVariants}>

                    <Link href={urlTwo || "#"} target={targetTwo || "_self"} rel={relTwo || undefined} className={`btn ${btnTwoClassName || undefined} `}>

                        <div className="buttonContent">

                            <span className="buttonLabel">{labelTwo}</span>

                            {iconTwo && <div className="icon" dangerouslySetInnerHTML={{ __html: iconTwo || { arrowRight } }} />}

                        </div>

                    </Link>

                </motion.div>

            )}

        </motion.div>

    )

}