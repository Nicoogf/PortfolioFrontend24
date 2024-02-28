import React from 'react';


const Technologies = ( props ) => {
 
  return (
    <div className="flex flex-row items-center gap-x-1 text-gray-400 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-200 hover:border-gray-200 hover:text-gray-900">
        <props.icon />
        <h6> {props.name} </h6>
    </div>
  )
}

export default Technologies ;