// Next
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Web Design in Cardiff | Levitate",
    template: "%s | Levitate"
  },
  description: "We help ambitious Cardiff brands unlock their full digital potential through award-winning, handcrafted websites designed right here in the heart of Wales.",
  keywords: [
    "Levitate",
    "web design",
    "Cardiff web design",
    "bespoke websites",
    "creative agency",
    "web development",
    "branding",
    "SEO",
    "digital agency"
  ],
  applicationName: "Levitate",
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Web Design in Cardiff | Levitate",
    description: "We help ambitious Cardiff brands unlock their full digital potential through award-winning, handcrafted websites designed right here in the heart of Wales.",
    type: "website",
    siteName: "Levitate",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
        alt: "Web Design in Cardiff SEO preview image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design in Cardiff | Levitate",
    description: "We help ambitious Cardiff brands unlock their full digital potential through award-winning, handcrafted websites designed right here in the heart of Wales.",
    images: ["/seo-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <>

      <style dangerouslySetInnerHTML={{ __html: "#nav{display:none!important;}" }} />

      {children}

    </>
  );

}
