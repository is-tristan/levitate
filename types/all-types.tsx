// Button Types
export interface ButtonsProps {
    animationDelay?: number;
    disableAnimation?: boolean;
    buttonContainerClassName?: string;
    buttonAlignment?: "default" | "centered";
    btnOneClassName?: string;
    btnTwoClassName?: string;
    labelOne?: string;
    labelTwo?: string;
    iconOne?: string;
    iconTwo?: string;
    urlOne?: string;
    urlTwo?: string;
    targetOne?: "_blank" | "_self" | "_parent" | "_top";
    targetTwo?: "_blank" | "_self" | "_parent" | "_top";
    relOne?: string;
    relTwo?: string;
}

// Portfolio Item Types
export interface PortfolioItemData {
    title: string;
    slug: string;
    portfolioItemFields: {
        cardImage: {
            node: {
                mediaItemUrl: string;
            };
        };
        cardVideo: {
            node: {
                mediaItemUrl: string;
            };
        };
        featured: boolean;
        siteUrl: string;
    };
    stacks: {
        nodes: {
            slug: string;
        }[];
    };
}

// Portfolio Carousel Types
export interface PortfolioCarouselProps {
    heading: string;
    description?: string | null;
}