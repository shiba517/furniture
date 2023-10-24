"use client";

import { motion } from 'framer-motion';

interface LatestReleaseSquareProps {
    backgroundImageUrl: string;
    initial: object;
    whileInView?: any;
  }

const LatestReleaseSquare = (props: LatestReleaseSquareProps) => {
  return (
    <motion.div
    className='aspect-square w-1/3 bg-blue-300'
    style={{
        backgroundImage: props.backgroundImageUrl,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        }}
    initial={props.initial}
    whileInView={props.whileInView}
    viewport={{ once: true }}
    >
      
    </motion.div>
  );
}

export default LatestReleaseSquare;
