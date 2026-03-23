// Next
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/layouts/footer/footer.module.scss";

// Components
import SocialItems from "@/components/items/social-items";
import ContactItems from "@/components/items/contact-items";

// Icons
import { footerLogo } from "@/data/icons";

// Grid Background
const gridBackground = "/images/backgrounds/grid-background.svg";

// Other Logos
const madeInBritainLogo = "/images/logos/logo-made-in-britain.webp";
const icoLogo = "/images/logos/logo-ico.webp";

export default function Footer() {

    return (

        <footer className={`row ${styles.footer}`} style={{ backgroundImage: `url(${gridBackground})` }}>

            <div className={`container ${styles.footerContainer} ${styles.footerContainerMain}`}>

                <div className={`${styles.footerCol} ${styles.footerColLeft}`}>

                    <div className={styles.footerHeader}>

                        <Link href="/" className={styles.footerLogo} dangerouslySetInnerHTML={{ __html: footerLogo }} />

                        <SocialItems />

                    </div>

                    <p style={{maxWidth: "25rem"}}>Levitate is a web design agency based in Cardiff, Wales. We create beautiful, performance-driven websites that engage users and convert visitors into customers.</p>

                    <div className={styles.footerLogos}>

                        <a href="https://madeinbritain.com" target="_blank" rel="noopener noreferrer">

                            <Image src={madeInBritainLogo} alt="Made in Britain" width={103} height={24} loading="lazy" style={{ objectFit: "contain", objectPosition: "center" }} />

                        </a>

                        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">

                            <Image src={icoLogo} alt="ICO" width={48.5} height={24} loading="lazy" style={{ objectFit: "contain", objectPosition: "center" }} />

                        </a>

                    </div>

                </div>

                <div className={`${styles.footerCol} ${styles.footerColRight}`}>

                    <div className="heading hasFullStop">

                        <h3>Ready to get started? <span className="gradientAnimation">So are we</span></h3>

                    </div>

                    <ContactItems />

                </div>

            </div>

            <div className={`container ${styles.footerContainer} ${styles.copyright}`}>

                <div className={`${styles.footerCol} ${styles.footerColLeft} ${styles.copyrightColLeft}`}>

                    <div className={styles.copyrightText}>

                        <p>Copyright &copy; {new Date().getFullYear()} Levitate Online LTD | All rights reserved.</p>

                    </div>

                </div>

                <div className={`${styles.footerCol} ${styles.footerColRight} ${styles.copyrightColRight}`}>

                    <Link href="/privacy-policy">Privacy Policy</Link>

                    <span>|</span>

                    <Link href="/terms-and-conditions">Terms and Conditions</Link>

                    <span>|</span>

                    <Link href="/cookie-policy">Cookie Policy</Link>

                </div>

            </div>

        </footer>

    );

}