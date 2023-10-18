import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string;
    css?: string;
    type?: 'button' | 'submit';
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
}

