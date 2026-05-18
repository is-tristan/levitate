"use client";

// Imports
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";
import { useState } from "react";
import HeaderMobileBurger from "./header-mobile-burger";
import HeaderMobileMenu from "./header-mobile-menu";

// Styles
import styles from "@/styles/layouts/header/header.module.scss";

export default function HeaderMobileActions() {

    // Mobile Menu Active
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Handle Mobile Menu Active
    const handleMenuActive = () => {
        setIsMenuActive(true);
    }

    // Handle Mobile Menu Close
    const handleMenuClose = () => {
        setIsMenuActive(false);
    }

    return (

        <ViewportBreakpoint mode="mobile">

            <div className={styles.mobileActions}>

                <div style={{ display: "flex" }}>

                    <HeaderMobileBurger id="navToggle" handleActive={handleMenuActive} handleClose={handleMenuClose} isActive={isMenuActive} />

                </div>

            </div>

            <HeaderMobileMenu handleClose={handleMenuClose} isActive={isMenuActive} />

        </ViewportBreakpoint>
    )
}