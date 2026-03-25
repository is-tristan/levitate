"use client";

// React
import { useState, useEffect } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";

// Icons
import { logoMark, logoText, chevronDown } from "@/data/icons";

// Data
import { menuItems } from "@/data/menu-items";

// Styles
import styles from "@/styles/layouts/header/header.module.scss";

// Components
import Buttons from "@/components/handlers/buttons";
import NavToggle from "./nav-toggle";
import MobileMenu from "./mobile-menu";

export default function Header() {

    // Pathname
    const pathname = usePathname();
    const urlIsActive = (url: string) => {
        return pathname.startsWith(url);
    }

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

                    <div className={styles.logo}>

                        <Link href={process.env.NEXT_PUBLIC_DEVMODE === "true" ? "/" : "/web-design-in-cardiff"} className={styles.logoLink}>

                            <span className={styles.logoMark} dangerouslySetInnerHTML={{ __html: logoMark }} />

                            <span className={styles.logoText} dangerouslySetInnerHTML={{ __html: logoText }} />

                        </Link>

                    </div>

                    <ViewportBreakpoint mode="desktop">

                        <div id="nav" className={styles.nav} style={{ display: process.env.NEXT_PUBLIC_DEVMODE === "true" ? "flex" : "none" }}>

                            {
                                menuItems.map((item, index) => (

                                    item.children && item.children.length > 0 ? (

                                        <div
                                            key={index}
                                            className={`${styles.navItem} ${urlIsActive(item.url || '/') ? styles.currentUrl : undefined}`}
                                            data-has-children="true"
                                        >

                                            <span className={styles.navItemLabel}>{item.label}</span>

                                            <span className={styles.navItemCaret} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                            <div className={styles.subMenu}>

                                                {

                                                    item.children.map((child: string | any, index: number) => (

                                                        <Link key={index} href={child.url || '/'} className={`${styles.subMenuItem} ${urlIsActive(child.url || '/') ? styles.currentUrl : undefined}`} data-has-children="true">

                                                            {child.icon && <div className={styles.subMenuItemIcon} dangerouslySetInnerHTML={{ __html: child.icon }} />}

                                                            <div className={styles.subMenuItemContent}>

                                                                <span className={styles.subMenuItemLabel}>{child.label}</span>

                                                                <p className={styles.subMenuItemDescription}>{child.description}</p>

                                                            </div>

                                                        </Link>

                                                    ))

                                                }

                                            </div>

                                        </div>

                                    ) : (

                                        <Link
                                            href="/contact"
                                            key={index}
                                            className={`${styles.navItem} ${urlIsActive(item.url || '/') ? styles.currentUrl : undefined}`}
                                            data-has-children="false"
                                        >

                                            <span className={styles.navItemLabel}>{item.label}</span>

                                        </Link>
                                    )

                                ))

                            }

                        </div>

                        <Buttons
                            buttonContainerClassName={styles.actions}
                            labelOne="Send us your brief"
                            urlOne={process.env.NEXT_PUBLIC_DEVMODE === "true" ? "/contact" : "/web-design-in-cardiff#contact"}
                            btnOneClassName="primary headerBtn"
                        />

                    </ViewportBreakpoint>

                    <ViewportBreakpoint mode="mobile">

                        <div style={{ display: process.env.NEXT_PUBLIC_DEVMODE === "true" ? "flex" : "none" }}>

                            <NavToggle id="navToggle" handleActive={handleMenuActive} handleClose={handleMenuClose} isActive={isMenuActive} />

                        </div>

                    </ViewportBreakpoint>

                </div>

            </header >

            <ViewportBreakpoint mode="mobile">

                <MobileMenu handleClose={handleMenuClose} isActive={isMenuActive} />

            </ViewportBreakpoint>

        </>

    )
}