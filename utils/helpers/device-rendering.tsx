"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

interface DelayedViewportMountOptions {
    enterRootMargin?: string;
    leaveDelay?: number;
}

export function useIsBelowBreakpoint(breakpoint = DEFAULT_BREAKPOINT) {
    const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(false);

    const updateIsBelowBreakpoint = useCallback(() => {
        setIsBelowBreakpoint(typeof window !== "undefined" && window.innerWidth < breakpoint);
    }, [breakpoint]);

    useEffect(() => {
        updateIsBelowBreakpoint();
        window.addEventListener("resize", updateIsBelowBreakpoint);
        return () => window.removeEventListener("resize", updateIsBelowBreakpoint);
    }, [updateIsBelowBreakpoint]);

    return isBelowBreakpoint;
}

export function useDelayedViewportMount<ElementType extends HTMLElement>({
    enterRootMargin = "300px 0px",
    leaveDelay = 350
}: DelayedViewportMountOptions = {}) {
    const [element, setElement] = useState<ElementType | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearLeaveTimeout = useCallback(() => {
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
        }
    }, []);

    const viewportRef = useCallback((node: ElementType | null) => {
        setElement(node);
    }, []);

    useEffect(() => {
        if (!element || typeof window === "undefined") {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            clearLeaveTimeout();

            if (entry.isIntersecting) {
                setIsMounted(true);
                return;
            }

            leaveTimeoutRef.current = setTimeout(() => {
                setIsMounted(false);
                leaveTimeoutRef.current = null;
            }, leaveDelay);
        }, {
            rootMargin: enterRootMargin
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
            clearLeaveTimeout();
        };
    }, [clearLeaveTimeout, element, enterRootMargin, leaveDelay]);

    return { isMounted, viewportRef };
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