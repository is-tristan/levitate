export type ButtonsProps = {
    animationDelay?: number;
    disableAnimation?: boolean;
    buttonContainerClassName?: string;
    buttonAlignment?: "default" | "centered";
    btnOneClassName?: string;
    btnTwoClassName?: string;
    labelOne?: string;
    labelTwo?: string;
    iconOne?: string;
    iconTwo?: string;
    urlOne?: string;
    urlTwo?: string;
    targetOne?: "_blank" | "_self" | "_parent" | "_top";
    targetTwo?: "_blank" | "_self" | "_parent" | "_top";
    relOne?: string;
    relTwo?: string;
}