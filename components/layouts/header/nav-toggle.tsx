"use client";

// Imports
import styles from "@/styles/layouts/header/mobile-menu.module.scss";

// Types
type NavToggleProps = {
    id: string;
    handleActive: () => void;
    handleClose: () => void;
    isActive: boolean;
}

export default function NavToggle({
    id,
    handleActive,
    handleClose,
    isActive
}: NavToggleProps) {

    return (

        <div className={styles.navToggleContainer}>

            <button
                id={id}
                className={`${styles.navToggle} ${isActive ? styles.navToggleActive : ""}`}
                aria-label="Menu"
                aria-expanded={isActive ? "true" : "false"}
                aria-controls="mobileMenu"
                onClick={isActive ? handleClose : handleActive}
            >

                <span className={styles.navLine}></span>

                <span className={styles.navLine}></span>

            </button>

        </div>

    )

}