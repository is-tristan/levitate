import type { Metadata } from "next";

export const siteConfig = {
    name: "Levitate",
    legalName: "Levitate Online LTD",
    tagline: "Bespoke Websites That Get Results",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://levitate.digital",
    locale: "en_GB",
    language: "en",
    description: "Levitate is a Cardiff-based digital agency crafting bespoke websites, branding, SEO, and Google Ads that help ambitious brands grow through strategy, creativity, and performance.",
    email: {
        sales: "sales@levitate.digital",
        support: "support@levitate.digital",
    },
    phone: "",
    address: {
        streetAddress: "4 Churchill Villas",
        addressLocality: "Cardiff",
        addressRegion: "Wales",
        addressCountry: "GB",
    },
    geo: {
        latitude: 51.4808947,
        longitude: -3.1748183,
    },
    social: {
        facebook: "https://www.facebook.com/LevitateOnline",
        instagram: "https://www.instagram.com/levitate.digital/",
        linkedin: "https://www.linkedin.com/company/levitatedigital",
    },
    defaultOgImage: "/seo-image.png",
    defaultOgImageAlt: "Levitate — Cardiff digital agency for websites, branding, SEO and Google Ads",
    foundingYear: 2017,
    reviewSummary: {
        ratingValue: "5.0",
        reviewCount: "150",
    },
} as const;

export type PageSeoKey =
    | "home"
    | "about"
    | "portfolio"
    | "reviews"
    | "contact"
    | "webDevelopment"
    | "seo"
    | "googleAds"
    | "branding"
    | "webDesignInCardiff"
    | "privacyPolicy"
    | "cookiePolicy"
    | "termsAndConditions";

type PageSeoEntry = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    image?: string;
    imageAlt?: string;
    noIndex?: boolean;
    /** Use a full title without the root "%s | Levitate" template */
    absoluteTitle?: boolean;
};

export const pageSeo: Record<PageSeoKey, PageSeoEntry> = {
    home: {
        title: `Levitate | ${siteConfig.tagline}`,
        description: siteConfig.description,
        path: "/",
        absoluteTitle: true,
        keywords: [
            "Levitate",
            "web design Cardiff",
            "web development",
            "branding agency",
            "SEO agency",
            "Google Ads",
            "bespoke websites",
            "digital agency Wales",
            "creative agency Cardiff",
        ],
    },
    about: {
        title: "About Us & Meet the Team",
        description: "Meet the designers, developers and strategists behind Levitate. Based in Cardiff since 2017, we craft standout brands, award-winning websites and campaigns that perform.",
        path: "/about",
        image: "/images/pages/about/team-cover.webp",
        imageAlt: "The Levitate creative team in Cardiff",
        keywords: [
            "about Levitate",
            "Levitate team",
            "creative agency Cardiff",
            "web design team",
            "Cardiff digital agency",
        ],
    },
    portfolio: {
        title: "Portfolio",
        description: "Explore Levitate’s portfolio of bespoke websites, branding projects and digital experiences built for ambitious brands across Cardiff, the UK and beyond.",
        path: "/portfolio",
        keywords: [
            "web design portfolio",
            "Levitate work",
            "website case studies",
            "Cardiff web design examples",
        ],
    },
    reviews: {
        title: "Client Reviews",
        description: "Read 150+ five-star Levitate reviews across Google, Facebook and more. See why brands trust our web design, branding, SEO and Google Ads work.",
        path: "/reviews",
        keywords: [
            "Levitate reviews",
            "web design agency reviews",
            "Cardiff agency testimonials",
            "5 star reviews",
        ],
    },
    contact: {
        title: "Contact Us",
        description: "Get in touch with Levitate to discuss your next website, branding or digital marketing project. Based in Cardiff, working with ambitious brands across the UK.",
        path: "/contact",
        keywords: [
            "contact Levitate",
            "hire web design agency Cardiff",
            "request a website quote",
        ],
    },
    webDevelopment: {
        title: "Web Design & Development",
        description: "Bespoke, high-performance websites from Levitate. Custom web design and development that looks exceptional, loads fast and converts visitors into customers.",
        path: "/services/web-development",
        image: "/images/pages/services/web-development/web-development-cover.webp",
        imageAlt: "Levitate web design and development service",
        keywords: [
            "web design",
            "web development",
            "bespoke websites",
            "Cardiff web design",
            "custom websites",
            "Next.js websites",
            "WordPress development",
            "Shopify development",
        ],
    },
    seo: {
        title: "SEO & Answer Engine Optimisation",
        description: "Climb search rankings with Levitate’s SEO and AEO strategies. Technical audits, content optimisation and authority building for long-term organic growth.",
        path: "/services/search-engine-optimisation",
        image: "/images/pages/services/seo/seo-cover.webp",
        imageAlt: "Levitate SEO and search marketing service",
        keywords: [
            "SEO",
            "search engine optimisation",
            "AEO",
            "Cardiff SEO agency",
            "technical SEO",
            "organic growth",
        ],
    },
    googleAds: {
        title: "Google Ads Management",
        description: "Data-driven Google Ads management from Levitate. PPC campaigns that deliver qualified leads, measurable ROI and efficient paid growth for ambitious brands.",
        path: "/services/google-ads",
        image: "/images/pages/services/google-ads/google-ads-cover-2.webp",
        imageAlt: "Levitate Google Ads management service",
        keywords: [
            "Google Ads",
            "PPC management",
            "Cardiff PPC agency",
            "paid search",
            "lead generation ads",
        ],
    },
    branding: {
        title: "Branding & Graphic Design",
        description: "Distinctive branding and graphic design from Levitate. Logos, identity systems and marketing creatives that capture your voice and leave a lasting mark.",
        path: "/services/branding",
        image: "/images/pages/services/branding/branding-cover.webp",
        imageAlt: "Levitate branding and graphic design service",
        keywords: [
            "branding",
            "graphic design",
            "logo design",
            "brand identity",
            "Cardiff branding agency",
        ],
    },
    webDesignInCardiff: {
        title: "Web Design in Cardiff | Levitate",
        description: "Award-winning web design in Cardiff from Levitate. Handcrafted, high-performance websites for ambitious Welsh and UK brands, built in the heart of Cardiff.",
        path: "/web-design-in-cardiff",
        absoluteTitle: true,
        keywords: [
            "web design in Cardiff",
            "Cardiff web designer",
            "Wales web design agency",
            "bespoke websites Cardiff",
        ],
    },
    privacyPolicy: {
        title: "Privacy Policy",
        description: "Read how Levitate Online LTD collects, uses and protects personal information when you use our website or contact us.",
        path: "/legal/privacy-policy",
        noIndex: true,
    },
    cookiePolicy: {
        title: "Cookie Policy",
        description: "Learn how Levitate uses cookies and similar technologies on this website, including analytics tools used to understand site performance.",
        path: "/legal/cookie-policy",
        noIndex: true,
    },
    termsAndConditions: {
        title: "Terms and Conditions",
        description: "Review Levitate’s Terms and Conditions covering website use, project scope, payments, intellectual property, and service delivery for clients in the UK and worldwide.",
        path: "/legal/terms-and-conditions",
        noIndex: true,
    },
};

