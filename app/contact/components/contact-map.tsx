// Styles
import styles from "@/styles/pages/contact-us.module.scss";

export default function ContactMap() {

    return (

        <section id="contactMap" className={`row ${styles.contactMap}`}>

            <div className={`container noPaddingTop ${styles.contactMapContainer}`}>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.7613501072037!2d-3.174818322412116!3d51.48089471263815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1d37490acee7%3A0xacdb4515290823e4!2s4%20Churchill%20Villas!5e0!3m2!1sen!2sza!4v1774433570289!5m2!1sen!2sza" width="800" height="600" loading="lazy"></iframe>

            </div>

        </section>

    )

}