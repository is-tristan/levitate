// Imports
import BannerGradient from "./banner-gradient";
import Content from "@/components/content/content";
import ReviewItems from "@/components/items/review-items";

// Styles
import styles from "@/styles/components/sections/banner-section.module.scss";
import homeStyles from "@/styles/pages/home.module.scss";

// Types
type HomeBannerProps = {
    heading: string;
    description: string;
}

export default function HomeBanner({
    heading,
    description
}: HomeBannerProps) {

    return (

        <section id="banner" className={`row colorLight ${styles.banner} ${homeStyles.banner}`}>

            <div className={`container centered ${styles.bannerContainer}`}>

                <div className={`contentCol`}>

                    <ReviewItems />

                    <Content
                        type="h1"
                        heading={heading}
                        description={description}
                        className={homeStyles.bannerContent}
                        layout="centered"
                        hasFullStop={true}
                        labelOne="Send us your brief"
                        urlOne="/contact"
                        btnOneClassName="primary"
                        labelTwo="View our work"
                        urlTwo="/portfolio"
                        btnTwoClassName="secondary"
                    />

                </div>

            </div>

            <BannerGradient />

        </section>
    );
}