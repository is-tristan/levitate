// Imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActiveRoute } from "@/utils/helpers/navigation";
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";
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

        <ViewportBreakpoint mode="desktop">

            <div id="nav" className={styles.nav}>

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
                                href={item.url || '/'}
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
                disableAnimation={true}
                buttonContainerClassName={styles.actions}
                labelOne="Send us your brief"
                urlOne="/contact"
                btnOneClassName="primary headerBtn"
            />

        </ViewportBreakpoint>
    )

}