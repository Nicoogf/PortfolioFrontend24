import Image from 'next/image'
import React from 'react'

const Experience = ( props ) => {
  return (
    <article className="flex flex-row items-center gap-x-4 ">
      
    <Image crossOrigin="anonymous" 
           src={props.img} 
           className="w-16 h-16 rounded-full border-4 border-gray-700" 
           alt={props.name} 
           width={100} 
           height={100} 
    />

    <div>               
      <h3 className="font-bold text-sm sm:text-md text-gray-200 mb-[1px]">{props.name} </h3>
      <h5 className="text-gray-400 text-xs sm:text-sm">{props.rol}</h5>
      <h6 className="text-xs sm:text-sm text-gray-400"> {props.date} </h6>
    </div>
  </article>
  )
}

export default Experience