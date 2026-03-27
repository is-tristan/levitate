// Components
import BannerAnimation from "./section-parts/banner/banner-animation";
import Content from "@/components/content/content";
import ReviewItems from "@/components/items/review-items";
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";

// Styles
import styles from "@/styles/components/sections/gradient-banner.module.scss";

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

        <section id="banner" className={`row colorLight ${styles.banner} ${styles.banner} ${className || undefined}`}>

            <div className={`container centered ${styles.bannerContainer}`}>

                <div className={`contentCol`}>

                    <ReviewItems />

                    <Content
                        type="h1"
                        heading={heading}
                        description={description}
                        className={styles.bannerContent}
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

            <ViewportBreakpoint mode="desktop">

                <BannerAnimation />

            </ViewportBreakpoint>

        </section>
    );
}