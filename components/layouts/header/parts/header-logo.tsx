// Next
import Link from "next/link";

// Icons
import { logoMark, logoText } from "@/data/icons";

// Styles
import styles from "@/styles/layouts/header/header.module.scss";

export default function HeaderLogo() {

    return (

        <div className={styles.logo}>

            <Link href="/" className={styles.logoLink}>

                <span className={styles.logoMark} dangerouslySetInnerHTML={{ __html: logoMark }} />

                <span className={styles.logoText} dangerouslySetInnerHTML={{ __html: logoText }} />

            </Link>

        </div>

    )

}