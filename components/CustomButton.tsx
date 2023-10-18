"use client";

import { CustomButtonProps } from "@/types";

const Button = ({ title, css, type, isDisabled, handleClick }: CustomButtonProps) => {
  return (
    <button
        disabled={ isDisabled || false }
        type={ type || 'button' }
        className={`${css} bg-blue-300 rounded-full px-4 py-2`}
        onClick={ handleClick }
    >
      <span>{ title }</span>
    </button>
  );
}

export default Button;
