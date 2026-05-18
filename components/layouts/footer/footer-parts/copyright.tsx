// Next
import Link from "next/link";

// Styles
import styles from "@/styles/layouts/footer/footer.module.scss";

export default function FooterCopyright() {

    return (

        <div className={`container ${styles.footerContainer} ${styles.copyright}`}>

            <div className={`${styles.footerCol} ${styles.footerColLeft} ${styles.copyrightColLeft}`}>

                <div className={styles.copyrightText}>

                    <p>Copyright &copy; {new Date().getFullYear()} Levitate Online LTD | All rights reserved.</p>

                </div>

            </div>

            <div className={`${styles.footerCol} ${styles.footerColRight} ${styles.copyrightColRight}`}>

                <Link href="/legal/privacy-policy">Privacy Policy</Link>

                <span>|</span>

                <Link href="/legal/terms-and-conditions">Terms and Conditions</Link>

                <span>|</span>

                <Link href="/legal/cookie-policy">Cookie Policy</Link>

                <span>|</span>

                <Link href="#app">Back to top</Link>

            </div>

        </div>
    )

}