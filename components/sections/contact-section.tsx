// Components
import Content from "@/components/content/content";
import Form from "@/components/handlers/form";
import ContactItems from "@/components/items/contact-items";

// Icons
import { logoMark } from "@/data/icons";

// Styles
import styles from "@/styles/components/sections/contact-section.module.scss";

export default function ContactSection() {

    return (

        <section id="contact" className="row">

            <div className="container dualCols">

                <div className="contentCol">

                    <Content
                        type="h2"
                        eyebrow="Get a Quote"
                        heading="Send us your brief to receive a <span class='gradientAnimation'>same day quote</span>"
                        hasFullStop={true}
                        description="Send us your brief today for a same-day quote. Share your goals, audience and style—our Cardiff team reviews personally and delivers transparent pricing, no pushy sales."
                    />

                    <ContactItems />

                </div>

                <div className={`formCol ${styles.formCol}`}>

                    <Form />

                    <div className={styles.logoMark} dangerouslySetInnerHTML={{ __html: logoMark }} />

                </div>

            </div>

        </section>
    )
}