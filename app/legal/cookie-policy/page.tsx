import Banner from "@/components/sections/banner";

export default function CookiePolicy() {
    return (
        <>
            <Banner
                heading="Cookie Policy"
                description="This Cookie Policy explains how Levitate uses cookies and similar technologies on this website, including limited analytics tools used to understand site performance."
            />

            <section className="row">
                <div className="container">
                    <div className="content">
                        <p><strong>Last updated:</strong> March 23, 2026</p>

                        <h2>1. What This Policy Covers</h2>
                        <p>This Cookie Policy explains how Levitate uses cookies and similar technologies when you visit our website. It should be read alongside our Privacy Policy.</p>

                        <h2>2. What Cookies Are</h2>
                        <p>Cookies are small text files placed on your device when you visit a website. Similar technologies may also be used to collect information about how a website is accessed and used. Some cookies are necessary for core website functionality, while others are used for analytics or performance monitoring.</p>

                        <h2>3. Cookies We Currently Use</h2>
                        <p>At the time of writing, we only expect limited analytics-related technologies to be used on this website through Vercel Analytics, which is integrated via Next.js.</p>

                        <h2>4. Analytics</h2>
                        <p>We use Vercel Analytics to help us understand how visitors use the website, such as which pages are viewed, approximate traffic levels, device or browser information, and general site performance. This helps us improve the website and user experience.</p>
                        <p>Depending on how the analytics service operates and how your browser handles tracking technologies, analytics may rely on cookies or similar technologies. We do not currently intend to use advertising, profiling, or retargeting cookies on this website as part of this setup.</p>

                        <h2>5. Strictly Necessary Technologies</h2>
                        <p>Some cookies or similar technologies may be used where necessary for the website to function properly, support page delivery, maintain security, or enable core platform features.</p>

                        <h2>6. Third-Party Services</h2>
                        <p>We use third-party infrastructure and analytics tooling to operate the website. These providers may process technical usage information in accordance with their own terms and privacy documentation. For more information about Vercel, you can visit <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>.</p>

                        <h2>7. Managing Cookies</h2>
                        <p>You can usually control or delete cookies through your browser settings. Most browsers allow you to block or remove cookies and to configure how websites may store data on your device. Please note that disabling certain cookies or technologies may affect how some parts of the website function.</p>

                        <h2>8. International Visitors</h2>
                        <p>Because this website may be accessed worldwide, cookie and analytics-related data may be processed in jurisdictions outside your own, subject to the safeguards and practices of the relevant service providers.</p>

                        <h2>9. Changes To This Policy</h2>
                        <p>We may update this Cookie Policy from time to time to reflect changes to the website, legal requirements, or the tools we use. Any updates will be posted on this page.</p>

                        <h2>10. Contact</h2>
                        <p>If you have any questions about this Cookie Policy, please contact us through the website contact form.</p>
                    </div>
                </div>
            </section>
        </>
    );
}