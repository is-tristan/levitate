import styles from "@/styles/components/sections/seo-visual.module.scss";

const metrics = [
    { label: "Impressions", value: "48.2k", change: "+32%" },
    { label: "CTR", value: "6.4%", change: "+0.9%" },
];

const queries = [
    { term: "Web design Cardiff", position: 3 },
    { term: "Branding agency", position: 5 },
    { term: "SEO services", position: 8 },
];

const chartPoints = [
    { x: 32, y: 216 },
    { x: 124, y: 192 },
    { x: 216, y: 164 },
    { x: 308, y: 118 },
    { x: 400, y: 82 },
    { x: 492, y: 44 },
];

const chartLinePath = chartPoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

const chartAreaPath = `${chartLinePath} L 492 248 L 32 248 Z`;

export default function SeoVisual() {

    return (

        <div
            className={`imageCol aspectRatio1x1 hasRadius ${styles.searchImageCol}`}
            aria-hidden="true"
        >

            <div className={styles.searchDashboard}>

                <div className={styles.dashboardHeader}>

                    <div className={styles.dashboardTitle}>

                        <span className={styles.dashboardEyebrow}>Search Console</span>

                        <strong>Organic performance</strong>

                    </div>

                    <span className={styles.dateRange}>Last 3 months</span>

                </div>

                <div className={styles.dashboardBody}>

                    <div className={styles.metricGrid}>

                        {metrics.map((metric) => (

                            <div key={metric.label} className={styles.metricCard}>

                                <span className={styles.metricLabel}>{metric.label}</span>

                                <div className={styles.metricValues}>

                                    <strong>{metric.value}</strong>

                                    <span>{metric.change}</span>

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className={styles.chartPanel}>

                        <div className={styles.chartEyebrow}>

                            <span>Organic visibility</span>

                            <span>+187%</span>

                        </div>

                        <svg viewBox="0 0 524 248" className={styles.chart} aria-hidden="true">

                            <path d="M 32 248 L 492 248" className={styles.chartAxis} />

                            <path d="M 32 40 L 32 248" className={styles.chartAxis} />

                            <path d="M 32 196 L 492 196" className={styles.chartGrid} />

                            <path d="M 32 144 L 492 144" className={styles.chartGrid} />

                            <path d="M 32 92 L 492 92" className={styles.chartGrid} />

                            <path d={chartAreaPath} className={styles.chartArea} />

                            <path d={chartLinePath} className={styles.chartLine} />

                            {chartPoints.map((point) => (

                                <circle
                                    key={`${point.x}-${point.y}`}
                                    cx={point.x}
                                    cy={point.y}
                                    r="5"
                                    className={styles.chartPoint}
                                />

                            ))}

                        </svg>

                        <div className={styles.chartLabels}>

                            <span>Jan</span>

                            <span>Mar</span>

                            <span>May</span>

                            <span>Jul</span>

                            <span>Sep</span>

                            <span>Nov</span>

                        </div>

                    </div>

                </div>

                <div className={styles.queryPanel}>

                    <span className={styles.queryEyebrow}>Top queries</span>

                    <ul className={styles.queryList}>

                        {queries.map((query) => (

                            <li key={query.term} className={styles.queryRow}>

                                <span>{query.term}</span>

                                <span className={styles.positionBadge}>Pos. {query.position}</span>

                            </li>

                        ))}

                    </ul>

                </div>

            </div>

            <div className={styles.backgroundImage} aria-hidden="true" />

        </div>

    );

}
