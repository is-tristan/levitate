"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

import type { ServiceItemLogosProps } from "@/types/all-types";

export default function ServiceItemLogos({
    logos,
    containerClassName,
    itemClassName,
}: ServiceItemLogosProps) {
    const disableMotion = useIsBelowBreakpoint();
    const logoVariants = getRevealContainerVariants();

    return (

        <motion.div
            className={containerClassName}
            variants={disableMotion ? undefined : logoVariants}
            initial={disableMotion ? undefined : "hidden"}
            whileInView={disableMotion ? undefined : "visible"}
            viewport={disableMotion ? undefined : revealViewport}
        >

            {logos.map((logo) => (

                <motion.a
                    variants={disableMotion ? undefined : revealItemVariants}
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={logo.alt}
                    className={itemClassName}
                >

                    <Image
                        src={logo.image}
                        alt={logo.alt}
                        width={128}
                        height={80}
                        sizes="128px"
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                        quality={75}
                    />

                </motion.a>

            ))}

        </motion.div>

    );
}
