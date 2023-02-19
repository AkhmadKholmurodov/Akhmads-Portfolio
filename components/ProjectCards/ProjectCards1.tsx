import React from 'react'
import {motion} from 'framer-motion'




export default function ProjectCards1() {
  return (
    <article className=' h-[600px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>

        
                    <a href="https://github.com/AkhmadKholmurodov/StarBucks-Coffee" className=' cursor-pointer'>
                        <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        whileInView={{opacity: 1, y:0}}
                        transition={{duration: 1.2}}
                        viewport={{once: true}}
                        className=' max-h-72'
                        src="https://lh3.googleusercontent.com/qTqxee5myXsX7a1n8hin8rgpjYkux1RyHI4hSJziAn5bzbCJ1YaCh45ResXceJV1UfKx_tE9vVdXNXu22ZWe_W4jUQKOijOjuWHj2p9a_bc1EaNYhZmPxCjpAyQ3DF3HeF_Ez4IpuEPSYc3CB4-7LyVtkihrghZLX2VFMN7VoVBYL1xeR1UePLRkx9-RcaWNAE_Z_rmvHDd28_7XndUrJnIfIda8QslhosGoPJdMV0be9qNer_iWRPTKleXrGpCjRTezo0_YjDkz4kULk_HHUM4zGXDIp2866YhzwImuL_0NnEDCXmDfN6Y6UIkDnL0UiOkGuOsgJd8O74V41GJrT5whyOtnCZAPbIgycpDT1TBEAHZR3b4cs2y4_V5Rsde5AdTYe2Naiyx68Igtm8mwiEu3KcdoGJtL0E7hgD3phRvTyR6X_eHbUtevVE4n0o1JWsDOwCuDoihSkvJZCTW7q4oG71tdhpn9of5rsoGsXIUxg_OqP1QWqupzgBVeLSFUuEdf_ADX22uxlxt8nbZhmRqFaXbIKQJ1zUIMH9BVu-Xj8GJFu_B7sD0SNd2X5lfGDcOu6dIGUD3d80rrKaA-suBOkpPPORVTgyDf96Yjdy0L8U3ZL8imj3yerRE795GbFF1LNrBMG4YPgrRk3RDnu61xfD_dwiKKaixQKZDSraU0pgpKeUaG16BQ_49jR-KdMj7V9gnpoDWEhm4Vx75_i6wX0aKSeUuNTDIpv0caWDoSAIaawZsah44L2u_raulF2CbayU4WOQF1QaaY_U_EEsSy9Tm7zCijYlb6rM08vOdQ9jtGBfNKPTyochM_rt0sPHaMDCWsWpBf2rcaJ1-Hy1Cn9Tp1vnzH6cBEqYSDm2tINU1SlhyfOgAw_CAfMWI63yDutOHT8PRMMKuOzWYvGWsjGOcpmyHS86sQIh4-WS-5=w2874-h1642-no?authuser=0" alt="" />
                    </a>
                
                    <div className=' space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className=' text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'> Starbucks </span>{' '} 
                        </h4>
                        
                    </div>
                    <p className=' text-lg text-center md:text-left'>
                        This is my really first project When I was learning Javascript <br /> this is not include many codes or any libraries too. but I think this website has very good appearance. <br />
                        I used to write only Html, Css and Javascript codes
                    </p>
                </article>

  )
}