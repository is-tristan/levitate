// Next
import Image from "next/image";

// Components
import Content from "@/components/content/content";

// Styles
import styles from "@/styles/components/grids/resources-grid.module.scss";

import type { ResourcesData, ResourcesGridProps } from "@/types/all-types";

const resourcesQuery = `
query resourcesByCategory($categorySlug: [String]) {
  resources {
    nodes {
      pageCategories(where: {slug: $categorySlug}) {
        edges {
          node {
            id
          }
        }
      }
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

async function getResourcesData(categorySlug: string) {
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
            query: resourcesQuery,
            variables: { categorySlug: [categorySlug] }
        }),
        cache: "no-store"
    });

    if (!response.ok) {
        return [];
    }

    const { data } = await response.json() as { data?: ResourcesData };

    const nodes = data?.resources?.nodes ?? [];

    return nodes.filter((resource) => (resource.pageCategories?.edges?.length ?? 0) > 0);
}

export default async function ResourcesGrid({
    categorySlug,
    heading,
    description,
    sectionId = "resources",
    hasFullStop = true,
}: ResourcesGridProps) {

    const resources = await getResourcesData(categorySlug);

    if (!resources.length) {
        return null;
    }

    const resourcesData = resources.map((resource) => ({
        title: resource?.title ?? "",
        featuredImage: resource?.featuredImage?.node?.mediaItemUrl ?? "",
        file: resource?.resourceFields?.file?.node?.mediaItemUrl ?? "",
    }));

    return (

        <section id={sectionId} className="row">

            <div className="container centered noPaddingBottom">

                <Content
                    type="h2"
                    heading={heading}
                    hasFullStop={hasFullStop}
                    description={description}
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