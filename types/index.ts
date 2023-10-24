import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string;
    css?: string;
    type?: 'button' | 'submit';
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
    initial?: object;
    animate?: object;
    transition?: object;
}

export interface SubHeaderProps {
    title: string;
    css?: string;
    initial?: object;
    animate?: object;
    transition?: object;
}

