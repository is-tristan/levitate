import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/data/seo";

export default function JsonLd() {
    const graph = [getOrganizationJsonLd(), getWebsiteJsonLd()];

    return (

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />

    );
}
