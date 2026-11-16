// Next
import type { Metadata } from "next";

// SEO
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata("webDesignInCardiff");

export default function WebDesignInCardiffLayout({
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
