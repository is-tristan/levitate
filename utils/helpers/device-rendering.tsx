"use client";

import { useState, useEffect, useCallback } from "react";

export const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 1024;
}

export const isTablet = () => {
    return typeof window !== "undefined" && window.innerWidth >= 1024 && window.innerWidth < 1200;
}

export const isDesktop = () => {
    return typeof window !== "undefined" && window.innerWidth >= 1200;
}

const DEFAULT_BREAKPOINT = 1024;

type ViewportBreakpointMode = "desktop" | "mobile";

interface ViewportBreakpointProps {
    children: React.ReactNode;
    mode: ViewportBreakpointMode;
    breakpoint?: number;
}

export function ViewportBreakpoint({ children, mode, breakpoint = DEFAULT_BREAKPOINT }: ViewportBreakpointProps) {
    const [width, setWidth] = useState<number | null>(null);

    const updateWidth = useCallback(() => {
        setWidth(typeof window !== "undefined" ? window.innerWidth : null);
    }, []);

    useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [updateWidth]);

    if (width === null) {
        return null;
    }

    const showdesktop = mode === "desktop" && width >= breakpoint;
    const showmobile = mode === "mobile" && width < breakpoint;

    if (showdesktop || showmobile) {
        return <>{children}</>;
    }

    return null;
}