"use client";

import { motion } from "motion/react";

import { revealViewport } from "@/utils/animation/reveal";
import styles from "@/styles/components/sections/pricing-cols.module.scss";

export interface PricingIncludedItem {
    description: string;
    icon: string;
}

export interface PricingItemData {
    id: string;
    title: string;
    pricingMetaFields: {
        included: PricingIncludedItem[];
        price: string;
        smallText: string;
    };
}

interface PricingItemProps {
    pricingItem: PricingItemData;
    itemIndex: number;
}

const getPricingItemVariants = (itemIndex: number) => ({
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: itemIndex * 0.2,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
});

export default function PricingItem({ pricingItem, itemIndex }: PricingItemProps) {

    return (

        <motion.article
            className={styles.pricingCard}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={getPricingItemVariants(itemIndex)}
        >

            <div className={styles.pricingCardContent}>

                <div className={styles.pricingHeader}>

                    <div className={styles.topHeader}>

                        <h3>{pricingItem.title}</h3>

                        <span className={styles.price}>{pricingItem.pricingMetaFields.price}</span>

                    </div>

                    {pricingItem.pricingMetaFields.smallText && <span className={styles.smallText}>{pricingItem.pricingMetaFields.smallText}</span>}

                </div>

                {pricingItem.pricingMetaFields.included?.length > 0 && (

                    <div className={styles.includedItems}>

                        {pricingItem.pricingMetaFields.included.map((item, index) => (

                            <div key={`${pricingItem.id}-${index}`} className={styles.includedItem}>

                                {item.icon && <div className={styles.icon} dangerouslySetInnerHTML={{ __html: item.icon }}></div>}

                                {item.description && <p>{item.description}</p>}

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </motion.article>

    );

}
