import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"
import { FaGithub } from 'react-icons/fa'
import { IoIosGitMerge } from 'react-icons/io'

import { TfiMedallAlt } from 'react-icons/tfi'
import { RiDiscordLine } from "react-icons/ri";

import {useSelector , useDispatch } from "react-redux" ;

import profile from "../../../../public/profile.jpg"

const GridOne = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_grml24d', 'template_lg3g9qs', form.current, {
        publicKey: 'BjjMTn9xEt7p26HyT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset()
  };

  const state = useSelector((state) =>  state.nightMode)
  const estadoDeMenu = state.menuVisible

  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme

  console.log( isLight )

  const dispatch = useDispatch()
  


  
  return (

    <motion.article className={`hidden ${ isLight ? "bg-gray-100/80": "bg-[#212121]/80"} rounded-md my-2 mr-1 
                            md:flex md:col-span-4 md:flex-col
                            xl:col-span-3 shadow-xl`}
                    initial={{y:10 , opacity:0}}
                    animate={{
                      y:0,
                      opacity:1,
                      transition:{duration:0.4 , type:"spring" , stiffness:200 , delay:0.1},
                    }}>

          <section className={` ${ isLight ? "border-[#aaaaaa] ": "border-[#404040]" } relative h-[250px] border-b-2 w-[95%] mx-auto `}>
            <div className="m-2">
              <div className="relative">

                <Image crossOrigin="anonymous" 
                       src={profile} 
                       className="w-20 h-20 rounded-full mb-2" 
                       alt={""}
                />

                <div className=" absolute bottom-1 left-[65px] rounded-full bg-lime-400 h-4 w-4 animate-pulse cursor-pointer">

                </div>
              </div>

              <div className="absolute top-3 right-3 flex flex-row gap-x-2">

                <Link href={"https://discordapp.com/users/693586473894805535"} target="_blank" >
                  <RiDiscordLine className={` ${ isLight ? " border border-black bg-gray-300 text-gray-800 hover:bg-lime-400/90": "border border-transparent bg-[#404040]" } bg-[#404040] text-3xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110`} crossOrigin="anonymous"/>
                </Link>

                <Link href={"https://github.com/Nicoogf"} target="_blank" crossOrigin="anonymous">
                  <FaGithub className={` ${ isLight ? " border border-black bg-gray-300 text-gray-800 hover:bg-lime-400/90": "border border-transparent bg-[#404040]" } bg-[#404040] text-3xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110`} crossOrigin="anonymous" />
                </Link>

              </div>

              <div className="mb-4">
                <h1 className={` ${ isLight ? "text-gray-950 ": "text-gray-100" } text-2xl font-bold mb-2`}>
                  Nicolas Falabella
                </h1>
                <h5 className={` ${ isLight ? "text-gray-700 ": "text-gray-300" } -my-1 text-sm`}> Frontend Developer </h5>
                <h5 className={` ${ isLight ? "text-gray-800 ": "text-gray-300" } mt-1 text-sm `}> nicolasgfalabella@gmail.com </h5>
              </div>

              <section className="flex flex-row flex-wrap gap-x-1 -mt-1">
                <article>
                <Link href={"https://api.whatsapp.com/send?phone=5492324584106"} target="_blank">
                  <h6 className= {` ${ isLight ? "text-gray-800 bg-gray-300 hover:bg-gray-600 hover:text-gray-200 ": "text-gray-200 bg-[#141414] hover:bg-gray-100 hover:text-[#141414]" } text-gray-200 text-[11px] font-semibold cursor-pointer bg-[#404040] px-2 py-1 rounded-lg  transition-all duration-200 hover:scale-105 `}> Whatsapp </h6>
                </Link>    
                </article>

                <article>
                <Link href={"mailto:nicolasgfalabella@correo.com"} 
                target="_blank" >
                  <h6 className= {` ${ isLight ? "text-gray-800 bg-gray-300 hover:bg-gray-600 hover:text-gray-200 ": "text-gray-200 bg-[#141414] hover:bg-gray-100 hover:text-[#141414]" } text-gray-200 text-[11px] font-semibold cursor-pointer bg-[#404040] px-2 py-1 rounded-lg  transition-all duration-200 hover:scale-105 `}> Email </h6>
                  </Link>  
                </article>

                <article>
                <Link href={"https://www.instagram.com/nfalabella_/"} 
                target="_blank" >
                  <h6 className= {` ${ isLight ? "text-gray-800 bg-gray-300 hover:bg-gray-600 hover:text-gray-200 ": "text-gray-200 bg-[#141414] hover:bg-gray-100 hover:text-[#141414]" } text-gray-200 text-[11px] font-semibold cursor-pointer bg-[#404040] px-2 py-1 rounded-lg  transition-all duration-200 hover:scale-105 `}> Instagram </h6>
                  </Link>  
                </article>

              </section>


            </div>
          </section>

          <section className={` ${ isLight ? "border-[#aaaaaa] ": "border-[#404040]" } text-gray-200 w-[90%] mx-auto mt-4 border-b-2 pb-4 `}>
            <h2 className= {`${ isLight ? "text-gray-950 ": "text-gray-100" } text-lg font-bold mb-2`}> Bio </h2>
            <p className={`${ isLight ? "text-gray-800 ": "text-gray-400" } text-xs mb-4`}>
             He tenido el privilegio de desarrollar mi carrera profesional durante los últimos 3 años. Con una sólida experiencia consolidada sector comercial principalmente en la atención al cliente. 
             <br />
              Mi trayectoria profesional ha experimentado un giro hacia el area de la programacion, especializándome en el sector Frontend. Actualmente cursando especializacion frontend en Digital House y en primer como Analista de Sistemas en Universidad de Lujan
            </p>
            <div>

            <div className="text-xs font-semibold flex flex-row gap-x-2 mb-2">
                <TfiMedallAlt crossOrigin="anonymous"  className={`${ isLight ? "text-gray-950 ": "text-gray-100" }`}/>
                <h6 className={`${ isLight ? "text-gray-950 ": "text-gray-100" }`}> 2 Años como desarollador</h6>  
            </div>

              <div className="text-xs font-semibold flex flex-row gap-x-2">
               <IoIosGitMerge crossOrigin="anonymous"  className={`${ isLight ? "text-gray-950 ": "text-gray-100" }`}/>
                <h6 className={`${ isLight ? "text-gray-950 ": "text-gray-100" }`}> 17  Proyectos </h6>
              </div>
            </div>
          </section>

          <section className="text-gray-200 w-[90%] mx-auto mt-4 ">
            <form className="flex gap-y-2 flex-col" ref={form} onSubmit={sendEmail}>

              <input placeholder="Remitente" name='name' 
              className={` ${ isLight ? "bg-gray-300":"bg-[#404040]"} w-full rounded-md py-2 p-2 placeholder:text-sm text-sm `}/>

              <input placeholder="Asunto" name="asunto"
                     className={` ${ isLight ? "bg-gray-300":"bg-[#404040]"} w-full rounded-md bg-[#404040] py-2 p-2 placeholder:text-sm text-sm `}/>

              <textarea  placeholder="Ingresar mensaje" name="message"
              className={` ${ isLight ? "bg-gray-300":"bg-[#404040]"} w-full rounded-md bg-[#404040] h-[100px] p-2 placeholder:text-sm text-sm mb-2`}/>
              
              <button className={`${ isLight  ? "border-gray-800 text-gray-800 hover:bg-lime-400/90 hover:text-gray-900" : "border-gray-400 text-gray-400 hover:bg-gray-200 hover:text-gray-900"} w-[30%] ml-auto block bg-transparent py-2 rounded-lg text-xs font-semibold border  hover:scale-110  transition-all duration-200 `}> Enviar </button>
            </form>
          </section>

    </motion.article>
    
  )
}

export default GridOne