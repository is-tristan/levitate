// Next
import Image from "next/image";

// Styles
import styles from "@/styles/components/sections/banner-section.module.scss";

// Components
import Content from "@/components/content/content";

// Types
type BannerProps = {
    heading: string;
    description: string;
    backgroundImage?: string;
}

export default function Banner({ heading, description, backgroundImage }: BannerProps) {

    return (

        <section className={`row ${styles.banner}`}>

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