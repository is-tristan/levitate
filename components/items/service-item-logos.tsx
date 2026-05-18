"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";

import type { ServiceItemLogosProps } from "@/types/all-types";

export default function ServiceItemLogos({
    logos,
    containerClassName,
    itemClassName,
}: ServiceItemLogosProps) {
    const logoVariants = getRevealContainerVariants();

    return (
        <>
            <ViewportBreakpoint mode="desktop">
                <motion.div
                    className={containerClassName}
                    variants={logoVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                >
                    {logos.map((logo) => (
                        <motion.a
                            variants={revealItemVariants}
                            href={logo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={logo.alt}
                            className={itemClassName}
                        >
                            <Image src={logo.image} alt={logo.alt} width={128} height={80} style={{ objectFit: "contain" }} loading="lazy" />
                        </motion.a>
                    ))}
                </motion.div>
            </ViewportBreakpoint>

            <ViewportBreakpoint mode="mobile">
                <div className={containerClassName}>
                    {logos.map((logo) => (
                        <a
                            href={logo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={logo.alt}
                            className={itemClassName}
                        >
                            <Image src={logo.image} alt={logo.alt} width={128} height={80} style={{ objectFit: "contain" }} loading="lazy" />
                        </a>
                    ))}
                </div>
            </ViewportBreakpoint>
        </>
    );
}
