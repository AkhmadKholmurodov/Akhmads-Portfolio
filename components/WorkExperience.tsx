import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCards/ExperienceCard'
import ExperienceCard2 from './ExperienceCards/ExperienceCard2'
import ExperienceCard3 from './ExperienceCards/ExperienceCard3'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div className=' h-screen flex relative overflow-hidden  flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-8 uppercase tracking-[20px] text-gray-500 text-xl'>
            Experience
        </h3>
        <div className=' w-full  flex space-x-5 overflow-x-scroll p-12 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
            <ExperienceCard/>
            <ExperienceCard2/>
            <ExperienceCard3/>
        </div>

    </motion.div>
  )
}

export default WorkExperience