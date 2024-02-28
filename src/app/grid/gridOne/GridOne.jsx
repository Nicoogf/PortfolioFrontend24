import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaGithub } from 'react-icons/fa'
import { IoIosGitMerge } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
import { TfiMedallAlt } from 'react-icons/tfi'

import profile from "../../../../public/profile.jpg"

const GridOne = () => {
  return (

    <article className="hidden rounded-md my-2 mx-1 bg-[#212121]
                            md:flex md:col-span-4 md:flex-col
                            xl:col-span-3">

          <section className="relative h-[250px]  border-b-2 border-[#404040] w-[95%] mx-auto">
            <div className="m-2">
              <div className="relative">

                <Image crossOrigin="anonymous" 
                       src={profile} 
                       className="w-24 h-24 rounded-full mb-2" 
                       alt={""}
                />

                <div className=" absolute bottom-2 left-[85px] rounded-full bg-lime-400 h-4 w-4 animate-pulse cursor-pointer">

                </div>
              </div>

              <div className="absolute top-3 right-3 flex flex-row gap-x-2">

                <Link href={"#"} >
                  <IoHomeOutline className="bg-[#404040] text-3xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110" crossOrigin="anonymous"/>
                </Link>

                <Link href={"https://github.com/Nicoogf"} target="_blank" crossOrigin="anonymous">
                  <FaGithub className="bg-[#404040] text-3xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110" crossOrigin="anonymous" />
                </Link>

              </div>

              <div className="mb-4">
                <h1 className="text-2xl font-bold text-white mb-2">
                  Nicolas Falabella
                </h1>
                <h5 className="-my-1 text-sm text-gray-300"> Frontend Developer </h5>
                <h5 className="mt-1 text-gray-300 text-sm "> nicolasgfalabella@gmail.com </h5>
              </div>

              <section className="flex flex-row flex-wrap gap-x-1 -mt-1">
                <article>
                <Link href={"https://api.whatsapp.com/send?phone=5492324584106"} target="_blank">
                  <h6 className="text-gray-200 text-[11px] font-semibold cursor-pointer bg-[#404040] px-2 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-105"> Whatsapp </h6>
                </Link>    
                </article>

                <article>
                  <h6 className="text-gray-200 text-[11px] font-semibold cursor-pointer bg-[#404040] px-3 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-105"> Email </h6>
                </article>

                <article>
                <Link href={"https://www.instagram.com/nfalabella_/"} 
                target="_blank" >
                  <h6 className="text-gray-200 text-[11px] font-semibold cursor-pointer bg-[#404040] px-2 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-105"> Instagram </h6>
                  </Link>  
                </article>

              </section>


            </div>
          </section>

          <section className="text-gray-200 w-[90%] mx-auto mt-4 border-b-2 border-[#404040] pb-4">
            <h2 className="text-lg font-bold mb-2"> Bio </h2>
            <p className="text-gray-400 text-xs mb-4">
             He tenido el privilegio de desarrollar mi carrera profesional durante los últimos 3 años. Con una sólida experiencia consolidada sector comercial principalmente en la atención al cliente. 
             <br />
              Mi trayectoria profesional ha experimentado un giro hacia el area de la programacion, especializándome en el sector Frontend
            </p>
            <div>

            <div className="text-xs font-semibold flex flex-row gap-x-2 mb-2">
                <TfiMedallAlt crossOrigin="anonymous"/>
                <h6> 2 Años como desarollador</h6>  
            </div>

              <div className="text-xs font-semibold flex flex-row gap-x-2">
               <IoIosGitMerge crossOrigin="anonymous"/>
                <h6> 17  Proyectos </h6>
              </div>
            </div>
          </section>

          <section className="text-gray-200 w-[90%] mx-auto mt-4 ">
            <form className="flex gap-y-2 flex-col">
              <input placeholder="Remitente" 
              className="w-full rounded-md bg-[#404040] py-2 p-2 placeholder:text-sm text-sm"/>
              <input placeholder="Asunto"
                     className="w-full rounded-md bg-[#404040] py-2 p-2 placeholder:text-sm text-sm"/>
              <textarea  placeholder="Ingresar mensaje" className="resize-none w-full rounded-md bg-[#404040] h-[100px] p-2 placeholder:text-sm text-sm mb-2"/>
              <button className="w-[30%] ml-auto block bg-transparent py-2 rounded-lg text-xs font-semibold border border-gray-400 text-gray-400 hover:scale-110 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"> Enviar </button>
            </form>
          </section>

    </article>
    
  )
}

export default GridOne