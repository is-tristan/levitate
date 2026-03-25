"use client";

// Next
import Link from "next/link";
import { useState } from "react";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";

// Imports
import Buttons from "@/components/handlers/buttons";

// Icons
import { checkLg } from "@/data/icons";

export default function Form() {

    // Form State
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    }

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

                    <label htmlFor="name">Full Name<span className={`${styles.required}`}></span></label>
                    <input type="text" name="name" id="name" placeholder="John Doe" required />

                </fieldset>

                <fieldset className={`${styles.formField} ${styles.formFieldHalf}`}>

                    <label htmlFor="name">Email Address<span className={`${styles.required}`}></span></label>
                    <input type="email" name="email" id="email" placeholder="you@company.com" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />

                </fieldset>

                <fieldset className={`${styles.formField} ${styles.formFieldHalf}`}>

                    <label htmlFor="phone">Phone Number<span className={`${styles.required}`}></span></label>
                    <input type="text" name="phone" id="phone" placeholder="+44 7123 456789" required pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$" />

                </fieldset>

                <fieldset className={styles.formField}>

                    <label htmlFor="phone">Existing Website (if applicable)</label>
                    <input type="text" name="existingWebsite" id="existingWebsite" placeholder="https://example.com" />

                </fieldset>

                <fieldset className={styles.formField}>

                    <label htmlFor="message">Your Message<span className={`${styles.required}`}></span></label>
                    <textarea name="message" id="message" placeholder="Describe your project in detail. Include the amount of pages, desired platform, and any other relevant information." required></textarea>

                </fieldset>

                <fieldset className={`${styles.formField} ${styles.formFieldPolicy} ${styles.formFieldCheckbox} ${isCheckboxChecked ? styles.checked : ""}`}>

                    <div className={styles.checkbox} onClick={handleCheckboxChange}>

                        <input type="checkbox" name="policy" id="policy" required />

                    </div>

                    <div className={styles.checkboxLabel}>

                        <label htmlFor="policy">I have read and agree to the <Link href="/legal/privacy-policy" target="_blank">privacy policy</Link>.</label>

                    </div>

                    <div className={styles.customCheckbox}>

                        <span dangerouslySetInnerHTML={{ __html: checkLg }} />

                    </div>

                </fieldset>

            </div>

            <div className={styles.formFooter} onClick={handleSubmit}>

                <Buttons
                    disableAnimation={true}
                    btnOneClassName="btn primary"
                    labelOne="Send us your brief"
                    urlOne="javascript:void(0)"
                />

            </div>

        </form>

    )

}