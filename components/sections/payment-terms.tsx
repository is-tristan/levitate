"use client";

import { motion } from "motion/react";
import Image from "next/image";

import styles from "@/styles/components/sections/payment-terms.module.scss";

import Content from "@/components/content/content";
import { paymentTerms } from "@/data/payment-terms";
import { getRevealContainerVariants, revealItemVariants, revealViewport } from "@/utils/animation/reveal";

export default function PaymentTerms() {
    const containerVariants = getRevealContainerVariants(0, 0.2);

    return (

        <section className="row">

            <div className="container centered noPaddingBottom">

                <Content
                    type="h2"
                    heading="And we have <span class='gradientAnimation'>three</span> flexible payment plans"
                    description="Choose your way to pay, with a range of flexible options to suit your business needs."
                    hasFullStop={true}
                />

            </div>

            <div className="container noPaddingTop">

                <motion.div
                    className={styles.paymentTerms}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                >

                    {paymentTerms.map((paymentTerm) => (

                        <motion.article key={paymentTerm.id} className={styles.paymentTerm} variants={revealItemVariants}>

                            <Image
                                className={styles.icon}
                                src={paymentTerm.icon}
                                alt={paymentTerm.title}
                                width={96}
                                height={96}
                                loading="lazy"
                                style={{ objectFit: "contain" }} />

                            <h3>{paymentTerm.title}</h3>

                            <p>{paymentTerm.description}</p>

                        </motion.article>

                    ))}

                </motion.div>

            </div>

        </section>

    );

}