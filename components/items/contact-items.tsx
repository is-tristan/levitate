// Styles
import styles from "@/styles/components/items/contact-items.module.scss";

// Icons
import { envelope, mapPin } from "@/data/icons";

// Data
const contactItems = [
    {
        icon: envelope,
        label: "Contact Us",
        ariaLabel: "Contact us by email",
        value: "support@levitate.digital",
        link: "mailto:support@levitate.digital"
    },
    {
        icon: mapPin,
        label: "Our Location",
        ariaLabel: "View our location on Google Maps",
        value: "Cardiff, United Kingdom",
        link: "https://maps.app.goo.gl/iX8JHL8MrbwYn2j46"
    }
]

export default function ContactItems() {

    return (

        <div className={styles.contactItems}>

            {contactItems.map((item) => (

                <a className={styles.contactItem} key={item.label} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}>

                    <div className={styles.contactItemIcon} dangerouslySetInnerHTML={{ __html: item.icon }} />

                    <div className={styles.contactItemValue}>

                        <span><strong>{item.label}</strong></span>

                        <span>{item.value}</span>

                    </div>

                </a>

            ))}

        </div>

    )

}