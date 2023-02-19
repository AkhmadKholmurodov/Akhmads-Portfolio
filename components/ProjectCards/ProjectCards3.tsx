import React from 'react'
import {motion} from 'framer-motion'


type Props = {}

export default function ProjectCards1({}: Props) {
  return (
    <article className=' h-[600px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>

            
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 1.2}}
                    viewport={{once: true}}
                    className=' max-h-72'
                    src="https://lh3.googleusercontent.com/Pc0Tmvy8PrTh7h6nH7jzJdOqxHnDDj2RxkZcgg5T0HTGJ-gIQ8AW7IJD6t-sFOlMmPBkDJ-ScjsogWdwMY2fNZe_V7JdNNAQ67KyX89_-UZhSGeuX7GC3k9Ah95sGLHTmdTc2e-M_nHz_aIizDp_MAhIIi-IafIBnYmSHfauL31UStXgCON5m6dHBi-oe90PnYqlz5VBd2SGCq43FiagWGQidxBxCEBKfQdGN9h53wNADJmsJ2qOoxwTk8WermXUp0Mpx-nTpgjzdO4VMsLKOM7yFtzy7QalRZdkiwyla_Fn1XjrMujGNFD2jB8eX0vW5g8jpv5hedVZBJhrpw7bi5ufqJdypLoT7ZdK69ojdKOWGPE6aaofQS59O-OH_ldKiuXrrBaqiEkWSi0N2tMKzR2m73dTDCjJUkUBIE6uBHp8b40W28k2CzggFeZeq60z_7aywYd7-ZgySlKocVmtjHQ4FNnNB8ZdKuTnwZ0AbNSRaFIiTAXf7yH9aLsXC4VG82_GCrZlphLbW8tMR8rQL21yE7ZHH_OSFrGXFdhl9jdvyzzszURFpXqtWBID7ZxM0Ix1rLSXM0SXqmwQknGTZxtC6Xs05zc-aTm3GV5LnXH7um3LdKuYa4sreY9eKqWl09enubO6sXElG2jb_7bnWYlT0OPaYLxcjziNlqELWgc8f6BZIOkGJlTal8YHtf9Yd0GbTmyDhUVeo5oRL4Zivyo4laq8TgGUhMv-aVVVGrI2AtBfHC9sqFuM2TSw8IaL2KhtnD67EFjfVZzbHTRbwneCteQ1xdEElJbIAG_8Zu1si4WeTapP6tOiO0bqvZTiYUnV9nbBjlIIJgayp1mz3cDcYs0Xvx_b4J_7hh3KY5894AAKspEj7e2jUY66HCrYuCrN_SbdzmH97oEUrdQXVv5oIWotlIOepTJrPKhXnlmy=w2880-h1638-no?authuser=0" alt="" />
                
                    <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                        <a href="https://github.com/AkhmadKholmurodov/netflix">
                            <h4 className=' text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'> Netflix app clone </span>{' '} 
                            </h4>
                        </a>
                        
                    </div>
                    <p className=' text-lg text-center md:text-left'>
                         When I was Learning ReactJS first time. <br /> I made Some Projects like this and now I found it necessary to release it <br /> this app made very simple but comfortable to using and finding any type of movies. I used to ReactJS, Firebase codes
                    </p>
        </article>
            
  )
}