"use client"

import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CustomModal from './CustomModal';
import heroImage  from '../public/hero.jpg'
import { motion } from 'framer-motion';

import FramerMotionButton from './FramerMotionButton';

const Hero = () => {
    const handleScroll = () => {
        alert('Button clicked')
    }

    const [isOpen, setIsOpen] = useState(false)
    // const btn = <CustomButton title="prop" css='bg-red-900'></CustomButton>
    // >
    const btn = () => {
        return (
            <CustomButton
                    title="prop"
                    css="bg-pink-900"
                    type='button'></CustomButton>
        )
    }

    const heroHeaderVariant: {} = {
        visible: { scale: 1 },
        animate: { rotate: 360, scale: 1 },
    }

    const [modalContent, setModalContent] = useState<any>()

    return (
        <div className='h-screen bg-black relative'>
            <div
            className='w-full h-screen opacity-10'
            style={{
                backgroundImage: "url(../hero.jpg)",
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}></div>
            
            <div className='absolute top-0 w-full h-screen flex items-center justify-center flex-col px-4'>
                <motion.h1 
                className='text-4xl font-bold uppercase text-yellow-400'
                variants={heroHeaderVariant}
                initial='visible'
                animate='animate'
                >Huone</motion.h1>
                <motion.p
                className='text-sm text-gray-200 text-center pt-2'
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 2
                    }
                }}
                >From Timeless Classics to Contemporary Creations, Discover a World of Quality Craftsmanship and Endless Inspiration</motion.p>
                <div className='py-4 w-full overflow-hidden over text-center [&>*]:mx-1'>
                    <CustomButton
                        title="prop"
                        css="bg-green-600"
                        type='button'
                        handleClick={handleScroll}
                        initial={{y: "150%"}}
                        animate={{y: 0}}
                        transition={{delay: 1, type: 'spring', stiffness: '150'}}
                        ></CustomButton>
                    {/* *** MODAL *** */}
                    <CustomButton
                        title="modal"
                        css="bg-green-600"
                        handleClick={() => {
                            setIsOpen(true)
                            setModalContent(btn)
                        }}
                        initial={{y: "150%"}}
                        animate={{y: 0}}
                        transition={{delay: 1, type: 'spring', stiffness: '150'}}
                        ></CustomButton>
                    {/* <motion.button
                    className='bg-pink-400 rounded-full p-4'
                    initial={{y: "100%"}}
                    animate={{scale: 1, y: 0}}
                    transition={{delay: 1, type: 'spring', stiffness: '300'}}
                    >framer</motion.button> */}
                </div>
            </div>
            <CustomModal
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            content={modalContent}
            >
            </CustomModal>
        </div>
    );
}

export default Hero;
