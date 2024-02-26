import Image from 'next/image' ;
import React from 'react' ;

const Proyect = ( props ) => {
  return (
    <div className="flex flex-row gap-x-2 items-center cursor-pointer
                              sm:gap-x-4">

                <Image crossOrigin="anonymous" width={100} height={100} alt ={props.proyect} src={props.img} className="aspect-square object-cover w-20 h-20 rounded-full
                                                sm:w-24 sm:h-24" />

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
              </div>
  )
}

export default Proyect