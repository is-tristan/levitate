"use client";

// React
import { useState } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

import { isActiveRoute } from "@/utils/helpers/navigation";

// Styles
import styles from "@/styles/layouts/header/mobile-menu.module.scss";

// Icons
import { logoMark, logoText, closeIcon, chevronDown } from "@/data/icons";

// Data
import { menuItems } from "@/data/menu-items";

// Components
import SocialItems from "@/components/items/social-items";
import ContactItems from "@/components/items/contact-items";

import type { MobileMenuProps } from "@/types/all-types";

export default function MobileMenu({
    handleClose,
    isActive
}: MobileMenuProps) {

    // Pathname
    const pathname = usePathname();
    const urlIsActive = (url: string) => isActiveRoute(pathname, url);

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

                    <Link href="/" className={styles.mobileMenuLogo}>
                        <span className={styles.mobileMenuLogoMark} dangerouslySetInnerHTML={{ __html: logoMark }} />
                        <span className={styles.mobileMenuLogoText} dangerouslySetInnerHTML={{ __html: logoText }} />
                    </Link>

                    <button id="mobileMenuClose" className={styles.mobileMenuClose} aria-label="Close" aria-expanded={isActive ? "true" : "false"} aria-controls="mobileMenu" onClick={handleClose} dangerouslySetInnerHTML={{ __html: closeIcon }} />

                </div>

                <div className={styles.mobileNavMenu}>

                    {menuItems.map((item, index) => (

                        item.children && item.children.length > 0 ? (

                            <div
                                key={index}
                                className={`${styles.navItem} ${item.children.some((child) => urlIsActive(child.url || "/")) ? styles.currentUrl : undefined}`}
                                data-has-children="true"
                                data-open={activeSubmenuIndex === index ? "true" : "false"}
                            >

                                <button
                                    type="button"
                                    className={styles.navItemLabel}
                                    aria-expanded={activeSubmenuIndex === index}
                                    aria-controls={`mobile-submenu-${index}`}
                                    onClick={() => handleSubmenuToggle(index)}
                                >

                                    <span>{item.label}</span>

                                    <span className={styles.navItemCaret} aria-hidden="true" dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                </button>

                                <div
                                    id={`mobile-submenu-${index}`}
                                    className={`${styles.subMenu} ${activeSubmenuIndex === index ? styles.subMenuActive : undefined}`}
                                >

                                    <div className={styles.subMenuInner}>

                                        {item.children.map((child, childIndex) => (

                                            <Link
                                                key={childIndex}
                                                href={child.url || "/"}
                                                className={`${styles.subMenuItem} ${urlIsActive(child.url || "/") ? styles.currentUrl : undefined}`}
                                                onClick={handleClose}
                                            >

                                                {child.icon && <div className={styles.subMenuItemIcon} dangerouslySetInnerHTML={{ __html: child.icon }} />}

                                                <div className={styles.subMenuItemContent}>

                                                    <span className={styles.subMenuItemLabel}>{child.label}</span>

                                                    <p className={styles.subMenuItemDescription}>{child.description}</p>

                                                </div>

                                            </Link>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        ) : (

                            <Link
                                href={item.url || '/'}
                                key={index}
                                className={`${styles.navItem} ${urlIsActive(item.url || '/') ? styles.currentUrl : undefined}`}
                                data-has-children="false"
                                onClick={handleClose}
                            >

                                <span className={styles.navItemLabel}>{item.label}</span>

                            </Link>

                        )

                    ))}

                </div>

                <div className={styles.mobileMenuFooter}>

                    <SocialItems />

                    <ContactItems />

                </div>

            </div>

        </nav>

    )

}