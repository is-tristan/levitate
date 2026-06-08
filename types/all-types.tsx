import type { MotionValue } from "motion/react";

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

export type HeadingProps = {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    heading: string;
    eyebrow?: string;
    description?: string;
    containerClassName?: string;
    className?: string;
    tagClassName?: string | null;
    layout?: "default" | "centered";
    hasFullStop?: boolean;
    hasAnimation?: boolean;
} & Pick<ButtonsProps, "btnOneClassName" | "btnTwoClassName" | "labelOne" | "labelTwo" | "urlOne" | "urlTwo" | "targetOne" | "targetTwo" | "relOne" | "relTwo">;

export interface BannerProps {
    className?: string;
    heading: string;
    description: string;
    backgroundImage?: string;
}

export interface GradientBannerProps {
    className?: string;
    heading: string;
    description: string;
    urlOne?: string | undefined;
    urlTwo?: string | undefined;
}

export interface CTAProps {
    className?: string;
    eyebrow?: string;
    heading?: string;
    description?: string;
    labelOne?: string;
    urlOne?: string;
    labelTwo?: string;
    urlTwo?: string;
}

export interface SectionProps {
    heading: string;
    description?: string | null;
    image?: string | null;
    imageSlot?: React.ReactNode;
    imageAlignment?: "left" | "right";
}

export interface ServicesSectionProps {
    hasCardiffOffice?: boolean;
}

export interface ServicesPartDevelopmentProps {
    scrollProgress: MotionValue<number>;
}

export interface PortfolioCarouselSectionProps {
    heading: string;
    description?: string | null;
}

export interface TestimonialsSectionProps {
    containerClassName?: string;
}

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

export interface PortfolioData {
    portfolioItems: {
        nodes: PortfolioItemData[];
    } | null;
}

export interface PortfolioCarouselItemData {
    name: string;
    url: string;
    poster: string;
    video?: string;
}

export interface PortfolioCarouselFeaturedItemData extends PortfolioCarouselItemData {
    featured: boolean;
}

export interface PortfolioCarouselProps {
    items: PortfolioCarouselFeaturedItemData[];
}

export interface PortfolioItemProps {
    item: PortfolioCarouselItemData;
    isMobile: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    videoRef: (element: HTMLVideoElement | null) => void;
}

export interface LogoItem {
    name: string;
    logo: string;
}

export interface LogoCarouselProps {
    logos?: LogoItem[];
}

export interface LogoQueryResponse {
    data?: {
        logos?: {
            nodes?: {
                title: string;
                featuredImage?: {
                    node?: {
                        mediaItemUrl?: string;
                    };
                };
            }[];
        };
    };
}

export interface TestimonialItemData {
    name: string;
    position: string;
    quote: string;
    image: string;
}

export interface TestimonialItemProps {
    testimonial: TestimonialItemData;
}

export interface TestimonialsCarouselProps {
    testimonials: TestimonialItemData[];
}

export interface TestimonialsQueryResponse {
    data?: {
        testimonials?: {
            nodes?: {
                title: string;
                content: string;
                featuredImage?: {
                    node?: {
                        mediaItemUrl?: string;
                    };
                };
                testimonialFields?: {
                    position?: string;
                };
            }[];
        };
    };
}

export interface PartnersGridProps {
    containerClassName?: string;
}

export interface ReviewItemsProps {
    layout?: "default" | "inline";
    className?: string;
}

export interface ServiceItemLogo {
    image: string;
    alt: string;
    url: string;
}

export interface ServiceItemLogosProps {
    logos: ServiceItemLogo[];
    containerClassName: string;
    itemClassName: string;
}

export interface ResourceNode {
    title: string;
    pageCategories?: {
        edges: { node: { id: string } }[];
    };
    featuredImage?: {
        node?: {
            mediaItemUrl?: string;
        };
    };
    resourceFields?: {
        file?: {
            node?: {
                mediaItemUrl?: string;
            };
        };
    };
}

export interface ResourcesData {
    resources: {
        nodes: ResourceNode[];
    } | null;
}

export interface ResourcesGridProps {
    categorySlug: string;
    heading: string;
    description?: string;
    sectionId?: string;
    hasFullStop?: boolean;
}

export interface PricingIncludedItem {
    description: string;
    icon: string;
}

export interface PricingItemData {
    id: string;
    title: string;
    pricingMetaFields: {
        included: PricingIncludedItem[];
        price: string;
        smallText: string;
    };
}

export interface PricingItemProps {
    pricingItem: PricingItemData;
    itemIndex: number;
}

export interface PricingData {
    allPricing: {
        nodes: PricingItemData[];
    } | null;
}

export interface MobileMenuProps {
    handleClose: () => void;
    isActive: boolean;
}

export interface HeaderMobileBurgerProps {
    id: string;
    handleActive: () => void;
    handleClose: () => void;
    isActive: boolean;
}

export interface IconLinkProps {
    link: string;
    icon: string | undefined;
}
