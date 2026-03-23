"use client";

// Next
import Image from "next/image";

// Imports
import Content from "@/components/content/content";
import Buttons from "@/components/handlers/buttons";
import ReviewItems from "@/components/items/review-items";

// Styles
import styles from "@/styles/components/sections/services-section.module.scss";

// Image
const image = "/images/services/office/cardiff-office-image.webp";

export default function ServicesCardiff() {

    return (

        <div className={`container dualCols rowReverse ${styles.cardiffContainer}`}>

            <div className="imageCol fourByThree hasRadius">

                <Image src={image} alt="Cardiff Office" fill sizes="100%" style={{ objectFit: "cover" }} loading="lazy" />

            </div>

            <div className="contentCol">

                <Content
                    eyebrow="Cardiff Office"
                    type="h2"
                    heading="Proudly based in the heart of Cardiff, <span class='gradientAnimation'>since 2017</span>"
                    hasFullStop={true}
                    description="Our Cardiff office is where creativity meets precision. It's home to our core team of designers, developers, and strategists who collaborate to bring brands to life online. From this vibrant city, we've helped businesses across the UK and beyond build websites that not only look great but perform brilliantly."
                />

                <ReviewItems layout="inline" className={styles.reviewItems} />

                <Buttons
                    labelOne="Learn More"
                    urlOne="/company/about-us"
                    btnOneClassName="primary"
                />

            </div>

        </div>

    );

}