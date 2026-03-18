"use client";

// React
import { useState, useEffect, useRef } from "react"

// Imports
import * as THREE from "three";

// @ts-ignore
import GLOBE from "vanta/dist/vanta.globe.min"

// Styles
import styles from "@/styles/components/sections/cta-section.module.scss";

export default function Vanta() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(GLOBE({
                el: myRef.current,
                THREE: THREE,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: "#0e121a",
                color: "#FF6BD4",
                color2: "#0096FA",
            }))
        }
        return () => {
            // @ts-ignore
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div className={styles.vantaGlobe} ref={myRef}></div>
}