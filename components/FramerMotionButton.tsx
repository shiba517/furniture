import { motion } from 'framer-motion';

interface CustomButtonProps {
  title?: string;
  initial?: object;
  animate?: object;
  transition?: object;
}

const FramerMotionButton = (props: CustomButtonProps) => {
  return (
    <motion.button
    className='bg-pink-400 rounded-full p-4'
    initial={props.initial}
    animate={{scale: 1, y: 0}}
    transition={{delay: 1, type: 'spring', stiffness: '300'}}
    >{props.title}</motion.button>
  );
}

export default FramerMotionButton;
