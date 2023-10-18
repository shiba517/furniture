"use client"

import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CustomModal from './CustomModal';

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

    const btn2 = () => {
        return (
            <CustomButton
                    title="prop"
                    css="bg-yellow-900"
                    type='button'></CustomButton>
        )
    }

    const [modalContent, setModalContent] = useState<any>()

    return (
        <div className='p-4 bg-gray-800 text-gray-200 h-screen flex items-center justify-center flex-col'>
            <h1 className='text-4xl font-bold uppercase'>Hero page</h1>
            <div className='pt-2 [&>*]:mx-1'>
                <CustomButton
                    title="prop"
                    css="bg-pink-500"
                    type='button'
                    handleClick={handleScroll}></CustomButton>
                {/* *** MODAL *** */}
                <CustomButton
                    title="modal"
                    css="bg-pink-700"
                    handleClick={() => {
                        setIsOpen(true)
                        setModalContent(btn)
                    }}></CustomButton>
                    <CustomButton
                    title="modal 2"
                    css="bg-pink-700"
                    handleClick={() => {
                        setIsOpen(true)
                        setModalContent(btn2)
                    }}></CustomButton>
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
