// Styles
import styles from "@/styles/components/items/loading-item.module.scss";

export default function Loading() {

    return (

        <div className={styles.loadingContainer}>

            <span className={styles.loader} />

        </div>

    );

}