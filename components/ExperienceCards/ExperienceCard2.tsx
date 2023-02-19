import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const images = [
    {
        title: 'img1',
        src:'https://lh3.googleusercontent.com/hhbNA8lEMaQ5YNR9LL5RlQG5PRLE8rs0Q9vW029TTPWgj2jR03rIADpWa-8IgVuXDtjh9AqCiA9G5odYvSqIETH90VKnUubWMsc5HVhGeLUJT2H22Tz63zOrs_aNujFYVgRLX4tFmGC4eZSop-3zsp0xqUDESVN_HS_WOeGPOB0i2obFk4uKfITXXKf9dnUUp97hiql6i1Y1Tezyr563STNoBUPEGdodisQm_nPiHZtUGcNxUrc5iEsVh9LghQP_O_ajPmB_IzzHP1dfjWoupfruWG81G_yIjQMuCJ3ykIYdapXuQfF_MZQyaIZMpf4Qj_kqJp15QA_4MRAK2m-TVBggzlv6bID5QiSmfipccojSBO-UIZ4PiFn4i3Vy1lkb8gfzKoARN4zU0Owh30JQzPrroHgr6tIbMsHcNK3w_E8DA1DIr1Mt8S6WUlF5YV8JMY4_EiERXZ2dEo0veRn1BgXilpSe69m9cXYab0Zt3iP9cYnmPfuBCO82pe384OJoU1aDfyqtPnein_MK8JtedYSrLEbXqDr_Nj6BeQcJBS5h-1pbwtPkiWtM1isuyOQkvLv-uG1Kmnv_-nigdzd-nAakwYUQ_GZRm3MgKXbdQM24qc80WRKndeciKxA9BOhewb1BQurOtX9ZK4BLq1Z5EaPNUSnIYAaxeHMr7BQMcsO9qDGWZXUOfLyDm1Tzndd8zu1H2lDhi7F7G_B1biq_-JyaEVUYxwOygfzZMpCsoCm_FUhV86OkxNcKGFEQKh3xBbT6-5aKng9Hl3RtWQdlkFmeOUaTIOJxPeW8dL8Ve1Df0CjZB6VGSV96BkhCbBtmCC1wRJo2vZc18AdHNIeKKe8YDoSWjPYS_kvX25GxKeSwyQAK0FAOgwFmmG3pWzpaYxa3RlngluGoDFiLiVonuKh9x__HZPvu4eJPBJ57hqrd=w2038-h1530-no?authuser=0'},

]
const miniIcons = [
    {src: "https://www.freeiconspng.com/thumbs/repair-workshop-icon-png/hardware-icon-9.png"},
    {src: "https://cdn4.iconfinder.com/data/icons/bitcoin-mining-and-more/405/Asset_1240-512.png"},
    {src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png"},

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
            <h4 className='text-4xl font-light'>ZikBang company of Uzbekistan </h4>
            <p className=' font-bold text-2xl mt-1'>Computer, Data Fixer</p>
            <div className=' flex space-x-2 my-2'>

                {miniIcons.map((image, index) => (
                    <img key={index} src={image.src} 
                    className=' h-10 w-10 rounded-full' />
                    
                ))}

                
            </div>
            <p className=' uppercase py-5 text-gray-300'> 2020/04... - 2021/02</p>

            <ul className=' list-disc space-y-1 text-lg'>
                <li>Most of our company deals with sale and rent of houses in Tashkent</li>
                <li>We mined bitcoin and ethereum at this company</li>
                <li>I was installer and fixer competers</li>
                

            </ul>
        </div>
    </article>
  )
}