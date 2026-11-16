"use client";

// Imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActiveRoute } from "@/utils/helpers/navigation";
import Buttons from "@/components/handlers/buttons";

// Icons
import { chevronDown } from "@/data/icons";

// Data
import { menuItems } from "@/data/menu-items";

// Styles
import styles from "@/styles/layouts/header/header.module.scss";

export default function DesktopNav() {

    // Pathname
    const pathname = usePathname();
    const urlIsActive = (url: string) => isActiveRoute(pathname, url);

    return (

        <>

            <div id="nav" className={`hidden-s ${styles.nav}`}>

                {menuItems.map((item, index) => (

                    item.children && item.children.length > 0 ? (

                        <div
                            key={index}
                            className={`${styles.navItem} ${item.children.some((child) => urlIsActive(child.url || "/")) ? styles.currentUrl : undefined}`}
                            data-has-children="true"
                        >

                            <button
                                type="button"
                                className={styles.navItemTrigger}
                                aria-expanded="false"
                                aria-haspopup="true"
                            >

                                <span className={styles.navItemLabel}>{item.label}</span>

                                <span className={styles.navItemCaret} aria-hidden="true" dangerouslySetInnerHTML={{ __html: chevronDown }} />

                            </button>

                            <div className={styles.subMenu} role="menu" aria-label={`${item.label} submenu`}>

                                {item.children.map((child, childIndex) => (

                                    <Link
                                        key={childIndex}
                                        href={child.url || "/"}
                                        className={`${styles.subMenuItem} ${urlIsActive(child.url || "/") ? styles.currentUrl : undefined}`}
                                        role="menuitem"
                                    >

                                        {child.icon && (
                                            <div className={styles.subMenuItemIcon} dangerouslySetInnerHTML={{ __html: child.icon }} />
                                        )}

                                        <div className={styles.subMenuItemContent}>

                                            <span className={styles.subMenuItemLabel}>{child.label}</span>

                                            <p className={styles.subMenuItemDescription}>{child.description}</p>

                                        </div>

                                    </Link>

                                ))}

                            </div>

                        </div>

                    ) : (

                        <Link
                            href={item.url || "/"}
                            key={index}
                            className={`${styles.navItem} ${urlIsActive(item.url || "/") ? styles.currentUrl : undefined}`}
                            data-has-children="false"
                        >

                            <span className={styles.navItemLabel}>{item.label}</span>

                        </Link>

                    )

                ))}

            </div>

            <Buttons
                disableAnimation={true}
                buttonContainerClassName={`hidden-s ${styles.actions}`}
                labelOne="Send us your brief"
                urlOne="/contact"
                btnOneClassName="primary headerBtn"
            />

        </>

    );

}
