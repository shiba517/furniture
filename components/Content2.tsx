"use client";

import Button from './CustomButton';
import { motion } from 'framer-motion';
import LatestReleaseSquare from './others/LatestReleaseSquare';

const Content2 = () => {


    return (
        <div className='h-fit bg-black relative'>
            <div className='absolute bottom-0 left-0 z-50 p-4 w-2/3'>
                <motion.p 
                className='text-6xl font-bold uppercase'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 1.5,
                      delay: 2
                    }
                }}
                viewport={{ once: true }}
                >Latest releases</motion.p>
            </div>
            <div className='bg-pink-400 w-full flex flex-row'>
                <LatestReleaseSquare
                backgroundImageUrl="url(../assets/images/furn_1.jpg)"
                initial={{x: '-100%'}}
                whileInView={{
                    x: '0%',
                    transition: {
                        duration: 2
                    }
                }}
                ></LatestReleaseSquare>
                <LatestReleaseSquare
                backgroundImageUrl="url(../assets/images/furn_2.jpg)"
                initial={{x: '-200%'}}
                whileInView={{
                    x: '100%',
                    transition: {
                        duration: 2
                    }
                }}
                ></LatestReleaseSquare>
            </div>
            <div className='bg-pink-400 w-full flex flex-row'>
                <LatestReleaseSquare
                backgroundImageUrl="url(../assets/images/furn_3.jpg)"
                initial={{x: '-100%'}}
                whileInView={{
                    x: '100%',
                    transition: {
                        duration: 2
                    }
                }}
                ></LatestReleaseSquare>
            </div>
            <div className='bg-pink-400 w-full flex flex-row'>
                <LatestReleaseSquare
                backgroundImageUrl="url(../assets/images/furn_4.jpg)"
                initial={{x: '-100%'}}
                whileInView={{
                    x: '200%',
                    transition: {
                        duration: 2
                    }
                }}
                ></LatestReleaseSquare>
            </div>
        </div>
  );
}

export default Content2;
