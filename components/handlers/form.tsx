"use client";

// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";

// Imports
import Buttons from "@/components/handlers/buttons";

export default function Form() {

    const handleSubmit = () => {
        const form = document.getElementById("contactForm") as HTMLFormElement;
        form.requestSubmit();
    }

    return (

        <form action="https://api.web3forms.com/submit" method="POST" id="contactForm" className={styles.form}>

            <input type="hidden" name="access_key" value="2661e58f-732a-48b8-a5d3-ed652f8ec557" />
            <input type="hidden" name="subject" value="New Submission from Levitate" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" id="botcheck" style={{ display: "none" }} />

            <div className={styles.formFields}>

                <fieldset className={styles.formField}>

                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe" required />

                </fieldset>

                <fieldset className={`${styles.formField} ${styles.formFieldHalf}`}>

                    <label htmlFor="name">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="you@company.com" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />

                </fieldset>

                <fieldset className={`${styles.formField} ${styles.formFieldHalf}`}>

                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone" placeholder="+44 7123 456789" required pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$" />

                </fieldset>

                <fieldset className={styles.formField}>

                    <label htmlFor="phone">Existing Website (if applicable)</label>
                    <input type="text" name="existingWebsite" id="existingWebsite" placeholder="https://example.com" required />

                </fieldset>

                <fieldset className={styles.formField}>

                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" placeholder="Describe your project in detail. Include the amount of pages, desired platform, and any other relevant information." required></textarea>

                </fieldset>

                <fieldset className={`${styles.formField} ${styles.formFieldCheckbox}`}>

                    <input type="checkbox" name="policy" id="policy" required />
                    <label htmlFor="policy">I have read and agree to the <Link href="/privacy-policy" target="_blank">privacy policy</Link>.</label>

                </fieldset>

            </div>

            <div className={styles.formFooter} onClick={handleSubmit}>

                <Buttons
                    btnOneClassName="btn primary"
                    labelOne="Send us your brief"
                />

            </div>

        </form>

    )

}