"use client";

import Buttons from "@/components/handlers/buttons";
import { ButtonsProps } from "@/types/all-types";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

type HeadingProps = {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    heading: string;
    eyebrow?: string;
    description?: string;
    containerClassName?: string;
    className?: string;
    layout?: "default" | "centered";
    hasFullStop?: boolean;
    hasAnimation?: boolean;
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
    hasAnimation = true,
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
    const pathname = usePathname();
    const isBelowBreakpoint = useIsBelowBreakpoint();
    const disableMotion = !hasAnimation || isBelowBreakpoint;
    const containerVariants = getRevealContainerVariants();
    const headingClassName = `heading ${className || undefined} ${layout === "centered" ? "centered" : undefined} ${hasFullStop ? "hasFullStop" : undefined}`;
    const HeadingTag = type;

    if (disableMotion) {
        return (

            <div className={`content ${containerClassName || undefined}`}>

                {eyebrow && <span className="eyebrow">{eyebrow}</span>}

                <div className={headingClassName}>

                    <HeadingTag dangerouslySetInnerHTML={{ __html: heading }}></HeadingTag>

                </div>

                {description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}

                {labelOne && urlOne && (

                    <Buttons
                        disableAnimation={true}
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

        );
    }

    return (

        <motion.div
            key={pathname}
            className={`content ${containerClassName || undefined}`}
            variants={disableMotion ? undefined : containerVariants}
            initial={disableMotion ? undefined : "hidden"}
            whileInView={disableMotion ? undefined : "visible"}
            viewport={disableMotion ? undefined : revealViewport}
        >

            {eyebrow && (
                <motion.span className="eyebrow" variants={disableMotion ? undefined : revealItemVariants}>
                    {eyebrow}
                </motion.span>
            )}

            <motion.div
                className={headingClassName}
                variants={disableMotion ? undefined : revealItemVariants}
            >

                {type === "h1" && <motion.h1 dangerouslySetInnerHTML={{ __html: heading }}></motion.h1>}

                {type === "h2" && <motion.h2 dangerouslySetInnerHTML={{ __html: heading }}></motion.h2>}

                {type === "h3" && <motion.h3 dangerouslySetInnerHTML={{ __html: heading }}></motion.h3>}

                {type === "h4" && <motion.h4 dangerouslySetInnerHTML={{ __html: heading }}></motion.h4>}

                {type === "h5" && <motion.h5 dangerouslySetInnerHTML={{ __html: heading }}></motion.h5>}

                {type === "h6" && <motion.h6 dangerouslySetInnerHTML={{ __html: heading }}></motion.h6>}

            </motion.div>

            {description && (
                <motion.p
                    variants={revealItemVariants}
                    dangerouslySetInnerHTML={{ __html: description }}
                    suppressHydrationWarning={true}
                ></motion.p>
            )}

            {labelOne && urlOne && (

                <motion.div variants={revealItemVariants}>

                    <Buttons
                        disableAnimation={true}
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

                </motion.div>

            )}

        </motion.div>

    )
}