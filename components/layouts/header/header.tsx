"use client";

// React
import { useState, useEffect } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";

// Imports
import { logoMark, logoText, chevronDown } from "@/data/icons";
import { menuItems } from "@/data/menu-items";
import styles from "@/styles/layouts/header/header.module.scss";
import Buttons from "@/components/handlers/buttons";

export default function Header() {

    const pathname = usePathname();

    const isActive = (url: string) => {
        return pathname.startsWith(url);
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    return (

        <header id="header" className={`${styles.header} ${scrolled ? styles.scrolled : undefined}`}>

            <div className={`container ${styles.headerContainer}`}>

                <div className={styles.logo}>

                    <Link href="/" className={styles.logoLink}>

                        <span className={styles.logoMark} dangerouslySetInnerHTML={{ __html: logoMark }} />

                        <span className={styles.logoText} dangerouslySetInnerHTML={{ __html: logoText }} />

                    </Link>

                </div>

                <ViewportBreakpoint mode="desktop">

                    <div className={styles.nav}>

                        {
                            menuItems.map((item, index) => (

                                item.children && item.children.length > 0 ? (

                                    <div
                                        key={index}
                                        className={`${styles.navItem} ${isActive(item.url || '/') ? styles.currentUrl : undefined}`}
                                        data-has-children="true"
                                    >

                                        <span className={styles.navItemLabel}>{item.label}</span>

                                        <span className={styles.navItemCaret} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                        <div className={styles.subMenu}>

                                            {

                                                item.children.map((child: string | any, index: number) => (

                                                    <Link key={index} href={child.url || '/'} className={styles.subMenuItem} data-has-children="true">

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
                                        href={item.url || '/'}
                                        key={index}
                                        className={`${styles.navItem} ${isActive(item.url || '/') ? styles.currentUrl : undefined}`}
                                        data-has-children="false"
                                    >

                                        <span className={styles.navItemLabel}>{item.label}</span>

                                    </Link>
                                )

                            ))

                        }

                    </div>

                </ViewportBreakpoint>

                <Buttons
                    buttonContainerClassName={styles.actions}
                    labelOne="Send us your brief"
                    urlOne="/contact"
                    btnOneClassName="primary headerBtn"
                />

            </div>

        </header>

    )
}