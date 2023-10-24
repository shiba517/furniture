import React from 'react';
import { SubHeaderProps } from '@/types';
import { motion } from 'framer-motion';

const SubHeader = (props: SubHeaderProps) => {
  return (
    <motion.h2 
    className='font-bold text-2xl uppercase'
    initial={ props.initial }
    >
      {props.title}
    </motion.h2>
  );
}

export default SubHeader;
