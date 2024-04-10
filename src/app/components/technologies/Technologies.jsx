import React from 'react';
import {useSelector , useDispatch } from "react-redux" ;



const Technologies = ( props ) => {

  const state = useSelector((state) =>  state.nightMode)
  const estadoDeMenu = state.menuVisible

  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme

  console.log( isLight )

  const dispatch = useDispatch()
 
  return (
    <div className={` border ${ isLight ? "border-gray-800 " : "border-gray-300" }  flex flex-row items-center gap-x-1  py-1 px-3 rounded-lg cursor-pointer  transition-colors duration-200  `}>
        <props.icon className={` ${ isLight ? "text-gray-800 " : "border-gray-300" } `}/>
        <h6 className={`${isLight ? "text-gray-800" : "text-gray-400"}`}>
           {props.name} 
        </h6>
    </div>
  )
}

export default Technologies ;