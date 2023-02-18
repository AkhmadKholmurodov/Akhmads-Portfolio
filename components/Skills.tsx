import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
     className=' h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className=' absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        {/* <h3 className=' absolute top-16 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3> */}
        <div className='grid grid-cols-4 gap-5'>
            <Skill/>
        </div>
    
    </motion.div>
  )
}