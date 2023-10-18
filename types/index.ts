import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string;
    css?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}