// Button Types
export interface ButtonsProps {
    animationDelay?: number;
    disableAnimation?: boolean;
    buttonContainerClassName?: string;
    buttonAlignment?: "default" | "centered";
    btnOneClassName?: string | undefined;
    btnTwoClassName?: string | undefined;
    labelOne?: string | undefined;
    labelTwo?: string | undefined;
    iconOne?: string | undefined;
    iconTwo?: string | undefined;
    urlOne?: string | undefined;
    urlTwo?: string | undefined;
    targetOne?: "_blank" | "_self" | "_parent" | "_top";
    targetTwo?: "_blank" | "_self" | "_parent" | "_top";
    relOne?: string | undefined;
    relTwo?: string | undefined;
    submitForm?: boolean;
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