import Link from "next/link";
import { arrowUpRight } from "@/data/icons";
import styles from "@/styles/components/handlers/icon-link.module.scss";

type IconLinkProps = {
    link: string;
    icon: string | undefined;
}

export default function IconLink({
    link,
    icon = arrowUpRight,
}: IconLinkProps) {

    return (

        <div className={`${styles.link}`}>

            <Link href={link} className={styles.link} aria-label="View all websites">

                <span className={`${styles.iconAnimation} ${styles.iconOne}`} dangerouslySetInnerHTML={{ __html: icon }} />

                <span className={`${styles.iconAnimation} ${styles.iconTwo}`} dangerouslySetInnerHTML={{ __html: icon }} />

            </Link>

        </div>
    )
}