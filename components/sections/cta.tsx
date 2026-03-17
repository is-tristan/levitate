// React

// Imports
import Content from "@/components/content/content";

// Styles
import styles from "@/styles/components/sections/cta-section.module.scss";

// Flags
import { ukFlag, usFlag, nzFlag, uaeFlag, caFlag, chFlag } from "@/data/icons";

// Types
type CTAProps = {
    className?: string;
    eyebrow?: string;
    heading: string;
    description?: string;
    labelOne?: string;
    urlOne?: string;
    labelTwo?: string;
    urlTwo?: string;
}

export default function CTA({
    eyebrow = "Get Started",
    heading = "Creating a digital impact worldwide.",
    description = "We help brands explore their digital potential, through award winning, hand crafted websites.",
    labelOne = "Get in touch",
    urlOne = "/contact",
    labelTwo = "View our work",
    urlTwo = "/portfolio",
}: CTAProps) {

    return (

        <section className="row cta">

            <div className={`container dualCols ${styles.cta}`}>

                <div className="contentCol">

                    <div className={`${styles.flags}`}>

                        <span className={`${styles.flag}`} dangerouslySetInnerHTML={{ __html: ukFlag }} />
                        <span className={`${styles.flag}`} dangerouslySetInnerHTML={{ __html: usFlag }} />
                        <span className={`${styles.flag}`} dangerouslySetInnerHTML={{ __html: nzFlag }} />
                        <span className={`${styles.flag}`} dangerouslySetInnerHTML={{ __html: uaeFlag }} />
                        <span className={`${styles.flag}`} dangerouslySetInnerHTML={{ __html: caFlag }} />
                        <span className={`${styles.flag}`} dangerouslySetInnerHTML={{ __html: chFlag }} />

                    </div>

                    <Content
                        eyebrow={eyebrow}
                        type="h2"
                        heading={heading}
                        description={description}
                        hasFullStop={true}
                        btnOneClassName="primary"
                        labelOne={labelOne}
                        urlOne={urlOne}
                        btnTwoClassName="secondary"
                        labelTwo={labelTwo}
                        urlTwo={urlTwo}
                    />

                </div>

                <div className="spacerCol hidden-s hidden-m" />

            </div>

        </section>

    )

}