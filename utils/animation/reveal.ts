export const getRevealContainerVariants = (delayChildren = 0, staggerChildren = 0.15) => ({
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren,
            staggerChildren
        }
    }
});

export const revealItemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
};

export const revealViewport = {
    once: true,
    amount: 0.45
};
