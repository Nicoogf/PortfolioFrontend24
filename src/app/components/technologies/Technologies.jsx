import React from 'react';


const Technologies = ( props ) => {
 
  return (
    <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
        <props.icon className="text-gray-400" />
        <h6 className="text-gray-400"> {props.name} </h6>
    </div>
  )
}

export default Technologies ;