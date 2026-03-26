// Imports
import BannerAnimation from "./section-parts/banner/banner-animation";
import Content from "@/components/content/content";
import ReviewItems from "@/components/items/review-items";

// Styles
import styles from "@/styles/components/sections/banner-section.module.scss";
import gradientBannerStyles from "@/styles/components/sections/gradient-banner.module.scss";

// Types
type GradientBannerProps = {
    className?: string;
    heading: string;
    description: string;
    urlOne?: string | undefined;
    urlTwo?: string | undefined;
}

export default function GradientBanner({
    className,
    heading,
    description,
    urlOne = "/contact",
    urlTwo = "/portfolio"
}: GradientBannerProps) {

    return (

        <section id="banner" className={`row colorLight ${styles.banner} ${gradientBannerStyles.banner} ${className || undefined}`}>

            <div className={`container centered ${styles.bannerContainer}`}>

                <div className={`contentCol`}>

                    <ReviewItems />

                    <Content
                        type="h1"
                        heading={heading}
                        description={description}
                        className={gradientBannerStyles.bannerContent}
                        layout="centered"
                        hasFullStop={true}
                        labelOne="Send us your brief"
                        urlOne={urlOne || undefined}
                        btnOneClassName="primary"
                        labelTwo="View our work"
                        urlTwo={urlTwo || undefined}
                        btnTwoClassName="secondary"
                    />

                </div>

            </div>

            <BannerAnimation />

        </section>
    );
}