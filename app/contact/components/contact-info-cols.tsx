// Styles
import styles from "@/styles/pages/contact-us.module.scss";

// Icons
import { envelope } from "@/data/icons";

export default function ContactInfoCols() {

    return (

        <section id="contactInfo" className={`row ${styles.infoCols}`}>

            <div className="container dualCols noPaddingBottom noPaddingTop" style={{ gap: "2rem" }}>

                <a href="mailto:sales@levitate.digital" target="_blank" className={`${styles.infoCol} ${styles.infoColOne}`}>

                    <div className={styles.icon} dangerouslySetInnerHTML={{ __html: envelope }}></div>

                    <div className={styles.content}>

                        <span className={styles.eyebrow}>E-mail sales</span>

                        <h3>sales@levitate<span className={styles.fullStop}>.</span>digital</h3>

                        <span>We'll get back to you as soon as possible</span>

                    </div>

                </a>

                <a href="mailto:support@levitate.digital" target="_blank" className={`${styles.infoCol} ${styles.infoColTwo}`}>

                    <div className={styles.icon} dangerouslySetInnerHTML={{ __html: envelope }}></div>

                    <div className={styles.content}>

                        <span>E-mail support</span>

                        <h3>support@levitate<span className={styles.fullStop}>.</span>digital</h3>

                        <span>We are ready to help you.</span>

                    </div>

                </a>

            </div>

        </section >

    )

}