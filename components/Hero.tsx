"use client"

import React from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
const handleScroll = () => {
    alert('Button clicked')
}
  return (
    <div className='p-4 bg-gray-800 text-gray-200 text-center flex items-center h-screen'>
      <div className='mx-auto'>
        <h1 className='text-4xl font-bold uppercase'>Hero page</h1>
        <CustomButton
            title="prop button"
            css="bg-pink-500 my-2"
            handleClick={handleScroll}></CustomButton>
      </div>
    </div>
  );
}

export default Hero;
