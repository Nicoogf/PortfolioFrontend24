import React from 'react';
import { useSelector  } from "react-redux" ;



const Technologies = ( props ) => {

  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme


 
  return (
    <div className={`  ${ isLight ? "border-gray-950 text-gray-800 hover:bg-lime-400/90 " : "border-gray-300 hover:bg-gray-300/90 text-gray-200 hover:text-gray-800" } group border flex flex-row items-center gap-x-1  py-1 px-3 rounded-lg cursor-pointer  transition-colors duration-200  `}>
        <props.icon className=""/>
        <h6 className="">
           {props.name} 
        </h6>
    </div>
  )
}

export default Technologies ;