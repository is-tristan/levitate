// Styles
import styles from "@/styles/components/sections/banner-section.module.scss";

// Components
import Content from "@/components/content/content";

// Types
type BannerProps = {
    heading: string;
    description: string;
}

export default function Banner({ heading, description }: BannerProps) {

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

        </section>

    );

}