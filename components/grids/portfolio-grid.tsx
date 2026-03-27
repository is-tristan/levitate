// Next
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/components/grids/portfolio-grid.module.scss";

// Types
import { PortfolioItemData } from "@/types/all-types";

// Logos
import { nextjs, wordpress, sanity, astro, shopify, figma, adobexd, supabase } from "@/data/stack-logos";

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
            slug
                portfolioItemFields {
                    cardImage {
                        node {
                            mediaItemUrl
                        }
                    }
                    siteUrl
                }
                stacks {
                    nodes {
                    slug
                    }
                }
            }
        }
    }
`;

// Stack Icons
const stackIcons = {
    "next": { logo: nextjs, alt: "Next.js" },
    "wordpress": { logo: wordpress, alt: "WordPress" },
    "shopify": { logo: shopify, alt: "Shopify" },
    "astro": { logo: astro, alt: "Astro" },
    "figma": { logo: figma, alt: "Figma" },
    "adobe- xd": { logo: adobexd, alt: "Adobe XD" },
    "supabase": { logo: supabase, alt: "Supabase" },
    "sanity": { logo: sanity, alt: "Sanity" },
}

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

export default async function PortfolioGrid() {

    const portfolioItems: PortfolioItemData[] = await getPortfolioData();

    if (!portfolioItems.length) {
        return null;
    }

    const portfolioItemsData = portfolioItems
        .map(portfolioItem => ({
            name: portfolioItem.title,
            url: portfolioItem.portfolioItemFields.siteUrl,
            poster: portfolioItem.portfolioItemFields.cardImage?.node?.mediaItemUrl,
            stacks: portfolioItem.stacks.nodes.map(stack => stack.slug),
            slug: portfolioItem.slug,
        }))
        .filter(item => item.poster && item.url)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => ({
            name: item.name,
            url: item.url,
            poster: item.poster,
            stacks: item.stacks,
        }));

    if (!portfolioItemsData.length) {
        return null;
    }

    return (

        <section id="portfolio" className="row">

            <div className={`container ${styles.portfolioGridContainer}`}>

                <div className={styles.portfolioGrid}>

                    {portfolioItemsData.map((item) => {

                        const slug = `/portfolio/${portfolioItems.find(p => p.title === item.name)?.slug || ''}`;

                        return (

                            <article className={styles.portfolioGridItem} key={item.name}>

                                <Image src={item.poster} alt={item.name} fill sizes="100%" style={{ objectFit: "cover" }} loading="lazy" />

                                <div className={styles.portfolioGridContent}>

                                    <div className={styles.leftContent}>

                                        <h3>{item.name}</h3>

                                        <div className={styles.portfolioGridStacks}>

                                            {item.stacks?.length && item.stacks.map((stack: string) => (

                                                <div className={styles.portfolioGridStack} key={stack} title={stackIcons[stack as keyof typeof stackIcons].alt} dangerouslySetInnerHTML={{ __html: stackIcons[stack as keyof typeof stackIcons].logo }} />

                                            ))}

                                        </div>

                                    </div>

                                    <div className={styles.rightContent}>

                                        <Link href={slug} target="_blank" rel="noopener noreferrer" className={`hidden textLink ${styles.portfolioGridButton}`}>

                                            <span className="buttonLabel">Read Case Study</span>

                                        </Link>

                                        <span className="hidden">|</span>

                                        {item.url && (

                                            <Link href={item.url} target="_blank" rel="noopener noreferrer" className={`textLink ${styles.portfolioGridButton}`}>

                                                <span className="buttonLabel">View Website</span>

                                            </Link>

                                        )}

                                    </div>

                                </div>

                            </article>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}