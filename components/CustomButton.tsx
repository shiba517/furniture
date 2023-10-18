"use client";

import { CustomButtonProps } from "@/types";

const Button = ({ title, css, handleClick }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={'button'}
        className={`${css} bg-blue-300 rounded-full px-4 py-2`}
        onClick={ handleClick }
    >
      <span>{ title }</span>
    </button>
  );
}

export default Button;
