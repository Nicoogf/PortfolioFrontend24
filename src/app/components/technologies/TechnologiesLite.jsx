import React from 'react'
import {useSelector ,  } from "react-redux" ;



const TechnologiesLite = ( props ) => {
  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme
  return (
    <div className={` ${ isLight ? "border-gray-950 text-gray-800" : " border-[#404040] text-gray-400 hover:border-gray-200 hover:bg-gray-200 hover:text-gray-900"} flex flex-row items-center gap-x-1 border   py-1 px-3 rounded-lg cursor-pointer  transition-all duration-300`}>
        <props.icon />
        <h6 className="text-xs"> {props.name} </h6>
    </div>
  )
}

export default TechnologiesLite