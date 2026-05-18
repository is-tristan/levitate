// Next
import Image from "next/image";

// Styles
import styles from "@/styles/components/sections/banner-section.module.scss";

// Components
import Content from "@/components/content/content";

// Types
import type { BannerProps } from "@/types/all-types";

export default function Banner({ className, heading, description, backgroundImage }: BannerProps) {

    return (

        <section className={`row ${styles.banner} ${className || undefined}`}>

            <div className={`container ${styles.bannerContainer}`}>

                <Content
                    type="h1"
                    heading={heading}
                    description={description}
                    containerClassName={styles.bannerContent}
                    className={styles.bannerHeading}
                    layout="centered"
                    hasFullStop={true}
                />

            </div>

            {backgroundImage && (

                <div className={styles.backgroundImage}>

                    <Image src={backgroundImage} alt={heading} width={1512} height={851} sizes="(max-width: 1512px) 100vw, 1512px" style={{ objectFit: "cover", width: "100%", height: "100%" }} loading="lazy" />

                </div>

            )}

        </section>

    );

}