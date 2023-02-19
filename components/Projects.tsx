import React from 'react'
import {motion} from 'framer-motion'
import ProjectCards1 from './ProjectCards/ProjectCards1'
import ProjectCards2 from './ProjectCards/ProjectCards2'
import ProjectCards3 from './ProjectCards/ProjectCards3'




export default function Projects() {
    // const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden  flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className=' w-full  flex space-x-5 overflow-x-scroll p-12 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
            <ProjectCards1/>
            <ProjectCards2/>
            <ProjectCards3/>
        </div>


    </motion.div>
  )
}