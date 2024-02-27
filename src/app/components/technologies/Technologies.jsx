import React from 'react';


const Technologies = ( props ) => {
 
  return (
    <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer hover:bg-lime-400 transition-colors duration-200 hover:border-lime-400  hover:text-lime-800">
        <props.icon className="text-gray-400 hover:text-lime-800" crossOrigin="anonymous"/>
        <h6 className="text-gray-400 hover:text-lime-800"> {props.name} </h6>
    </div>
  )
}

export default Technologies ;