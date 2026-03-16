// Next
import Image from "next/image";

// Data
import { partnerLogos } from "@/data/partner-logos";

// Styles
import styles from "@/styles/components/grids/partners-grid.module.scss";

export default function PartnersGrid() {

    return (

        <section className="row">

            <div className="container noPaddingTop">

                <div className="heading centered hasFullStop">

                    <h3 className={styles.heading}>Partnered and <strong className="gradientAnimation">certified</strong> by world-leading digital platforms</h3>

                </div>

                <div className={styles.partnersGrid}>

                    {partnerLogos.map((partner) => (

                        <div className={styles.partnersGridItem} key={partner.name}>

                            <Image src={partner.imageLight} alt={partner.name} width={128} height={80} style={{objectFit: "contain"}} />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}