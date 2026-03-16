// Components
import Image from "next/image";

// Styles
import styles from "@/styles/components/sections/banner-section.module.scss";

type bannerProps = {
    heading: string;
    description?: string;
    image?: string;
    className?: string;
    layout?: "default" | "centered";
}

export default function Banner({ heading, description, image, className, layout = "default" }: bannerProps) {

    <section className={`row ${styles.banner} ${className}`}>

        <div className={`container ${layout === "centered" ? "centered" : "dualCols"} ${styles.container}`}>

            <div className={`content ${styles.content}`}>

                <h1>{heading}</h1>

                {description && <p>{description}</p>}

            </div>

        </div>

    </section>
}