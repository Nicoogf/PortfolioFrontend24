import Image from 'next/image'
import React from 'react'
import { useSelector } from "react-redux" ;

const Experience = ( props ) => {

  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme

  
  return (
    <article className="flex flex-row items-center gap-x-4 ">
      
    <Image crossOrigin="anonymous" 
           src={props.img} 
           className={` ${ isLight ? "border-gray-300" : "border-gray-700"} w-16 h-16 rounded-full border-4  `} 
           alt={props.name} 
           width={100} 
           height={100} 
    />

    <div>               
      <h3 className={` ${ isLight ? "text-gray-800": "text-gray-200" } font-bold text-sm sm:text-md  mb-[1px]`}>{props.name} </h3>
      <h5 className={` ${ isLight ? "text-gray-800": "text-gray-200" } text-gray-400 text-xs sm:text-sm `} >{props.rol}</h5>
      <h6 className={` ${ isLight ? "text-gray-600": "text-gray-400" } text-xs sm:text-sm `}> {props.date} </h6>
    </div>
    
  </article>
  )
}

export default Experience