// Next
import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";

// Imports
import "@/styles/main.scss";
import Header from "@/components/layouts/header/header";
import Topbar from "@/components/layouts/topbar/topbar";
import Footer from "@/components/layouts/footer/footer";
import JsonLd from "@/components/seo/json-ld";

// SEO
import { getRootMetadata } from "@/data/seo";

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
export const metadata: Metadata = getRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en" data-theme="auto">

      <body className={`${Prophet.variable} ${DmSans.variable}`}>

        <JsonLd />

        <div id="app" className="app">

          <Topbar />

          <Header />

          <main id="appContent" className="appContent">

            {children}

          </main>

          <Footer />

        </div>

        <SmoothScroll />

        <GoogleTagManager gtmId="AW-18023043406" />

      </body>

    </html>

  );

}
