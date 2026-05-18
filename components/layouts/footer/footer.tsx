// Styles
import styles from "@/styles/layouts/footer/footer.module.scss";

// Components
import FooterColLeft from "./footer-parts/footer-col-left";
import FooterColRight from "./footer-parts/footer-col-right";
import FooterCopyright from "./footer-parts/copyright";

// Grid Background
const gridBackground = "/images/backgrounds/grid-background.svg";

export default function Footer() {

    return (

        <footer className={`row ${styles.footer}`} style={{ backgroundImage: `url(${gridBackground})` }}>

            <div className={`container ${styles.footerContainer} ${styles.footerContainerMain}`}>

                <FooterColLeft />

                <FooterColRight />

            </div>

            <FooterCopyright />

        </footer>

    );

}