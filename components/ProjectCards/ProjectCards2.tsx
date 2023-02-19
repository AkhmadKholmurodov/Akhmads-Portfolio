import React from 'react'
import {motion} from 'framer-motion'



export default function ProjectCards1() {
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
                    src="https://lh3.googleusercontent.com/ZfsEiBdQOKyDcQ2Vu28322ZFnLKsqTCL3quojkcYb7CYDNh-ju4P0idUIU0mTsGt0HTrUJwtq8VWoSRKndEbt6feRewESO9ozJRM2uMpd3Va3G9Wte5UbO5nreFm3Pi_KPqdKdJjyGcXtLCSxfksjFj7C139Du5rET_Ba5yEd8mOJsyv3MIEaBwJpIHKD9eZvmEEzJEfbYyXawP0n8XFryd-JbjdJCjpoyozriIVwQTBLK6Cu6CruoSpqx30i9pzpKdhoXdgXcjtsYYJbl9VJtgO-N5s8eJeaRr-c5uq5_8AyFBp7BOIKnjq5PbwedxV0O9UyR01_ghN67KtJLVjiEEjW93qR0WUdG-fKASLfQj7DSNTzKzxvYckayA6_7QZScLvzuG4oHl6pxDrynUw1uJtYi_qTrKJcWu_5sIVZl1BsFCSdJ8YlXMn3Z23BcYjaIOd6F87N3ZRMNqyG8cHFm4o4v9H8T0tzTqpSrkIFC3My4C6XNTHTDR5Q3RuAYLkBFqLmLI5CkDyQiIMvORNA5ZYpswag8V8A6Tl4GngyMr5cmYNQGJJdO49ktfS3dg2CxQGmZA47oinq9hzGTooHQdET2QjCwozgwqPGnebfFsKhmS0wo5mBftpTfOPb1MWmvJj211wwX9lBslUtTEOLTh-D2l0ofwc9MY3MEk2txvYnK9HddnTot68zaLAnYftpuAWmJZAa6ROQ7VGaN-G_nJTRI2RpFmCiihRZw-23qYKeuAy0ma2p2ey8SISN6URI2SV-i-k0F2NgdPrpIDnjJeY8o3KfB_uCvTtOc6P_2L1ocT46KPHQlMo2xcMJjlYH0tmIf2f4l7wWTETRqBy9o_LDwWb0d7IVmgJEqqj7tB8apaI3D10nosQ3b3MLP7Vu_d_E8jFVNvTtyIOQBKN6vt7ZO5a7oAKghGTzdzV8t4T=w2874-h1522-no?authuser=0" alt="" />
                
                    <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className=' text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'> Car remote </span>{' '} 
                        </h4>
                        
                    </div>
                    <p className=' text-lg text-center md:text-left'>
                        This is my first time of making Team Project, With my brothers of Cloud Computing Team. <br /> With this app, we can remote any cars.
                        While Coding, we used Reactjs, MUI liblary, <br /> NodedJs and some other libraries
                    </p>
                </article>

  )
}