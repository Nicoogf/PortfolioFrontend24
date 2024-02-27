import React from 'react'
import { IoDownloadOutline } from 'react-icons/io5'
import Link from 'next/link'
import Technologies from '@/app/components/technologies/tecnologias.js' ;
import TechnologiesLite from '@/app/components/technologies/TechnologiesLite'
import Estudios from "@/app/components/studies/estudios.js"
import Studies from "@/app/components/studies/Studies"

const GridThree = () => {
  return (
    <article className="hidden rounded-md my-2 mx-1 bg-[#212121] overflow-hidden
                            xl:flex xl:col-span-3 flex-col">
                              
          <div className="w-[85%] mx-auto mt-4 border-b-2 border-[#404040] pb-4">
            <h3 className="text-lg font-bold mb-2 text-gray-200 text-center"> Curriculum </h3>
            <p className="text-gray-400 text-xs mb-4 text-center"> A continuacion dejare el boton de descarga para obtener el curriculum actualizado en formato PDF</p>
            <Link href={""} className="" > 
               
                <div className="flex flex-row items-center justify-center bg-[#404040] rounded-lg w-[50%] mx-auto gap-x-2">
                <IoDownloadOutline className="text-gray-300" crossOrigin="anonymous"/>
                <h6 className=" text-gray-300 py-2 text-xs font-semibold"> Download </h6> 
                </div>
             
            </Link>
          </div>

          <div className="w-[85%] mx-auto mt-4 border-b-2 border-[#404040] pb-4">

            <h3 className="text-gray-200 font-semibold text-center">Official certifications</h3>


            {Estudios.map( (estudio , index ) => (
                  <Studies key={index} sede={estudio.sede}  date={estudio.date} title={estudio.title} img={estudio.img} />
            ))}     



          </div>

          <div className="mt-4 pb-8 w-[90%] mx-auto scrolling">
            <h3 className="mt-3 text-gray-200 font-semibold mb-4 text-center"> Skills -Tech Stack </h3>

            <div className="flex flex-wrap items-center justify-center w-[90%] mx-auto gap-2">  

            {Technologies.map( (tecnologia , index ) => (
                  <TechnologiesLite key={index}  name={tecnologia.name} icon={tecnologia.icon}/>
              ))}     

            </div>
          </div>
    </article>
  )
}

export default GridThree