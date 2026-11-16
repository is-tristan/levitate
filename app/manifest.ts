import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/seo";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: "#0e121a",
        theme_color: "#0096FA",
        lang: siteConfig.language,
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
