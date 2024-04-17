import React from 'react'
import { IoDownloadOutline } from 'react-icons/io5'
import Technologies from '@/app/components/technologies/tecnologias.js' ;
import TechnologiesLite from '@/app/components/technologies/TechnologiesLite'
import Estudios from "@/app/components/studies/estudios.js"
import Studies from "@/app/components/studies/Studies"
import { motion } from "framer-motion"
import { useSelector  } from "react-redux" ;


const GridThree = () => {
 
  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme

  const idioma = useSelector((idioma)=> idioma.languaje)
  const textoEsp = idioma.traducido

  return (
    <motion.article className={` ${ isLight ? "bg-gray-100/80": "bg-[#212121]/80" } hidden shadow-xl rounded-md my-2 mx-1 bg-[#212121] overflow-hidden 
                            xl:flex xl:col-span-3 flex-col `}
                            initial={{y:10 , opacity:0}}
                            animate={{
                              y:0,
                              opacity:1,
                              transition:{duration:0.4 , type:"spring" , stiffness:200, delay:0.3},
                            }}>
                              
          <div className={` ${ isLight ? "border-[#aaaaaa] ": "border-[#404040]" } w-[85%] mx-auto mt-4 border-b-2 pb-4 `}>
            <h3 className={` ${ isLight ? "text-gray-950 ": "text-gray-100" } text-lg font-bold mb-2 text-center `}> Curriculum </h3>
            <p className={`${ isLight ? "text-gray-800 ": "text-gray-300" } text-xs mb-4 text-center`}> 
            { textoEsp ? "A continuacion dejare el boton de descarga para obtener el curriculum actualizado en formato PDF" : "Below, I'll leave the download button to get the updated resume in PDF format"} 
            </p>
            
            <a href="/Nicolas_Falabella.pdf" download>               
                <div className={`  ${ isLight  ? "border-gray-800 text-gray-800 hover:bg-lime-400/90 hover:text-gray-900" : "border-gray-400 text-gray-400 hover:bg-gray-200 hover:text-gray-900"} } flex flex-row items-center justify-center  border  rounded-lg w-[50%] mx-auto gap-x-2 hover:scale-105  hover:text-gray-900  transition-all duration-200 `}>
                <IoDownloadOutline />
                <h6 className=" py-2 text-xs font-semibold">  { textoEsp ? "Descargar" : "Download"}   </h6> 
                </div>             
            </a>

          </div>

          <div className={` ${ isLight ? "border-[#aaaaaa] ": "border-[#404040]" } w-[85%] mx-auto mt-4 border-b-2 pb-4 `}>

            <h3 className= {` ${ isLight ? "text-gray-950 ": "text-gray-100"} font-semibold text-center `}>
            { textoEsp ? "Certificados Oficiales" : "Official certifications"} 
              </h3>


            {Estudios.map( (estudio , index ) => (
                  <Studies key={index} sede={estudio.sede}  date={estudio.date} title={ textoEsp ? estudio.title : estudio.titleIng } img={estudio.img} />
            ))}     



          </div>

          <div className=" mt-4 pb-8 w-[90%] mx-auto scrolling grid-two hidden">
            <h3 className={` ${ isLight ? "text-gray-950 ": "text-gray-100" } mt-3 text-gray-200 font-semibold mb-4 text-center `}> Skills -Tech Stack </h3>

            <div className="flex flex-wrap items-center justify-center w-[90%] mx-auto gap-2">  

            {Technologies.map( (tecnologia , index ) => (
                  <TechnologiesLite key={index}  name={tecnologia.name} icon={tecnologia.icon}/>
              ))}     

            </div>
          </div>
    </motion.article>
  )
}

export default GridThree