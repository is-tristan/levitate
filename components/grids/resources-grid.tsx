// Next
import Image from "next/image";

// Components
import Content from "@/components/content/content";

// Styles
import styles from "@/styles/components/grids/resources-grid.module.scss";

// Types
import { ResourceTypes } from "@/types/all-types";
interface ResourcesData {
    resources: {
        nodes: ResourceTypes[];
    } | null;
}

// Query
const resourcesQuery = `
    query resources {
        resources {
            nodes {
            title
            featuredImage {
                node {
                mediaItemUrl
                }
            }
                resourceFields {
                    file {
                    node {
                        mediaItemUrl
                    }
                    }
                }
            }
        }
    }
`;

// Get Portfolio Data
async function getResourcesData() {
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
            query: resourcesQuery
        }),
        cache: "no-store"
    });

    if (!response.ok) {
        return [];
    }

    const { data } = await response.json() as { data?: ResourcesData };

    return data?.resources?.nodes ?? [];
}

export default async function ResourcesGrid() {

    const resources: ResourceTypes[] = await getResourcesData();

    if (!resources.length) {
        return null;
    }

    const resourcesData = resources.map((resource: any) => ({
        title: resource?.title ?? "",
        featuredImage: resource?.featuredImage?.node?.mediaItemUrl ?? "",
        file: resource?.resourceFields?.file?.node?.mediaItemUrl ?? "",
    }));

    return (

        <section id="resources" className="row">

            <div className="container centered noPaddingBottom">

                <Content
                    type="h2"
                    heading="SEO Case Studies"
                    hasFullStop={true}
                    description="See how we have helped businesses grow their online presence."
                />

            </div>

            <div className={`container noPaddingTop ${styles.resourcesGridContainer}`}>

                <div className={styles.resourcesGrid}>

                    {resourcesData.map((item) => {

                        return (

                            <article className={styles.resourcesGridItem} key={item.title.toLowerCase()}>

                                <Image src={item.featuredImage} alt={item.title} fill sizes="100%" style={{ objectFit: "cover" }} loading="lazy" />

                                <div className={styles.hoverContent}>

                                    <h3>Download {item.title} PDF</h3>

                                </div>

                                <a href={item.file} target="_blank" rel="noopener noreferrer" aria-label={`Download ${item.title}`}></a>

                            </article>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}