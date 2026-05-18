"use client";

// React
import { useState, useEffect } from "react";

// Styles
import styles from "@/styles/layouts/header/header.module.scss";

// Components
import HeaderLogo from "./parts/header-logo";
import DesktopNav from "./parts/header-desktop-nav";
import HeaderMobileActions from "./parts/header-mobile-actions";

export default function Header() {
    // Scroll Listener
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let animationFrameId: number | null = null;

        const updateScrolled = () => {
            const nextScrolled = window.scrollY > 100;
            setScrolled(currentScrolled => currentScrolled === nextScrolled ? currentScrolled : nextScrolled);
            animationFrameId = null;
        };

        const scrollListener = () => {
            if (animationFrameId !== null) {
                return;
            }

            animationFrameId = window.requestAnimationFrame(updateScrolled);
        };

        updateScrolled();
        window.addEventListener("scroll", scrollListener, { passive: true });

        return () => {
            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }

            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (

        <>

            <header id="header" className={`${styles.header} ${scrolled ? styles.scrolled : undefined}`}>

                <div className={`container ${styles.headerContainer}`}>

                    <HeaderLogo />

                    <DesktopNav />

                    <HeaderMobileActions />

                </div>

            </header >

        </>

    )
}