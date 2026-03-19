"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import { PowerGlitch, PowerGlitchOptions } from "powerglitch";
import { arrowRight } from "@/data/icons";
import { ButtonsProps } from "@/types/buttons";

const glitchOptions: PowerGlitchOptions = {
    playMode: "hover",
    optimizeSeo: true,
    createContainers: true,
    hideOverflow: false,
    timing: {
        duration: 250,
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
    relTwo }: ButtonsProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const fadeInUp = {
        initial: {
            opacity: 0,
            y: 32
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.5,
            delay: animationDelay,
            ease: easeInOut
        }
    };

    useEffect(() => {
        if (!containerRef.current || disableAnimation) {
            return;
        }

        const buttons = containerRef.current.querySelectorAll(".btn");

        buttons.forEach(button => {
            PowerGlitch.glitch(button as HTMLElement, glitchOptions);
        });
    }, [disableAnimation]);

    const animationProps = disableAnimation ? {} : fadeInUp;

    return (

        <motion.div
            {...animationProps}
            ref={containerRef}
            className={`buttons ${buttonContainerClassName || undefined} ${buttonAlignment === "centered" ? "centered" : undefined}`}
        >

            <Link href={urlOne || "#"} target={targetOne || "_self"} rel={relOne || undefined} className={`btn ${btnOneClassName || undefined} `}>

                <div className="buttonContent">

                    <span className="buttonLabel">{labelOne}</span>

                    {iconOne && <div className="icon" dangerouslySetInnerHTML={{ __html: iconOne || { arrowRight } }} />}

                </div>

            </Link>

            {labelTwo && (

                <Link href={urlTwo || "#"} target={targetTwo || "_self"} rel={relTwo || undefined} className={`btn ${btnTwoClassName || undefined} `}>

                    <div className="buttonContent">

                        <span className="buttonLabel">{labelTwo}</span>

                        {iconTwo && <div className="icon" dangerouslySetInnerHTML={{ __html: iconTwo || { arrowRight } }} />}

                    </div>

                </Link>
            )}

        </motion.div>

    )

}