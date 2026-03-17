import styles from "@/styles/components/sections/services-section-tabs.module.scss";

export default function ServiceNav() {

    return (

        <nav className={styles.serviceNav}>

            <button className={styles.serviceNavItem}>

                <span className={styles.serviceNavItemLabel}>Web Development</span>

            </button>

        </nav>

    )
}