import Image from 'next/image'
import React from 'react'
import { useSelector  } from "react-redux" ;

const Studies = ( props ) => {

  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme

  return (
    <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image crossOrigin="anonymous" 
                     src={props.img} 
                     className="w-12 h-12 rounded-full object-cover aspect-square" 
                     alt={""} 
                     width={100} 
                     height={100}
              />
              
              <div className="flex flex-col"> 
                <h4 className={` ${ isLight ? "text-gray-950 ": "text-gray-100"}  font-bold text-sm `}> 
                {props.sede} <span className= {` ${ isLight ? "text-gray-700 ": "text-gray-300"} text-xs `}> {props.date} </span>
                </h4>
                <h5 className= {` ${ isLight ? "text-gray-800 ": "text-gray-300"} text-xs ` }> {props.title} </h5>
              </div>
    </section>
  )
}

export default Studies