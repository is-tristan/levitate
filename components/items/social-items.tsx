// Styles
import styles from "@/styles/components/items/social-items.module.scss";

// Icons
import { footerLogo, facebookLogoAlt, xLogo, instagramLogo, linkedinLogo } from "@/data/icons";

const socialItems = [
    {
        ariaLabel: "Follow us on Facebook",
        icon: facebookLogoAlt,
        url: "https://www.facebook.com/your-page"
    },
    {
        ariaLabel: "Follow us on X",
        icon: xLogo,
        url: "https://www.x.com/your-page"
    },
    {
        ariaLabel: "Follow us on Instagram",
        icon: instagramLogo,
        url: "https://www.instagram.com/your-page"
    },
    {
        ariaLabel: "Follow us on LinkedIn",
        icon: linkedinLogo,
        url: "https://www.linkedin.com/your-page"
    }
]

export default function SocialItems() {

    return (

        <div className={styles.socialItems}>

            {socialItems.map((item) => (

                <a
                    href={item.url}
                    aria-label={item.ariaLabel}
                    key={item.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                    dangerouslySetInnerHTML={{ __html: item.icon }}>
                </a>

            ))}

        </div>

    )

}