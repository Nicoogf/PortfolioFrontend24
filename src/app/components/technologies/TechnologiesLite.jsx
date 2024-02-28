import React from 'react'

const TechnologiesLite = ( props ) => {
  return (
    <div className="flex flex-row items-center gap-x-1 border border-[#404040] text-gray-400 py-1 px-3 rounded-lg cursor-pointer hover:border-gray-200 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300">
        <props.icon />
        <h6 className="text-xs"> {props.name} </h6>
    </div>
  )
}

export default TechnologiesLite