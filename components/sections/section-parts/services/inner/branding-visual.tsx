import styles from "@/styles/components/sections/branding-visual.module.scss";

const brandColors = [
    "#0096fa",
    "#001af8",
    "#ff6bd4",
    "#f1f5f7",
    "#ffffff",
];

function LockupIcon() {
    return (

        <span className={styles.lockupIcon} aria-hidden="true">

            <svg viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M52.8193 5.61811V16.843L43.1012 22.4612V13.229L33.3943 7.6109V5.61811L43.1012 0L52.8193 5.61811Z" fill="#019EFF" />

                <path d="M43.0903 36.1405V40.5765L21.562 53.0399L0 40.5765V15.6721L21.562 3.20871V23.6883L43.0903 36.1405Z" fill="#001AF8" />

            </svg>

        </span>

    );
}

export default function BrandingVisual() {

    return (

        <div
            className={`imageCol aspectRatio1x1 hasRadius ${styles.brandKitImageCol}`}
            aria-hidden="true"
        >

            <div className={styles.brandKitBoard}>

                <div className={`${styles.kitCard} ${styles.lockupCard}`}>

                    <span className={styles.kitCardEyebrow}>Primary lockup</span>

                    <div className={styles.lockupVariants}>

                        <div className={`${styles.lockupVariant} ${styles.dark}`}>

                            <div className={styles.lockupMark}>

                                <LockupIcon />

                                Levitate

                            </div>

                        </div>

                        <div className={`${styles.lockupVariant} ${styles.light}`}>

                            <div className={styles.lockupMark}>

                                <LockupIcon />

                                Levitate

                            </div>

                        </div>

                    </div>

                </div>

                <div className={`${styles.kitCard} ${styles.colorStripCard}`}>

                    <span className={styles.kitCardEyebrow}>Colour system</span>

                    <div className={styles.colorStrip}>

                        {brandColors.map((color) => (

                            <span
                                key={color}
                                className={styles.colorSwatch}
                                style={{ backgroundColor: color }}
                            />

                        ))}

                    </div>

                </div>

                <div className={`${styles.kitCard} ${styles.typographyCard}`}>

                    <span className={styles.kitCardEyebrow}>Typography scale</span>

                    <div className={styles.typeScale}>

                        <div className={`${styles.typeRow} ${styles.display}`}>

                            <strong>Display</strong>

                            <span>Branding that lifts.</span>

                        </div>

                        <div className={`${styles.typeRow} ${styles.heading}`}>

                            <strong>Heading</strong>

                            <span>Identity in every detail.</span>

                        </div>

                        <div className={`${styles.typeRow} ${styles.body}`}>

                            <strong>Body</strong>

                            <span>Clear, confident messaging across every touchpoint.</span>

                        </div>

                    </div>

                </div>

                <div className={`${styles.kitCard} ${styles.applicationsCard}`}>

                    <span className={styles.kitCardEyebrow}>Applications</span>

                    <div className={styles.applicationPreviews}>

                        <div className={styles.applicationPreview}>

                            <span>Card</span>

                            <div className={`${styles.previewCard} ${styles.card}`} />

                        </div>

                        <div className={styles.applicationPreview}>

                            <span>Social</span>

                            <div className={`${styles.previewCard} ${styles.social}`} />

                        </div>

                        <div className={styles.applicationPreview}>

                            <span>Print</span>

                            <div className={`${styles.previewCard} ${styles.letterhead}`} />

                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.backgroundImage} aria-hidden="true" />

        </div>

    );

}
