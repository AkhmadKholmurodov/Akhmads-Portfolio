// import { motion } from 'framer-motion'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: [
            "Hi My name is Akhmad",
            "Which is a Developer, Designer, Creator", 
            "I love Coffee as a Programmer "
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className=' h-screen flex flex-col  items-center justify-center text-center overflow-hidden '>
        <BackgroundCircle />
        <img 
        className='relative rounded-t-full top-12 h-[210px] w-[210px] mx-auto object-cover z-1'
        src="https://lh3.googleusercontent.com/3fZTreNf8Xmr8FN4Hi-qZEECasqoxver77bOlRK_MYPgu0nSxFVwGcJDLqrAGnVMMsuLuwvXAOb-lb-TMjhnK1gCA-U8uy7PeccztkDtmw7Pdf6WoYmmSZTg1eeYmVjIYH0h0BVr_4DYkorLoyFqXamXSdpYLMwQFbI2-pUvnX89LE5ib0w9oWxG8AlV3Y4rq-XBptlBPcEmxnUv1Cv2zUNqX4dTfjenav4_yQUF5b6EbzB_hzsUyp4mtKBPQJT9PFnDKGKkjCmNiKEcMwYvjJ_Vc5XyPLcbCBngFVZU7-81mp9_Ups9WUf7zj9yO5dykNI95Wo2S3by1uOpIF6ftOWba1GzDFLxKXJpDxmUe46MjZs3vc6xrnPbNFsSyFXonI0PnVm5BOSn6kaOX5K7RlnmMn1X8d2vXBN2LCiauAO_D7m9yDJzTrYp_UugZevr2Yn9xy-P1D07PpVSM0cjRDvQSUZQ-l2Rc_-PqJlhzJF0eSQC10-33LM-rukKNYyoIxR-JIbaan2hXqZJatJPfyo1qaMyk5X_X3wZjdPWwfIv1zEtPAWvD_dNMlnTctpCE1svW7xDCzaLUPxR6gnksUXcdqgExfGyT9LO6pCWh6to96mwZq34K-gIzd5b-9Gn_69OeUrEAdfmAfv_8AuK0bF_FH83Htu0EwGhsIVZ2C1fmVHjiHQ0GteAhySmi3OOrmfwqHCE6EjsyB1axg6i7OFGGOu0yc_lVENrj6lJUpvHXfRjk9uG2IwT2uI6rKKjbAc2mtIcLt7D9G_J8WtDVFIvhptSdgTFwYoA6beBguqhisT8JzfHN9sGBM23Xe4ye-W-2-DTw9r4dymhY88tgWS8Kf35hrs1vYAvJHXzFF4yiANa5hgnCE2vkxuJ6AohOV_lp70-tY1ZtNAHp-qwKfQ_NJtIa6SL_NGVeyJNudzo=w1232-h1642-no?authuser=0" alt="myImg" 
        />
        <div  className='z-20 relative top-24'>
            <h2 className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className=' text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>

            <div className=' pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skiills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}