import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex p-3 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x:-500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration: 1.5,
        }}
        >
        
            {/* Social Icons */}
            <SocialIcon 
            url='https://www.linkedin.com/in/akhmadkholmurodov' 
            fgColor='gray'
            bgColor='transparent'
           />
            <SocialIcon 
            url='https://instagram.com/joseehyuk' 
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://github.com/AkhmadKholmurodov'
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon 
            url='https://telegram.org/AkhmadKholmurodov' 
            fgColor='gray'
            bgColor='transparent'
            />
        </motion.div> 

        
        <Link href="#contact">
            <motion.div
            initial={{
                x:500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1.5,
            }}
            className=' flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
                className='cursor-pointer'
                network='email' 
                fgColor='gray'
                bgColor='transparent'
                />
                <p className='uppercase hidden hover:text-white md:inline-flex text-sm text-gray-400'> Mail Me</p>
            </motion.div>
        </Link>

        
    </header>
  )
}