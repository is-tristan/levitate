"use client";

// React
import { useState } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Styles
import styles from "@/styles/layouts/header/mobile-menu.module.scss";

// Icons
import { footerLogo, closeIcon, chevronDown } from "@/data/icons";

// Data
import { menuItems } from "@/data/menu-items";

// Types
type MobileMenuProps = {
    handleClose: () => void;
    isActive: boolean;
}

export default function MobileMenu({
    handleClose,
    isActive
}: MobileMenuProps) {

    // Pathname
    const pathname = usePathname();
    const urlIsActive = (url: string) => {
        return pathname.startsWith(url);
    }

    // Submenu Open State
    const [activeSubmenuIndex, setActiveSubmenuIndex] = useState<number | null>(null);

    // Handle Submenu Toggle
    const handleSubmenuToggle = (index: number) => {
        setActiveSubmenuIndex((currentIndex) => currentIndex === index ? null : index);
    }

    return (

        <nav id="mobileMenu" className={`${styles.mobileMenu} ${isActive ? styles.mobileMenuActive : ""}`}>

            <div className={styles.mobileMenuContainer}>

                <div className={styles.mobileMenuHeader}>

                    <button id="mobileMenuClose" className={styles.mobileMenuClose} aria-label="Close" aria-expanded={isActive ? "true" : "false"} aria-controls="mobileMenu" onClick={handleClose} dangerouslySetInnerHTML={{ __html: closeIcon }} />

                </div>

                <div className={styles.mobileNavMenu}>

                    {menuItems.map((item, index) => (

                        item.children && item.children.length > 0 ? (

                            <div key={index} className={`${styles.navItem} ${urlIsActive(item.url || '/') ? styles.currentUrl : undefined}`} data-has-children="true">

                                <div className={`${styles.navItemLabel}`} onClick={() => handleSubmenuToggle(index)}>

                                    <span>{item.label}</span>

                                    <span className={styles.navItemCaret} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                </div>

                                <div className={`${styles.subMenu} ${activeSubmenuIndex === index ? styles.subMenuActive : undefined}`}>

                                    {

                                        item.children.map((child: string | any, index: number) => (

                                            <Link key={index} href={child.url || "/"} className={`${styles.subMenuItem} ${urlIsActive(child.url || "/") ? styles.currentUrl : undefined}`} data-has-children="true" onClick={handleClose}>

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
                                className={`${styles.navItem} ${urlIsActive(item.url || "/") ? styles.currentUrl : undefined}`}
                                data-has-children="false"
                                onClick={handleClose}
                            >

                                <span className={styles.navItemLabel}>{item.label}</span>

                            </Link>

                        )

                    ))}

                </div>

            </div>

        </nav>

    )

}