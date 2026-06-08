import styles from "@/styles/components/sections/google-ads-visual.module.scss";

const metrics = [
    { label: "Clicks", value: "12.4k", change: "+24%" },
    { label: "Conversions", value: "386", change: "+18%" },
    { label: "CTR", value: "4.8%", change: "+0.6%" },
    { label: "ROAS", value: "5.2x", change: "+12%" },
];

const campaigns = [
    { name: "Brand search", share: 92 },
    { name: "Generic search", share: 68 },
    { name: "Remarketing", share: 54 },
];

const chartPoints = [
    { x: 32, y: 200 },
    { x: 112, y: 176 },
    { x: 192, y: 168 },
    { x: 272, y: 132 },
    { x: 352, y: 108 },
    { x: 432, y: 72 },
    { x: 492, y: 48 },
];

const chartLinePath = chartPoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

const chartAreaPath = `${chartLinePath} L 492 248 L 32 248 Z`;

export default function GoogleAdsVisual() {

    return (

        <div
            className={`imageCol aspectRatio1x1 hasRadius ${styles.analyticsImageCol}`}
            aria-hidden="true"
        >

            <div className={styles.analyticsDashboard}>

                <div className={styles.dashboardHeader}>

                    <div className={styles.dashboardTitle}>

                        <span className={styles.dashboardEyebrow}>Google Ads</span>

                        <strong>Campaign performance</strong>

                    </div>

                    <span className={styles.dateRange}>Last 28 days</span>

                </div>

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

                        <span>Clicks over time</span>

                        <span>+142%</span>

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

                        <span>Week 1</span>

                        <span>Week 2</span>

                        <span>Week 3</span>

                        <span>Week 4</span>

                    </div>

                </div>

                <div className={styles.campaignPanel}>

                    <span className={styles.campaignEyebrow}>Top campaigns</span>

                    <ul className={styles.campaignList}>

                        {campaigns.map((campaign) => (

                            <li key={campaign.name} className={styles.campaignRow}>

                                <span>{campaign.name}</span>

                                <div className={styles.campaignBarTrack}>

                                    <span
                                        className={styles.campaignBarFill}
                                        style={{ width: `${campaign.share}%` }}
                                    />

                                </div>

                            </li>

                        ))}

                    </ul>

                </div>

            </div>

            <div className={styles.backgroundImage} aria-hidden="true" />

        </div>

    );

}
