import Banner from "@/components/sections/banner";

export default function PrivacyPolicy() {
    return (
        <>
            <Banner
                heading="Privacy Policy"
                description="This Privacy Policy explains how Levitate collects, uses, and protects your personal information when you use our website or contact us through our forms."
            />

            <section className="row">

                <div className="container">

                    <div className="content">

                        <p><strong>Last updated:</strong> March 23, 2026</p>

                        <h2>1. Who We Are</h2>
                        <p>Levitate is a digital agency providing website design, development, branding, and marketing services. This Privacy Policy applies to information collected through our website.</p>

                        <h2>2. Information We Collect</h2>
                        <p>When you submit our contact form, we collect the information you provide to us, which may include:</p>
                        <ul>
                            <li>First name</li>
                            <li>Last name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Message content</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use this information to respond to your enquiry, provide quotes or information about our services, communicate with you about your request, and improve how we handle leads and customer enquiries.</p>

                        <h2>4. Contact Form Storage</h2>
                        <p>Form submissions made through our website are processed and stored using Web3Forms. This means the information you submit through the contact form is stored in the Web3Forms database on our behalf.</p>

                        <h2>5. Google Ads</h2>
                        <p>We use Google Ads to promote our services. Google Ads may use cookies or similar technologies to help us measure ad performance, understand how users interact with our website after clicking an advert, and show relevant ads to users.</p>
                        <p>Google may collect certain technical and usage information in accordance with its own privacy policies. You can learn more about how Google uses data by visiting <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.</p>

                        <h2>6. Legal Basis</h2>
                        <p>Where applicable under data protection law, we process your personal information because it is necessary for our legitimate interests in running and growing our business, and because you have chosen to provide your information to contact us about our services.</p>

                        <h2>7. Sharing Your Information</h2>
                        <p>We do not sell your personal information. We may share your information with trusted service providers where necessary to operate our website, process enquiries, or run advertising activity, including Web3Forms and Google.</p>

                        <h2>8. Data Retention</h2>
                        <p>We keep personal information only for as long as reasonably necessary to deal with your enquiry, maintain business records, and meet legal, regulatory, or operational requirements.</p>

                        <h2>9. Your Rights</h2>
                        <p>Depending on your location, you may have the right to request access to the personal information we hold about you, ask us to correct inaccurate information, request deletion of your information, or object to certain processing.</p>

                        <h2>10. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or how your data is handled, please contact us through the website contact form.</p>

                        <h2>11. Changes To This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Any updates will be posted on this page.</p>
                    </div>

                </div>

            </section>

        </>

    );

}