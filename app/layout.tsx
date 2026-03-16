// Next
import type { Metadata } from "next";
import LocalFont from "next/font/local";

// Imports
import "@/styles/main.scss";
import Header from "@/components/layouts/header/header";

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
  title: "Levitate",
  description: "We help ambitious brands explore their full digital potential through award-winning, handcrafted websites that blend creativity, strategy, and performance.",
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

        </main>

      </body>

    </html>

  );

}
