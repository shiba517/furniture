"use client";

import { CustomButtonProps } from "@/types";
import { motion } from 'framer-motion';

const Button = ({ title, css, type, isDisabled, handleClick, initial, animate, transition }: CustomButtonProps) => {
  return (
    <motion.button
        disabled={ isDisabled || false }
        type={ type || 'button' }
        className={`${css} bg-blue-300 rounded-full px-4 py-2 hover:scale-105`}
        onClick={ handleClick }
        initial={ initial }
        animate={ animate }
        transition={ transition }
    >
      <span>{ title }</span>
    </motion.button>
  );
}

export default Button;
