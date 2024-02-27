import React from 'react'
import { FaCss3Alt, FaGithub, FaHtml5, FaNode, FaPython, FaReact, FaWordpressSimple } from 'react-icons/fa'
import { IoDownloadOutline, IoLogoJavascript } from 'react-icons/io5'
import { SiExpress, SiMongodb, SiMysql, SiReactquery, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs, TbBrandVite } from 'react-icons/tb'

import freecodeCamp from "../../../../public/freecode.jpg"
import Link from 'next/link'
import Image from 'next/image'

import Technologies from '@/app/components/technologies/tecnologias.js' ;
import TechnologiesComponent from "@/app/components/technologies/technologies"
import TechnologiesLite from '@/app/components/technologies/TechnologiesLite'

const GridThree = () => {
  return (
    <article className="hidden rounded-md my-2 mx-1 bg-[#212121] overflow-hidden
                            xl:flex xl:col-span-3 flex-col">
                              
          <div className="w-[85%] mx-auto mt-4 border-b-2 border-[#404040] pb-4">
            <h3 className="text-lg font-bold mb-2 text-gray-200 text-center"> Curriculum </h3>
            <p className="text-gray-400 text-xs mb-4 text-center"> A continuacion dejare el boton de descarga para obtener el curriculum actualizado en formato PDF</p>
            <Link href={""} className=""> 
               
                <div className="flex flex-row items-center justify-center bg-[#404040] rounded-lg w-[50%] mx-auto gap-x-2">
                <IoDownloadOutline className="text-gray-300"/>
                <h6 className=" text-gray-300 py-2 text-xs font-semibold"> Download </h6> 
                </div>
             
            </Link>
          </div>

          <div className="w-[85%] mx-auto mt-4 border-b-2 border-[#404040] pb-4">
            <h3 className="text-gray-200 font-semibold text-center">Official certifications</h3>

            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full" alt={""} />
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm"> Digital House <span className="text-gray-300 text-xs"> (2024) </span></h4>
                <h5 className="text-gray-400 text-xs"> Especializacion Frontend </h5>
              </div>
            </section>
 
            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full" alt={""}/>
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm"> FreeCodeCamp <span className="text-gray-300 text-xs"> (2023) </span></h4>
                <h5 className="text-gray-400 text-xs"> JavaScript Algorithms and Data Structures </h5>
              </div>
            </section>

            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full" alt={""}/>
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm"> Universidad Tecnologica Nacional <span className="text-gray-300 text-xs"> (2023) </span></h4>
                <h5 className="text-gray-400 text-xs"> Desarrollo web orientado al Backend </h5>
              </div>
            </section>

            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full" alt={""}/>
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm">  Digital House 
                <span className="text-gray-400 text-xs"> (2022)  </span></h4>
                <h5 className="text-gray-400 text-xs"> Desarrollo Web Full Stack </h5>
              </div>
            </section>

            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full" alt={""}/>
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm"> Intituto de Formacion 7
                <span className="text-gray-400 text-xs"> (2018)  </span></h4>
                <h5 className="text-gray-400 text-xs"> Administracion de Empresas </h5>
              </div>
            </section>


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