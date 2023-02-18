import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1,}}
        transition={{duration:1.5}}
        className=' h-screen flex relative text-center flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-6 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{opacity: 1, x:0}}
        viewport={{once:true}}
        src="https://lh3.googleusercontent.com/IIO99SOIYlmzsjpdTBWhjv5eHpd-xJwifTeAauCHYOReaAOUYsDKno6YoS8h_OSGNECUV2Vb8Gf1dFwjk1k9Uh79gTl3D1OT2atkprVWGc72JZg58IGhfyPZlNly06Xee3ColI2d7oldd4Q-rI9qDia6MWiu7yx7c8MYOGj7fQyttWc5B7CTOZakCFmCG7DAgS86pCsBKfIDd04zAEnctnd5ObnzwIOShkqEEnv6uNrY4M9OXGBdXIi72i66FNJlfUNcpeWPxKR7nBTFhJexflYYkJS_LiQ_sWwnlDLSBOwVfbaqWRR6md6ltSSrjQ3WXFvxrh7pajtzYSSH-WxLBuX1rRSypNwIDDebLvNr3N4e-_vUQ59V9FUnTq-NfMXpzV6qZPCbbp4AvcAcfY5fCZ_e0aX8xYnzB7it4xWc64cBBjntGyPOfZdYS_p2tM_F8uTDBpOEy6N7RsN2ZGqeQHuM0issBnez51nV2JT_D2m0vFyUb2TUs_4_lFVsGb9ulnhBs4oht5W1bq75ilpP1JOuuheWM2ynjBp_xuMtqtTQIM-Lxq_t1Fl9VCKuUa2nMkUCiuZ-rd-XOcAzuv5y13L_ynf_56yP7oPtC77PLyN6TIgMrYFbo1OjjAJGI_Wh5MEFPdKZuoK7vDCsXS9YXjn4sfFxQXr6djuG1PoOdqhyelow_zFkNteNvgwuNCC-IaOvUBfIMeO9BTI4hhhp1QgfiQCQY-EW_hIMgXzxruOYQxaMS8MHa8SOiHu3rTgPAXMX4luYcj4mBB47St3J68KUSPKhOClUqnuMDWI9p83UUJJPriveGsD82T47ogmysvp_NjpiNg18XoV5SIWIHnffZtymuzkBQ5fIHWPaJ0FCQzqvPQ_8LeAMegUrkQ5qwxngTqYvMd7jXzwJSAZn-tCHklD460RZi0KZcp2L5brI=w1718-h1642-no?authuser=0"
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-t-3xl md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        
        <div className=' space-y-10 px-0 md:px-10'>
            <h4 className=' text-4xl justify-center text-center font-semibold'>Here is a <span className=' underline decoration-[#F7AB0A]'>little</span> backgraund</h4>
            <p className=' text-sm'>I was born in the year 2000 and youngest in a family of six. I grew up in a vibrant community and had a happy childhood, filled with love and support from my parents and siblings.
                As I grew older, my love for technology led my to pursue a career in software engineering. I excelled in my studies and quickly landed a job at a reputable tech firm.
                Outside of work, I am an avid sports enthusiast. I love playing football and pingpong, and often spend his weekends on the field or in the local pingpong club. I also enjoy trying new foods , with a particular love for traditional cuisine and coffee.
                Despite his busy schedule, I value the importance of social connections and has many close friends. I enjoy spending time with them, exploring new places, and sharing my love for sports and food with those around me.</p>
        </div>
    </motion.div>
  )
}