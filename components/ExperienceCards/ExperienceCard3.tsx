import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const images = [
    {
        src:'https://lh3.googleusercontent.com/HCpeEikM20SiIYVP3-AYOGMDXSj2XKzIT7xD6qPY9l6_oGYJOqRkcW60MBEYCV3tiNReNC3bGB68GKK49AvTRNdYAxp8nxaSLNwdgEHzj14U4ATeakZT0z7R-WZSHIiUgJeBIYBbetAgu8eKH03D_m4rKfuh4wFrC98rC4xU6LOjq0tJ1nBWfGPRmW3HRrPDrYmxxpQf76pJEHtX1mybuiB_6lI3_iG9RRSDmFp14pU20fw9J4a6xgOaGzziLpBA4G_a5grCAWSD80wgKc65P8IhaYPVclPKT66WACabfw-pXhVKjIGha4w94cwhEq8HC2TSzpMX_14PtrxBzLo2I9XZRGimMsti2lWzc818vzWnEMKDxqi9oC5CKeHK-JbbFj27qDAe9d4BMHT25Kd4wFJgR2AJ2vc6YsZwGfBwcf9bjQe8AKjFZzeHWaBGrZl1l-tQtWPPmS2DxCsLrOSh5DK6WTTAg4mKJm6JjqRUreUMADCNYQYwObBN55xEUAi--eIX2-5jwL9s1sqnMj0XxBvJvIvgfUlgAH_Lw88rNXE8h9A7BPvJED5VDQOeE2Qqpwn6ynNrRWuzrMi2z3gd0qgf5oxyLAcNKZVTS8ezXsJlcTgDTS3l5f6l9LwYW6Y0IXhuho9F9nD4JsSCL-AvxURRxPjirLnv6r8mYj4BNJ9Uj3KB4fI--WNczs7It4Bo6caU8wdelzjuNJ1bAcJhTppcNkJ7OtitqtDF6N_kJS3iuHhwHZb1OYGqKXCh6SW4XOVsVYQoA_C_mkNhiIKNIpOWGdNzKOtGTZwAFCgcUnER_1LyVLpC_R7eK0qkd0h6xqhiCE0fdt_5XJYMqCeRSqRBY-ZKsCVgMHqyLjqPpO5d7_BAtyVIXZm9JOPDEMKeG2V1GP4ACmEA4MC6bt16PODHMpDGxIqMC6-26FTH-KeA=s1528-no?authuser=0'}

]
const miniIcons = [
    {src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png"},
    {src: "https://cdn-icons-png.flaticon.com/512/5305/5305286.png"},
    {src: "https://cdn-icons-png.flaticon.com/512/2799/2799363.png"},

]


export default function ExperienceCard({}: Props) {
  return (
    <article className=' h-[600px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>


            {images.map((card, index) => (
                <div key={index}>
                    <motion.img
                        initial={{
                            y: -100,
                            opacity: 0,
                        }}
                        transition={{duration: 1.2}}
                        whileInView={{opacity: 1, y:0}}
                        viewport={{once: true}}
                        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                         src={card.src} 
                    />
                </div>
            ))}
       

        <div className=' px-0 md:px-10 overflow-y-scroll'>
            <h4 className='text-4xl font-light'>Manager of DiscovevryGroup</h4>
            <p className=' font-bold text-2xl mt-1'>Consulting Team</p>
            <div className=' flex space-x-2 my-2'>
                
                {miniIcons.map((image, index) => (
                    <img key={index} src={image.src} 
                    className=' h-10 w-10 rounded-full' />
                    
                ))}

            </div>
            <p className=' uppercase py-5 text-gray-300'> 2019/10 - 2020/03</p>

            <ul className=' list-disc space-y-1 text-lg'>
                <li>We helped students register for their dream university</li>

            </ul>
        </div>
    </article>
  )
}