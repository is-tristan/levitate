"use client";

import Image from "next/image";
import { motion } from "motion/react";

import data from "@/data/team.json";
import styles from "@/styles/components/grids/team-grid.module.scss";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";

export default function TeamGrid() {
    const containerVariants = getRevealContainerVariants();

    return (

        <section id="team" className="row">

            <div className="container">

                <motion.div
                    className={styles.teamGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                >

                    {data.team.map((member) => (

                        <motion.article className={styles.teamGridItem} key={member.name} variants={revealItemVariants}>

                            <div className={styles.teamGridImage}>

                                <Image src={member.image} alt={member.name} fill sizes="100%" style={{ objectFit: "cover" }} loading="lazy" />

                            </div>

                            <div className={styles.teamGridContent}>

                                <h3>{member.name}<span className="colorPrimary">.</span></h3>

                                <p className="colorPrimary">{member.position}</p>

                            </div>

                        </motion.article>

                    ))}

                </motion.div>

            </div>

        </section>

    );
}
