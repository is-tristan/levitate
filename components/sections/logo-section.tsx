// Styles
import styles from "@/styles/components/carousels/logo-carousel.module.scss";

// Components
import LogoCarousel from "@/components/carousels/logo-carousel";

type LogoQueryResponse = {
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
};

const logoQuery = `
    query logoQuery {
      logos {
        nodes {
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
`;

export default async function LogoSection() {
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
            query: logoQuery,
        }),
        cache: "no-store",
    });

    if (!response.ok) {
        return null;
    }

    const { data } = await response.json() as LogoQueryResponse;
    const logos = (data?.logos?.nodes ?? [])
        .map((logoItem) => ({
            name: logoItem.title,
            logo: logoItem.featuredImage?.node?.mediaItemUrl || "",
        }))
        .filter((logoItem) => logoItem.name && logoItem.logo);

    if (!logos.length) {
        return null;
    }

    return (

        <section id="logos" className="row" aria-hidden="true">

            <div className="container noPaddingBottom">

                <div className="heading centered hasFullStop">

                    <h3 className={styles.heading} style={{ fontSize: "1.25rem", fontFamily: "var(--font-dm-sans)", fontWeight: "700" }}>Over <strong className="gradientAnimation">700+</strong> businesses have chosen us to grow online</h3>

                </div>

            </div>

            <LogoCarousel logos={logos} />

        </section>

    )

}