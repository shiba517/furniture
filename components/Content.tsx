"use client";

import SubHeader from './SubHeader';
import Button from './CustomButton';
import { motion } from 'framer-motion';

const Content = () => {
  return (
    <motion.div
    className='bg-black relative h-[110vh] w-full'
    >
        <motion.div 
        className='h-full bg-yellow-400 text-left p-4 flex justify-center flex-col absolute top-0'
        initial={{opacity: 0}}
        whileInView={{
            opacity: 1,
            transition: {
                duration: 1.5
            }
        }}
        viewport={{ once: true }}
    >
        <SubHeader 
        title='New yellow collection'
        ></SubHeader>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit atque voluptas quod mollitia deleniti</p>
        <Button title="explore" css="bg-pink-600 mt-2"></Button>
        </motion.div>
    </motion.div>
    
  );
}

export default Content;
