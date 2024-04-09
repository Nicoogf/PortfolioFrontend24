import Image from 'next/image' ;
import React from 'react' ;

const Proyect = ( props ) => {
  return (
    <a className="flex flex-row gap-x-2 items-center cursor-pointer hover:py-4 transition-all duration-500
                              sm:gap-x-4 hover:bg-gray-600/20 rounded-xl categories" href='#'>

                <Image crossOrigin="anonymous" 
                       width={100} 
                       height={100} 
                       alt={props.proyect} 
                       src={props.img} 
                       className="aspect-square object-cover w-16 h-16 rounded-full ml-2
                                  sm:w-20 sm:h-20"
                />

                <div>
                  <h4 className="text-[10px] text-gray-400
                                sm:text-[12px]">
                    { props.date }
                  </h4>

                  <h3 className="text-sm font-semibold text-gray-100 mb-1
                                sm:text-base">
                    {props.proyect}
                  </h3>

                  <h6 className="text-[10px] text-gray-400
                                sm:text-sm">
                    {props.desc}
                  </h6>

                </div>
              </a>
  )
}

export default Proyect