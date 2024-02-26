'use client'
import Image from "next/image";
import proyect from "../../public/proyect.png"
import telecom from "../../public/telecom.jpg"
import profile from "../../public/profile.jpg"
import freecodeCamp from "../../public/freecode.jpg"

import { FaReact } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandVite } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { TfiMedallAlt } from "react-icons/tfi";
import { IoIosGitMerge } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";

import Link from "next/link";

export default function MainApp() {

  return (
    <main className="w-full h-screen bg-[#171717] max-w-full flex items-center">

      <section className="bg-[#1C1C1C] w-[95%] grid grid-cols-12 mx-auto h-[98%] rounded-xl max-w-[1280px]">

        <article className="hidden rounded-md my-2 mx-1 bg-[#212121]
                            md:flex md:col-span-4 md:flex-col
                            xl:col-span-3">

          <section className="relative h-[250px]  border-b-2 border-[#404040] w-[95%] mx-auto">
            <div className="m-2">
              <div className="relative">
                <Image src={profile} className="w-24 h-24 rounded-full mb-2" />
                <div className=" absolute bottom-2 left-[85px] rounded-full bg-lime-400 h-4 w-4 animate-pulse cursor-pointer">

                </div>
              </div>

              <div className="absolute top-4 right-4 flex flex-row gap-x-2">

                <Link href={""}>
                  <IoHomeOutline className="bg-[#404040] text-3xl p-2 rounded-full text-gray-400" />
                </Link>

                <Link href={""}>
                  <FaGithub className="bg-[#404040] text-3xl p-2 rounded-full text-gray-400" />
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
                  <h6 className="text-gray-200 text-[11px] cursor-pointer bg-[#404040] px-2 py-1 rounded-lg"> Whatsapp </h6>
                </article>

                <article>
                  <h6 className="text-gray-200 text-[11px] cursor-pointer bg-[#404040] px-2 py-1 rounded-lg"> Email </h6>
                </article>

                <article>
                  <h6 className="text-gray-200 text-[11px] cursor-pointer bg-[#404040] px-2 py-1 rounded-lg"> Instagram </h6>
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
                <TfiMedallAlt />
                <h6> 2 Años como desarollador</h6>  
            </div>

              <div className="text-xs font-semibold flex flex-row gap-x-2">
               <IoIosGitMerge />
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
              <button className="w-[30%] ml-auto block bg-[#404040] py-2 rounded-lg text-xs font-semibold"> Enviar </button>
            </form>
          </section>

        </article>



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
          <section className="relative w-[90%] mx-auto mt-4 flex flex-col gap-y-6 py-4 h-[250px] overflow-hidden scrolling">
      
            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-full
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>


            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>


            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>


            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>




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
              <Image src={telecom} className="w-24 h-24 rounded-full" />
              <div>
                <h6 className="text-xs text-gray-400"> Febrero 2024 - Actualidad </h6>
                <h3 className="font-bold text-xl -mb-1 text-gray-200"> Big Five </h3>
                <h5 className="text-gray-300"> Desarrollo Wordpress </h5>
              </div>
            </article>

            <article className="flex flex-row items-center gap-x-4">
              <Image src={telecom} className="w-24 h-24 rounded-full" />
              <div>
                <h6 className="text-xs text-gray-400"> Mayo 2023 - Agosto 2023 </h6>
                <h3 className="font-bold text-xl -mb-1 text-gray-200"> Interfaz </h3>
                <h5 className="text-gray-300"> Sales coordinator </h5>
              </div>
            </article>

            <article className="flex flex-row items-center gap-x-4">
              <Image src={telecom} className="w-24 h-24 rounded-full" />
              <div>
                <h6 className="text-xs text-gray-400"> Noviembre 2019 - Julio 2022 </h6>
                <h3 className="font-bold text-xl -mb-1 text-gray-200"> Telecom </h3>
                <h5 className="text-gray-300"> Business consultant </h5>
              </div>
            </article>

            <article className="flex flex-row items-center gap-x-4">
              <Image src={telecom} className="w-24 h-24 rounded-full" />
              <div>
                <h6 className="text-xs text-gray-400"> Febrero 2018 - Marzo 2019 </h6>
                <h3 className="font-bold text-xl -mb-1 text-gray-200"> Vika </h3>
                <h5 className="text-gray-300"> Administrative </h5>
              </div>
            </article>
          </div>



        </article>



        <article className="hidden rounded-md my-2 mx-1 bg-[#212121] overflow-hidden scr
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
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full"/>
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm"> Digital House <span className="text-gray-300 text-xs"> (2024) </span></h4>
                <h5 className="text-gray-400 text-xs"> Especializacion Frontend </h5>
              </div>
            </section>
 
            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full"/>
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm"> FreeCodeCamp <span className="text-gray-300 text-xs"> (2023) </span></h4>
                <h5 className="text-gray-400 text-xs"> JavaScript Algorithms and Data Structures </h5>
              </div>
            </section>

            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full"/>
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm"> Universidad Tecnologica Nacional <span className="text-gray-300 text-xs"> (2023) </span></h4>
                <h5 className="text-gray-400 text-xs"> Desarrollo web orientado al Backend </h5>
              </div>
            </section>

            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full"/>
              <div className="flex flex-col"> 
                <h4 className="text-gray-200 font-bold text-sm">  Digital House 
                <span className="text-gray-400 text-xs"> (2022)  </span></h4>
                <h5 className="text-gray-400 text-xs"> Desarrollo Web Full Stack </h5>
              </div>
            </section>

            <section className="flex flex-row  items-center gap-x-4 mt-4">
              <Image src={freecodeCamp} className="w-12 h-12 rounded-full"/>
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

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaReact className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">React Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <TbBrandNextjs className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Next Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <TbBrandVite className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Vite</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaNode className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Node Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiTypescript className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Typescript</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <IoLogoJavascript className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Javascript</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiMysql className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">MySQL</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiMongodb className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">MongoDD</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaHtml5 className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">HTML</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaCss3Alt className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">CSS</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiRedux className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Redux</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiExpress className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Express</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaGithub className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Git</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaPython className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Python</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiTailwindcss className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Tailwind</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <SiReactquery className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">React Query</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border border-[#404040] py-1 px-3 rounded-lg cursor-pointer">
                <FaWordpressSimple className="text-gray-400" />
                <h6 className="text-gray-400 text-xs">Wordpress</h6>
              </div>

            </div>
          </div>
        </article>
      </section>

    </main>
  );
}
