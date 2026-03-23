import Content from "@/components/content/content";
import PricingItem, { type PricingItemData } from "@/components/items/pricing-item";
import styles from "@/styles/components/sections/pricing-cols.module.scss";

interface PricingData {
    allPricing: {
        nodes: PricingItemData[];
    } | null;
}

const pricingQuery = `
    query pricingQuery {
        allPricing {
            nodes {
                title
                id
                pricingMetaFields {
                    price
                    smallText
                    included {
                        icon
                        description
                    }
                }
            }
        }
    }
`;

async function getPricingData() {
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
            query: pricingQuery
        }),
        cache: "no-store"
    });

    if (!response.ok) {
        return [];
    }

    const { data } = await response.json() as { data?: PricingData };

    return data?.allPricing?.nodes ?? [];
}

export default async function PricingCols() {
    const pricingItems = await getPricingData();

    if (!pricingItems.length) {
        return null;
    }

    return (

        <section id="pricing" className="row">

            <div className="container noPaddingTop noPaddingBottom centered">

                <Content
                    type="h2"
                    eyebrow="Pricing"
                    heading="Unlike other agencies in Cardiff, <span class='gradientAnimation'>we're transparent with pricing</span>"
                    description="Choose an affordable plan that suits your needs, without hidden fees or surprises."
                    hasFullStop={true}
                />

            </div>

            <div className="container noPaddingTop">

                <div className={styles.pricingCols}>

                    {pricingItems.map((pricingItem, index) => (

                        <PricingItem key={pricingItem.id} pricingItem={pricingItem} itemIndex={index} />

                    ))}

                </div>

            </div>

        </section>

    );

}