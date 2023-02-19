import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft ?: boolean;
}

const Urls = [
    {src: "https://www.svgrepo.com/show/303251/mysql-logo.svg"},
    {src: "https://cdn.iconscout.com/icon/free/png-256/graphql-3521468-2944912.png"},
    {src: "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png'},
    {src: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'},
    {src: 'https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png'},
    {src: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'},
    {src: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"},
    {src: "https://cdn-icons-png.flaticon.com/512/919/919832.png"},
    {src: "https://sllearnengine.blob.core.windows.net/material-images/087a9b79a3094d4382bcdbfdb6718734-JS_1.png"},
    {src: 'https://cdn-icons-png.flaticon.com/512/919/919827.png'},
    {src: 'https://cdn-icons-png.flaticon.com/512/919/919826.png'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'},
    {src: 'https://img.icons8.com/color/512/mongodb.png'},
    {src: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png'},
    {src: 'https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png'},
    {src: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/mern-stack-5363121-4488910.png'},
    {src: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png'},
    {src: 'https://v4.material-ui.com/static/logo.png'}


]

export default function Skill({directionLeft}: Props) {
  return (
    <div className=' group relative m-20 p-0 left-full flex cursor-pointer w-screen overflow-hidden'>
        <div className='grid grid-cols-5 gap-5'>
        
        {Urls.map((image, index) => (
                    <motion.img key={index} src={image.src} 
                    initial={{
                        x: directionLeft? -200 :200,
                    }}
                    transition={{duration: 1}}
                    whileInView={ {opacity:1, x:0}}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 filter  transition duration-300 ease-in-out'
                    />
                    
                ))}
                </div>

        {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-20 md:w-20 xl:h-24 xl:w-24 rounded-full z-0' >
            <div className=' flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div> */}
    </div>
  )
}