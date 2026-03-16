"use client";

// React
import { useEffect, useRef } from "react";

// Next
import Link from "next/link";

// Imports
import { PowerGlitch, PowerGlitchOptions } from "powerglitch";
import { arrowRight } from "@/data/icons";

export type ButtonsProps = {
    buttonContainerClassName?: string;
    buttonAlignment?: "default" | "centered";
    btnOneClassName?: string;
    btnTwoClassName?: string;
    labelOne: string;
    labelTwo?: string;
    iconOne?: string;
    iconTwo?: string;
    urlOne?: string;
    urlTwo?: string;
    targetOne?: "_blank" | "_self" | "_parent" | "_top";
    targetTwo?: "_blank" | "_self" | "_parent" | "_top";
    relOne?: string;
    relTwo?: string;
}

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

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const buttons = containerRef.current.querySelectorAll(".btn");

        buttons.forEach(button => {
            PowerGlitch.glitch(button as HTMLElement, glitchOptions);
        });
    }, []);

    return (

        <div ref={containerRef} className={`buttons ${buttonContainerClassName || undefined} ${buttonAlignment === "centered" ? "centered" : undefined}`}>

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

        </div>

    )

}