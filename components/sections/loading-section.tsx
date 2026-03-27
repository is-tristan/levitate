// Components
import Loading from "@/components/item/loading";

// Styles
import styles from "@/styles/components/items/loading-item.module.scss";

export default function LoadingSection() {

    return (

        <section className={styles.loading}>

            <Loading />

        </section>

    );

}