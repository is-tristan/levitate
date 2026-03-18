"use client";

import Buttons from "@/components/handlers/buttons";
import { ButtonsProps } from "@/types/buttons";
import { easeInOut, motion } from "motion/react";

// Types
type HeadingProps = {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    heading: string;
    eyebrow?: string;
    description?: string;
    containerClassName?: string;
    className?: string;
    layout?: "default" | "centered";
    hasFullStop?: boolean;
} & Pick<ButtonsProps, "btnOneClassName" | "btnTwoClassName" | "labelOne" | "labelTwo" | "urlOne" | "urlTwo" | "targetOne" | "targetTwo" | "relOne" | "relTwo">;


export default function Heading({
    type = "h2",
    heading,
    eyebrow,
    description,
    containerClassName,
    className,
    layout = "default",
    hasFullStop = false,
    btnOneClassName,
    btnTwoClassName,
    labelOne,
    labelTwo,
    urlOne,
    urlTwo,
    targetOne,
    targetTwo,
    relOne,
    relTwo
}: HeadingProps) {
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
            duration: 0.8,
            ease: easeInOut
        }
    };

    return (

        <div className={`content ${containerClassName || undefined}`}>

            {eyebrow && (
                <motion.span
                    {...fadeInUp}
                    className="eyebrow"
                >
                    {eyebrow}
                </motion.span>
            )}

            <motion.div
                {...fadeInUp}
                className={`heading ${className || undefined} ${layout === "centered" ? "centered" : undefined} ${hasFullStop ? "hasFullStop" : undefined}`}
            >

                {type === "h1" && <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1>}

                {type === "h2" && <h2 dangerouslySetInnerHTML={{ __html: heading }}></h2>}

                {type === "h3" && <h3 dangerouslySetInnerHTML={{ __html: heading }}></h3>}

                {type === "h4" && <h4 dangerouslySetInnerHTML={{ __html: heading }}></h4>}

                {type === "h5" && <h5 dangerouslySetInnerHTML={{ __html: heading }}></h5>}

                {type === "h6" && <h6 dangerouslySetInnerHTML={{ __html: heading }}></h6>}

            </motion.div>

            {description && (
                <motion.p
                    {...fadeInUp}
                    transition={{
                        ...fadeInUp.transition,
                        delay: 0.2
                    }}
                    dangerouslySetInnerHTML={{ __html: description }}
                ></motion.p>
            )}

            {labelOne && urlOne && (

                <Buttons
                    animationDelay={0.3}
                    btnOneClassName={btnOneClassName || undefined}
                    btnTwoClassName={btnTwoClassName || undefined}
                    labelOne={labelOne || undefined}
                    labelTwo={labelTwo || undefined}
                    urlOne={urlOne || undefined}
                    urlTwo={urlTwo || undefined}
                    targetOne={targetOne || undefined}
                    targetTwo={targetTwo || undefined}
                    relOne={relOne || undefined}
                    relTwo={relTwo || undefined}
                />

            )}

        </div>

    )
}