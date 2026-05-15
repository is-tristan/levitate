import Image from "next/image";
import data from "@/data/team.json";
import styles from "@/styles/components/grids/team-grid.module.scss";

export default function TeamGrid() {
    return (

        <section id="team" className="row">

            <div className="container">

                <div className={styles.teamGrid}>

                    {data.team.map((member) => (

                        <article className={styles.teamGridItem} key={member.name}>

                            <div className={styles.teamGridImage}>

                                <Image src={member.image} alt={member.name} fill sizes="100%" style={{ objectFit: "cover" }} loading="lazy" />

                            </div>

                            <div className={styles.teamGridContent}>

                                <h3>{member.name}<span className="colorPrimary">.</span></h3>

                                <p className="colorPrimary">{member.position}</p>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );
}