export const sitemapRoutes: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
    { path: "/reviews", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/web-development", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/search-engine-optimisation", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/google-ads", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/branding", changeFrequency: "monthly", priority: 0.9 },
    { path: "/web-design-in-cardiff", changeFrequency: "monthly", priority: 0.85 },
];

type CreateMetadataOptions = {
    title?: string;
    description?: string;
    path?: string;
    keywords?: string[];
    image?: string;
    imageAlt?: string;
    noIndex?: boolean;
    absoluteTitle?: boolean;
};

export function createPageMetadata(keyOrOptions: PageSeoKey | CreateMetadataOptions): Metadata {
    const entry = typeof keyOrOptions === "string"
        ? pageSeo[keyOrOptions]
        : {
            title: keyOrOptions.title || siteConfig.name,
            description: keyOrOptions.description || siteConfig.description,
            path: keyOrOptions.path || "/",
            keywords: keyOrOptions.keywords,
            image: keyOrOptions.image,
            imageAlt: keyOrOptions.imageAlt,
            noIndex: keyOrOptions.noIndex,
            absoluteTitle: keyOrOptions.absoluteTitle,
        };

    const ogImage = entry.image || siteConfig.defaultOgImage;
    const ogImageAlt = entry.imageAlt || siteConfig.defaultOgImageAlt;
    const pageTitle = entry.absoluteTitle ? entry.title : entry.title;
    const socialTitle = entry.absoluteTitle ? entry.title : `${entry.title} | ${siteConfig.name}`;

    return {
        title: entry.absoluteTitle ? { absolute: pageTitle } : pageTitle,
        description: entry.description,
        keywords: entry.keywords,
        applicationName: siteConfig.name,
        category: "business",
        alternates: {
            canonical: entry.path,
        },
        robots: entry.noIndex
            ? {
                index: false,
                follow: true,
                googleBot: {
                    index: false,
                    follow: true,
                },
            }
            : {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                    "max-video-preview": -1,
                },
            },
        openGraph: {
            title: socialTitle,
            description: entry.description,
            url: entry.path,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            type: "website",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: ogImageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description: entry.description,
            images: [ogImage],
        },
    };
}

export function getRootMetadata(): Metadata {
    const home = createPageMetadata("home");

    return {
        metadataBase: new URL(siteConfig.url),
        title: {
            default: pageSeo.home.title,
            template: `%s | ${siteConfig.name}`,
        },
        description: home.description,
        keywords: pageSeo.home.keywords,
        applicationName: siteConfig.name,
        category: "business",
        authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
        creator: siteConfig.legalName,
        publisher: siteConfig.legalName,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        robots: home.robots,
        openGraph: home.openGraph,
        twitter: home.twitter,
        alternates: {
            canonical: "/",
        },
    };
}

export function getOrganizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/seo-image.png`,
        image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
        description: siteConfig.description,
        email: siteConfig.email.sales,
        foundingDate: String(siteConfig.foundingYear),
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.streetAddress,
            addressLocality: siteConfig.address.addressLocality,
            addressRegion: siteConfig.address.addressRegion,
            addressCountry: siteConfig.address.addressCountry,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
        },
        areaServed: [
            {
                "@type": "City",
                name: "Cardiff",
            },
            {
                "@type": "Country",
                name: "United Kingdom",
            },
        ],
        sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.instagram,
            siteConfig.social.linkedin,
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: siteConfig.reviewSummary.ratingValue,
            reviewCount: siteConfig.reviewSummary.reviewCount,
            bestRating: "5",
            worstRating: "1",
        },
        knowsAbout: [
            "Web design",
            "Web development",
            "Brand identity",
            "Search engine optimisation",
            "Google Ads",
            "Digital marketing",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Levitate digital services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Web Design & Development",
                        url: `${siteConfig.url}/services/web-development`,
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "SEO & Answer Engine Optimisation",
                        url: `${siteConfig.url}/services/search-engine-optimisation`,
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Google Ads Management",
                        url: `${siteConfig.url}/services/google-ads`,
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Branding & Graphic Design",
                        url: `${siteConfig.url}/services/branding`,
                    },
                },
            ],
        },
    };
}

export function getWebsiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
            "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: siteConfig.language,
    };
}
