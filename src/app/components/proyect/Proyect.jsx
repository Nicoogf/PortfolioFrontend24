import Image from 'next/image' ;
import React from 'react' ;
import { useSelector  } from "react-redux" ;

const Proyect = ( props ) => {  

  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme  

  return (
    <a className={` ${ isLight ? "bg-transparent border-2 border-gray-600" : " border-2 border-transparent bg-[#404040]/30" } flex flex-row gap-x-2 py-3 items-center cursor-pointer hover:py-4 transition-all duration-500
                              sm:gap-x-4 hover:bg-gray-600/20 rounded-xl categories shadow-md   w-[92%] mx-auto`} href='#'>

                <Image crossOrigin="anonymous" 
                       width={100} 
                       height={100} 
                       alt={props.proyect} 
                       src={props.img} 
                       className="aspect-square object-cover w-16 h-16 rounded-full ml-2
                                  sm:w-20 sm:h-20"
                />

                <div>
                  <h4 className={`${ isLight ? "text-gray-800" : "text-gray-400" } 
                                text-[10px] 
                                sm:text-[12px]`}>
                    { props.date }
                  </h4>

                  <h3 className={`${ isLight ? "text-gray-900" : "text-gray-100" } 
                                text-sm font-semibold  mb-1
                                sm:text-base`}>
                    {props.proyect}
                  </h3>

                  <h6 className={` ${ isLight ? "text-gray-800" : "text-gray-400" } 
                                text-[10px] 
                                sm:text-sm`}>
                    {props.desc}
                  </h6>

                </div>
              </a>
  )
}

export default Proyect