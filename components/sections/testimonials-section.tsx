// Components
import Content from "@/components/content/content";
import ReviewItems from "@/components/items/review-items";
import { ViewportBreakpoint } from "@/utils/helpers/device-rendering";
import TestimonialsCarousel from "@/components/carousels/testimonials-carousel";

// Styles
import styles from "@/styles/components/carousels/testimonials-carousel.module.scss";

type TestimonialsSectionProps = {
    containerClassName?: string;
};

type TestimonialsQueryResponse = {
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
};

const testimonialsQuery = `
    query testimonialsQuery {
      testimonials {
        nodes {
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          content
          testimonialFields {
            position
          }
        }
      }
    }
`;

export default async function TestimonialsSection({
    containerClassName,
}: TestimonialsSectionProps) {
    const wordpressGraphQlUrl = process.env.WORDPRESS_GRAPHQL_URL;

    if (!wordpressGraphQlUrl) {
        return null;
    }

    const response = await fetch(wordpressGraphQlUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: testimonialsQuery,
        }),
        cache: "no-store",
    });

    if (!response.ok) {
        return null;
    }

    const { data } = await response.json() as TestimonialsQueryResponse;
    const testimonials = (data?.testimonials?.nodes ?? [])
        .map((testimonial) => ({
            name: testimonial.title,
            position: testimonial.testimonialFields?.position || "",
            quote: testimonial.content.replace(/<[^>]*>/g, "").trim(),
            image: testimonial.featuredImage?.node?.mediaItemUrl || "",
        }))
        .filter((testimonial) => testimonial.name && testimonial.quote && testimonial.image)
        .sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));

    if (!testimonials.length) {
        return null;
    }

    return (

        <section id="testimonials" className="row testimonials">

            <div className={`container ${containerClassName || undefined} ${styles.headingContainer}`}>

                <Content
                    type="h2"
                    heading="We've got over <span class='gradientAnimation'>150+ 5 star reviews</span> on all platforms"
                    hasFullStop={true}
                    className={styles.heading}
                />

                <ViewportBreakpoint mode="desktop">

                    <ReviewItems layout="inline" />

                </ViewportBreakpoint>

            </div>

            <TestimonialsCarousel testimonials={testimonials} />

        </section>

    )

}