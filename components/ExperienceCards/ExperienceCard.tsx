import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const images = [
    {
        title: 'img1',
        src : 'https://lh3.googleusercontent.com/PqeCJ8lKo0EI3mLifbw1Xa5QyvKhCLcadoXE81ps-8B0RM5OP0mM1J-By_Zpm5lQwanHxWvv2QIStp3lp-HEN3QfEMeygrMoQmvHqJh276hW3UXaJHfUygZbjVyosmQCKqdnuH-sWziyRpplSFra5CNnjlSWRnG5OrJaT0FlwpdrN4yTbnXqwWTYERrAu52sAQOpwCzZdRC1ti0C8fCkU6YPYAsI-Bh6S3giIE3Rbgk4KR-0qfoBcyXjpy79uxRTuHhSN__OHJnUC0xFCqjg28QpHx2g0rire6JQJ0LXLj-UIRjFj-oGtos_T7_mCq2GRUl9oM7-iL05UC9B5omuicxwl5XDIG9VFMl4_3ZbPrOZdjJNasQj0gd_df5O2v3v62ngdwfwWAwNLSPNjmWkogIwhL_h9ItqOzzNBMVhHiKmswEaWntIajRY_9cxRbER_8PTdREfBBKzcohh59qjJJMIXidWdIB6N6j2hLAP9BkJ1aEc1cj9XFhopt2rJTkRsTWYJv-sIO9O2CaajtvL0CgQndfPVV89K0gbbS521aN0bzMaW6ONL_GqW4HiBQMH7gTnPUF1y9rvbP7SHemYPZ9Wg7K494fQxho9Gmvk_E35EOlJc65_uUghBUVGQ5dRj5Hy-o0jIE-4J9EErDDLaENqfH__CUDvZ26qFV9725rVNpX0iqIm7US2G7t6__VvtneF1yIE2uLl7i5bc7yUief9AhFAbvTzlPDn9xA8UR4CUajNaARX0KAnL1tBAMzGfQ3pvczxH1winP-Y6zd_zJ3BtMm0CHIt7FoGKsDmbwCZsjpZIlYqm3dv5lKgRKNQX2IyYeqwDLGwTA7T_-uUO6mE0_bYeSayQq5nWrkSkK1_z3l_C9SbnVQGkqX_0n2vk-bKEtUBCTh-YomecSR0NfL2A55S94jVNO9wscammGwo=w1566-h1644-no?authuser=0'},

]
const miniIcons = [
    {src: "https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg"},
    {src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"},
    {src: "https://v4.material-ui.com/static/logo.png"},

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
            <h4 className='text-4xl font-light'>Team Member Cloud Computing Of Daegu U. </h4>
            <p className=' font-bold text-2xl mt-1'>Projects</p>
            <div className=' flex space-x-2 my-2'>
                {miniIcons.map((image, index) => (
                    <img key={index} src={image.src} 
                    className=' h-10 w-10 rounded-full' />
                    
                ))}
            </div>
            <p className=' uppercase py-5 text-gray-300'> 2022.06 - now</p>

            <ul className=' list-disc space-y-1 text-lg'>
                <li>We created Car Remote and it can be remote any cars <br /> which is a install our backend program </li>
            </ul>
        </div>
    </article>
  )
}