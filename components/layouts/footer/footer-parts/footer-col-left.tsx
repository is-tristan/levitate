// Next
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "@/styles/layouts/footer/footer.module.scss";

// Icons
import { footerLogo } from "@/data/icons";
import SocialItems from "@/components/items/social-items";

// Logos
const madeInBritainLogo = "/images/logos/logo-made-in-britain.webp";
const icoLogo = "/images/logos/logo-ico.webp";

export default function FooterColLeft() {

    return (

        <div className={`${styles.footerCol} ${styles.footerColLeft}`}>

            <div className={styles.footerHeader}>

                <Link href="/" className={styles.footerLogo} dangerouslySetInnerHTML={{ __html: footerLogo }} />

                <SocialItems />

            </div>

            <p style={{ maxWidth: "25rem" }}>Levitate is a web design agency based in Cardiff, Wales. We create beautiful, performance-driven websites that engage users and convert visitors into customers.</p>

            <div className={styles.footerLogos}>

                <a href="https://madeinbritain.com" target="_blank" rel="noopener noreferrer">

                    <Image src={madeInBritainLogo} alt="Made in Britain" width={103} height={24} loading="lazy" style={{ objectFit: "contain", objectPosition: "center", width: "auto", height: "auto" }} />

                </a>

                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">

                    <Image src={icoLogo} alt="ICO" width={48.5} height={24} loading="lazy" style={{ objectFit: "contain", objectPosition: "center", width: "auto", height: "auto" }} />

                </a>

            </div>

        </div>

    )

}