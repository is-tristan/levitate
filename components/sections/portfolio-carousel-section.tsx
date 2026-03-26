// Components
import Content from "@/components/content/content";
import PortfolioCarousel from "@/components/carousels/portfolio-carousel";

// Styles
import styles from "@/styles/components/carousels/portfolio-carousel.module.scss";

// Types
import { PortfolioItemData } from "@/types/all-types";

// Types
interface PortfolioData {
    portfolioItems: {
        nodes: PortfolioItemData[];
    } | null;
}

// Query
const portfolioQuery = `
 query portfolioQuery {
        portfolioItems {
            nodes {
            title
                portfolioItemFields {
                    cardImage {
                    node {
                        mediaItemUrl
                    }
                    }
                    cardVideo {
                    node {
                        mediaItemUrl
                    }
                    }
                    featured
                    siteUrl
                }
            }
        }
    }
`;

// Get Portfolio Data
async function getPortfolioData() {
    const wordpressGraphQlUrl = process.env.WORDPRESS_GRAPHQL_URL;

    if (!wordpressGraphQlUrl) {
        return [];
    }

    const response = await fetch(wordpressGraphQlUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: portfolioQuery
        }),
        cache: "no-store"
    });

    if (!response.ok) {
        return [];
    }

    const { data } = await response.json() as { data?: PortfolioData };

    return data?.portfolioItems?.nodes ?? [];
}

// Types
type PortfolioCarouselSectionProps = {
    heading: string;
    description?: string | null;
}

export async function PortfolioCarouselSection({
    heading,
    description,
}: PortfolioCarouselSectionProps) {

    const portfolioItems: PortfolioItemData[] = await getPortfolioData();

    if (!portfolioItems.length) {
        return null;
    }

    const carouselItems = portfolioItems
        .filter(portfolioItem => portfolioItem.portfolioItemFields.featured)
        .map(portfolioItem => ({
            name: portfolioItem.title,
            url: portfolioItem.portfolioItemFields.siteUrl,
            poster: portfolioItem.portfolioItemFields.cardImage?.node?.mediaItemUrl,
            video: portfolioItem.portfolioItemFields.cardVideo?.node?.mediaItemUrl || undefined,
            featured: portfolioItem.portfolioItemFields.featured,
        }))
        .filter(item => item.poster && item.url)
        .map(item => ({
            name: item.name,
            url: item.url,
            poster: item.poster,
            video: item.video,
            featured: item.featured,
        }));

    if (!carouselItems.length) {
        return null;
    }

    return (

        <section id="portfolio" className="row">

            <div className={`container centered noPaddingBottom ${styles.headingContainer}`}>

                <Content
                    type="h2"
                    heading={heading}
                    hasFullStop={true}
                    description={description || undefined}
                    className={styles.heading}
                />

            </div>

            <PortfolioCarousel items={carouselItems} />

        </section>

    );

}