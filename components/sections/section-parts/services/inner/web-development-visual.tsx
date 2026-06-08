import Image from "next/image";

import styles from "@/styles/components/sections/web-development-visual.module.scss";

const scores = [
    { label: "Performance", value: "100" },
    { label: "Accessibility", value: "100" },
];

const platforms = [
    "Next.js",
    "WordPress",
    "Shopify",
    "Responsive",
];

export default function WebDevelopmentVisual() {

    return (

        <div
            className={`imageCol aspectRatio1x1 hasRadius ${styles.devImageCol}`}
            aria-hidden="true"
        >

            <div className={styles.devDashboard}>

                <div className={styles.dashboardHeader}>

                    <div className={styles.dashboardTitle}>

                        <span className={styles.dashboardEyebrow}>Web Development</span>

                        <strong>Live preview</strong>

                    </div>

                </div>

                <div className={styles.dashboardBody}>

                    <div className={styles.scoreColumn}>

                        {scores.map((score) => (

                            <div key={score.label} className={styles.scoreCard}>

                                <span className={styles.scoreLabel}>{score.label}</span>

                                <strong>{score.value}</strong>

                            </div>

                        ))}

                    </div>

                    <div className={styles.devicePreview}>

                        <div className={styles.laptopFrame}>

                            <Image
                                src="/images/pages/services/web-development/laptop-mockup.webp"
                                alt=""
                                fill
                                sizes="(max-width: 768px) 220px, 320px"
                                style={{ objectFit: "contain" }}
                                priority
                            />

                        </div>

                    </div>

                </div>

                <div className={styles.platformRow}>

                    {platforms.map((platform) => (

                        <span key={platform} className={styles.platformPill}>{platform}</span>

                    ))}

                </div>

            </div>

            <div className={styles.backgroundImage} aria-hidden="true" />

        </div>

    );

}
