"use client";

// Next
import Script from "next/script";

export default function ReviewsWidget() {

    return (

        <section id="reviews" className="row">

            <div className="container noPaddingTop noPaddingBottom">

                {/* Elfsight All-in-One Reviews */}
                <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

                <div className="elfsight-app-f33c9c9d-ee00-49e5-99d1-50595c35cdb3" data-elfsight-app-lazy></div>

            </div>

        </section>

    );

}
