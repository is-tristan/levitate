// Styles
import styles from "@/styles/layouts/topbar/topbar.module.scss";

// Icons
import { lifeBuoy } from "@/data/icons";

export default function Topbar() {
    return (

        <div className={`row ${styles.topbar}`}>

            <div className={`container ${styles.topbarContainer}`}>

                <div className={styles.topbarItem}>

                    <span className={styles.topbarStatus}>All Systems Operational</span>

                </div>

                <div className={styles.topbarItem}>

                    <a href="mailto:support@levitate.digital" className={styles.topbarItemLink}>

                        <div className={styles.topbarItemIcon} dangerouslySetInnerHTML={{ __html: lifeBuoy }} />

                        <span>Need Help?</span>

                    </a>

                </div>

            </div>

        </div>

    )

}