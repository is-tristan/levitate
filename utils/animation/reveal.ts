export const getRevealContainerVariants = (delayChildren = 0, staggerChildren = 0.08) => ({
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
        y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
};

// Low amount so tall sections still trigger on mobile viewports
export const revealViewport = {
    once: true,
    amount: 0.15,
    margin: "0px 0px 80px 0px"
};
