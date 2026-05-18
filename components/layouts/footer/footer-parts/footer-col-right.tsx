// Components
import ContactItems from "@/components/items/contact-items";

// Styles
import styles from "@/styles/layouts/footer/footer.module.scss";

export default function FooterColRight() {

    return (

        <div className={`${styles.footerCol} ${styles.footerColRight}`}>

            <div className="heading hasFullStop">

                <h3>Ready to get started? <span className="gradientAnimation">So are we</span></h3>

            </div>

            <ContactItems />

        </div>
    )

}