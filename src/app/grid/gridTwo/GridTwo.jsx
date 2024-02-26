import Image from 'next/image'
import React from 'react'
import { FaCss3Alt, FaGithub, FaHtml5, FaNode, FaPython, FaReact, FaWordpressSimple } from 'react-icons/fa'
import { IoCodeSlashOutline, IoLogoJavascript } from 'react-icons/io5'
import { SiExpress, SiMongodb, SiMysql, SiReactquery, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs, TbBrandVite } from 'react-icons/tb'

import telecom from "../../../../public/telecom.jpg"
import proyectos from '../../components/proyect/proyectos.js';
import Proyect from '@/app/components/proyect/Proyect'

const GridTwo = () => {
  return (
    <article className="bg-[#212121] my-2 mx-1 col-span-12 rounded-md overflow-hidden scrolling pb-4
                              md:col-span-8 
                              xl:col-span-6">

          <div className="border-b-2 border-[#404040] pb-8 w-[90%] mx-auto">
            <div className="flex flex-row items-center gap-x-8 mt-4 w-[92%] mx-auto">

              <div className="w-[20%]">
                <IoCodeSlashOutline className="text-gray-300 text-4xl mx-auto" />
              </div>

              <div>
                <h2 className="font-semibold text-gray-100 text-2xl"> Proyectos </h2>
                <h3 className="font-semibold text-gray-200 text-xl -mt-1 mb-2"> Frontend </h3>
                <h5 className="text-sm font-semibold text-gray-300"> Blog </h5>
                <h6 className="text-xs text-gray-400"> I design and code beautifully simple thins,and occasionally i write about themn</h6>
              </div>

            </div>
          </div>

          <div className="text-sm text-gray-200 flex flex-row justify-around my-6 w-[90%] mx-auto">
            <h3 className="font-semibold cursor-pointer">Wordpress Jobs</h3>
            <h3 className="font-semibold cursor-pointer">Clones UX / UI </h3>
            <h3 className="font-semibold cursor-pointer">Projects Frontend </h3>
            </div>

          <section className="relative w-[90%] mx-auto mt-4 flex flex-col gap-y-6 py-4 h-[250px]  xl:h-[350px] overflow-hidden scrolling">
            
           { proyectos.map( (proyecto) => (
                <Proyect key={proyecto.id} date={proyecto.date} proyect={proyecto.proyect} desc={proyecto.desc} img={proyecto.img}/>
           ))}

          </section>

          <div className="border-t-2 mt-4 border-[#404040] pb-8 w-[90%] mx-auto xl:hidden">
            <h3 className="mt-3 text-gray-200 font-semibold mb-4 text-center"> Skills -Tech Stack </h3>

            <div className="flex flex-wrap items-center justify-center w-[90%] mx-auto gap-2">

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaReact className="text-gray-400" />
                <h6 className="text-gray-400">React Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <TbBrandNextjs className="text-gray-400" />
                <h6 className="text-gray-400">Next Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <TbBrandVite className="text-gray-400" />
                <h6 className="text-gray-400">Vite</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaNode className="text-gray-400" />
                <h6 className="text-gray-400">Node Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiTypescript className="text-gray-400" />
                <h6 className="text-gray-400">Typescript</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <IoLogoJavascript className="text-gray-400" />
                <h6 className="text-gray-400">Javascript</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiMysql className="text-gray-400" />
                <h6 className="text-gray-400">MySQL</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiMongodb className="text-gray-400" />
                <h6 className="text-gray-400">MongoDD</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaHtml5 className="text-gray-400" />
                <h6 className="text-gray-400">HTML</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaCss3Alt className="text-gray-400" />
                <h6 className="text-gray-400">CSS</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiRedux className="text-gray-400" />
                <h6 className="text-gray-400">Redux</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiExpress className="text-gray-400" />
                <h6 className="text-gray-400">Express</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaGithub className="text-gray-400" />
                <h6 className="text-gray-400">Git</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaPython className="text-gray-400" />
                <h6 className="text-gray-400">Python</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiTailwindcss className="text-gray-400" />
                <h6 className="text-gray-400">Tailwind</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiReactquery className="text-gray-400" />
                <h6 className="text-gray-400">React Query</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaWordpressSimple className="text-gray-400" />
                <h6 className="text-gray-400">Wordpress</h6>
              </div>

            </div>
          </div>

          <div className="border-t-2 mt-4 border-[#404040] pb-8 w-[90%] mx-auto flex flex-col gap-y-4">
            
            <h3 className="mt-3 text-gray-200 font-semibold mb-4 text-center"> Experiencia Laboral </h3>
            
           <article className="flex flex-row items-center gap-x-4">
              <Image src={telecom} className="w-20 h-20 rounded-full" alt={''}/>
              <div>               
                <h3 className="font-bold text-lg text-gray-200 mb-[1px]"> Big Five </h3>
                <h5 className="text-gray-400 text-sm"> Desarrollo Wordpress </h5>
                <h6 className="text-xs text-gray-400"> Febrero 2024 - Actualidad </h6>
              </div>
            </article>

            <article className="flex flex-row items-center gap-x-4">
              <Image src={telecom} className="w-20 h-20 rounded-full" alt={''} />
              <div>               
                <h3 className="font-bold text-lg text-gray-200 mb-[1px]"> Interfaz </h3>
                <h5 className="text-gray-400 text-sm"> Sales coordinator </h5>
                <h6 className="text-xs text-gray-400"> Mayo 2023 - Agosto 2023 </h6>
              </div>
            </article>

            <article className="flex flex-row items-center gap-x-4">
              <Image src={telecom} className="w-20 h-20 rounded-full" alt={''}/>
              <div>               
                <h3 className="font-bold text-lg text-gray-200 mb-[1px]"> Telecom </h3>
                <h5 className="text-gray-400 text-sm"> Business consultant </h5>
                <h6 className="text-xs text-gray-400"> Noviembre 2019 - Julio 2022 </h6>
              </div>
            </article>

            <article className="flex flex-row items-center gap-x-4">
              <Image src={telecom} className="w-20 h-20 rounded-full" alt={''}/>
              <div>               
                <h3 className="font-bold text-lg text-gray-200 mb-[1px]"> Vika </h3>
                <h5 className="text-gray-400 text-sm"> Administrative </h5>
                <h6 className="text-xs text-gray-400"> Febrero 2018 - Marzo 2019 </h6>
              </div>
            </article>



           
          </div>



        </article>
  )
}

export default GridTwo