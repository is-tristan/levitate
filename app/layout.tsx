// Next
import type { Metadata } from "next";
import LocalFont from "next/font/local";

// Imports
import "@/styles/main.scss";
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";

// Utils
import SmoothScroll from "@/utils/animation/smooth-scroll";

// Fonts
const Prophet = LocalFont({
  src: '../public/fonts/prophet-regular.woff2',
  variable: '--font-prophet',
  weight: '400',
  style: 'normal',
})

const DmSans = LocalFont({
  src: '../public/fonts/dm-sans-variable.woff2',
  variable: '--font-dm-sans',
  style: 'normal',
})

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Levitate | Bespoke Websites That Get Results",
    template: "%s | Levitate"
  },
  description: "Levitate crafts bespoke websites, branding, SEO, and digital experiences that help ambitious brands grow through strategy, creativity, and performance.",
  keywords: [
    "Levitate",
    "web design",
    "web development",
    "branding",
    "SEO",
    "digital agency",
    "bespoke websites",
    "Cardiff web design",
    "creative agency"
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
    title: "Levitate | Bespoke Websites That Get Results",
    description: "Levitate crafts bespoke websites, branding, SEO, and digital experiences that help ambitious brands grow through strategy, creativity, and performance.",
    type: "website",
    siteName: "Levitate",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
        alt: "Levitate SEO preview image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Levitate | Bespoke Websites That Get Results",
    description: "Levitate crafts bespoke websites, branding, SEO, and digital experiences that help ambitious brands grow through strategy, creativity, and performance.",
    images: ["/seo-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en" data-theme="auto">

      <body className={`${Prophet.variable} ${DmSans.variable}`}>

        <main id="app" className="app">

          <Header />

          <SmoothScroll />

          <div id="appContent" className="appContent">

            {children}

          </div>

          <Footer />

        </main>

      </body>

    </html>

  );

}
