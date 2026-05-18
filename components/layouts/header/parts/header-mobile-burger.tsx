"use client";

// Imports
import styles from "@/styles/layouts/header/mobile-menu.module.scss";

import type { HeaderMobileBurgerProps } from "@/types/all-types";

export default function HeaderMobileBurger({
    id,
    handleActive,
    handleClose,
    isActive
}: HeaderMobileBurgerProps) {

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

                <span className={styles.navLine}></span>

            </button>

        </div>

    )

}