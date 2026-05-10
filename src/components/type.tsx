import type { CSSProperties } from 'react';

export type RIGOBTNPROPS = {
    inv : boolean,
    text : string,
    chevronColor?: string,
    icon?: boolean
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