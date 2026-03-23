"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useIsBelowBreakpoint } from "@/utils/helpers/device-rendering";

export default function SmoothScroll() {
    const isBelowBreakpoint = useIsBelowBreakpoint();

    useEffect(() => {
        if (isBelowBreakpoint) {
            return;
        }

        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.1
        });
        let animationFrameId = 0;

        function raf(time: number) {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        }

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, [isBelowBreakpoint]);

    return null;
}