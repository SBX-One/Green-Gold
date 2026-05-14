import type { ReactNode, CSSProperties, Dispatch, SetStateAction } from "react"

export type RIGOBTNPROPS = {
    inv : boolean,
    text : string,
    chevronColor?: string,
    icon?: boolean
    onClick?: () => void;
}  

export type WWSCardProps = {
    title: string,
    date: string,
    desc?: string,
    volume?: string,
}

export type logoPillProps = {
    text: string
}

export type RigoImageCardProps = {
    title: string,
    date: string,
    image: string,
    customImageClass?: string
}

export type RigoAccordianProps = {
    title: string,
    content: string
}

export type seperatorProps = {
    height? : CSSProperties['height'];
}

export type DropDownProps = {
    title: string,
    links: string
}

export type CustomClassProps = {
    CustomWidth: number,
    CustomClass: string,
    RemoveCustomClass?: string,
    divRef: string
}

export type NavbarProps = {
    mode?: string;
}

export type SimpleButtonProps = {
    text?: string;
    icon?: string;
    onClick: () => void;
}

export type ProductCardProps = {
    id: number;
    title: string;
    img: string;
    harga: number;
}

export type SimplePillProps = {
    text: string;
    isSelected?: boolean;
    onClick?: () => void;
}

export type SimpleCardProps = {
    title: string;
    desc: string;
    button?: boolean;
    icon?: ReactNode;
    numSampah: number;
    setNumSampah: (updater: (prev: number) => number) => void;
}

export type TabsProps = {
    setCurrentMode: Dispatch<SetStateAction<boolean>>;
    currentMode: boolean;
}

export type MenuProps = {
    TotalHarga?: number;
    setTotalHarga?: Dispatch<SetStateAction<number>>
    back: string;
}

export type SimpleIconProps = {
    icon: string;
    iconWidth: number;
    border?: boolean;
}

export type BarProps = {
    title: string;
    desc: string | number;
    iconR?: string;
    iconL?: string;
    iconLBorder?: boolean;
    iconRBorder?: boolean;
}

export type DropDownBarProps = {
    title: string;
    icon: string;
    onclick?: () => void;
}

export type SimpleTinyPill = {
    text: string;
    icon?: React.ReactNode;
}