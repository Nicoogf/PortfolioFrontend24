import React, { useState } from 'react' ;

import Technologies from '@/app/components/technologies/tecnologias.js' ;
import TechnologiesComponent from "@/app/components/technologies/Technologies"
import Experience from '@/app/components/experience/experiencia';
import ExperienceComponent from '@/app/components/experience/Experience';
import proyectos from '@/app/components/proyect/proyectos';  
import ProyectComponent from "../../../app/components/proyect/Proyect" ;
import Estudios from '@/app/components/studies/estudios.js' ;
import StudiesMobile from '@/app/components/studiesMobile/Experience';

import { IoCodeSlashOutline } from 'react-icons/io5'
import { motion } from "framer-motion"
import { MdOutlineMenu } from 'react-icons/md';
import {useSelector , useDispatch } from "react-redux" ;
import { IoMoonOutline } from "react-icons/io5";
import { BsTranslate } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

import { mostrar , lightMode , darkMode, translateEsp, translateING } from '@/app/redux/actions/nightModeActions';



const GridTwo = (  ) => {

  const [selectedCategory, setSelectedCategory] = useState('Todos los proyectos');
  const [filteredProjects, setFilteredProjects] = useState(proyectos);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filteredProjects = category === 'Todos los proyectos' ? proyectos 
                                          : proyectos.filter(project => project.category === category);
    setFilteredProjects(filteredProjects);
  };
  
  const state = useSelector((state) =>  state.nightMode)
  const estadoDeMenu = state.menuVisible

  const coloroOscuro = useSelector((coloroOscuro) => coloroOscuro.colorTheme)
  const isLight = coloroOscuro.colorTheme

  const idioma = useSelector((idioma)=> idioma.languaje)
  const textoEsp = idioma.traducido

  const dispatch = useDispatch()

  console.log(textoEsp)

  return (
    <motion.article className={` ${ isLight ? "bg-gray-100/80": "bg-[#212121]/80" } relative segundaVentana  grid-two shadow-xl  my-2 col-span-12 rounded-md overflow-hidden scrolling pb-4 transition-all duration-500
                              md:col-span-8 
                              xl:col-span-6`}
                              initial={{y:-10 , opacity:0}}
                              animate={{
                                y:0,
                                opacity:1,
                                transition:{duration:0.4 , type:"spring" , stiffness:200 , delay:0.2},
                              }}>   


          <div className='absolute top-4 right-4 flex flex-col sm:flex-row gap-2'>


          <button className={`${estadoDeMenu ? "hidden" : "flex"}  z-50  top-8 right-4 bg-transparent cursor-pointer rounded-xl`}
                  onClick={ textoEsp ? () => dispatch(translateEsp()) : () => dispatch(translateING())}>         
                   <BsTranslate className={` ${ isLight ? " border border-black bg-gray-300 text-gray-800 hover:bg-lime-400/90": "border border-transparent bg-[#404040]" }  text-4xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110`} />
          </button>   

          <button className={`${estadoDeMenu ? "hidden" : "flex"} z-50  top-8 right-4 bg-transparent cursor-pointer rounded-xl `}
                  onClick={  isLight ? () =>  dispatch(darkMode()) 
                                      :() =>  dispatch(lightMode())
                          }> 
                    {
                      isLight && (
                        <IoMoonOutline className={` ${ isLight ? " border border-black bg-gray-300 text-gray-800 hover:bg-lime-400/90": "border border-transparent bg-[#404040]" }  text-4xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110`} />
                      )                      
                    }      
                    {
                      !isLight &&
                      <FiSun  className={` ${ isLight ? " border border-black bg-gray-300 text-gray-800 hover:bg-lime-400/90": "border border-transparent bg-[#404040]" }  text-4xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110`} />
                    }
                    

                  
          </button>   

           

          <button className={`${estadoDeMenu ? "hidden" : "flex"} z-50  top-8 right-4 bg-transparent cursor-pointer rounded-xl md:hidden`}
                  onClick={() => dispatch(mostrar())}>         
                   <MdOutlineMenu className={` ${ isLight ? "bg-gray-300 text-gray-800": "bg-[#404040]" }  text-4xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110`} />
          </button>   

          </div>
              
                   

          <div className={`  ${ isLight ? "border-transparent ": "border-transparent" } border-b-2  pb-4 w-[90%] mx-auto`}>
            <div className="flex flex-row items-center gap-x-8 mt-4 w-[92%] mx-auto">

              <div className="w-[20%]">
                <IoCodeSlashOutline className={`  ${ isLight ? "text-gray-950 ": "text-gray-300" } text-4xl mx-auto`} />
              </div>

              <div>

                <h2 className={` ${ isLight ? "text-gray-950 ": "text-gray-100" } font-semibold  text-2xl`}> 
                { textoEsp ? "Portafolio" : "Personal"} 
                </h2>
                        
                <h3 className={` ${ isLight ? "text-gray-900 ": "text-gray-200" } font-semibold  text-xl -mt-1 mb-2`}> 
                { textoEsp ? "Personal" : "Portfolio"} 
                </h3>
                <h5 className={` ${ isLight ? "text-gray-900 ": "text-gray-300" } text-sm font-semibold`}> 
                { textoEsp ? "En este layout encontraras " : "In this layout you will find"} 
                </h5>
                <h6 className={` ${ isLight ? "text-gray-800 ": "text-gray-300" } text-xs text-gray-400`}> 
                  { textoEsp ? "Algunos de los" : "Some of the"} 
                
                <br className='sm:hidden'/>
                
                { textoEsp ? "proyectos realizados hasta el momento, clasificados por la tecnología utilizada o por su tipo de diseño" 
                : "projects carried out so far, classified by the technology used or by their type of design"} 
                
                </h6>
              </div>

            </div>
          </div>


          <div className="hidden    w-[95%] mx-auto flex flex-row justify-center gap-x-2 mt-3 sm:gap-x-2 sm:justify-center">

           <h6 
           onClick={() => handleCategoryClick('frontend')}
           className={` border ${ isLight ? "border-gray-800 text-gray-800 bg-transparent hover:bg-lime-400/90 hover:text-gray-800 ": "border-transparent text-gray-200 bg-[#141414] hover:bg-gray-100 hover:text-[#141414]" }  text-[10px] w-[65px]  text-center py-2 rounded-md font-semibold transition-all duration-200
           sm:py-2 sm:w-[100px] cursor-pointer`}> 
           NextJs
           </h6>
           <h6 
           onClick={() => handleCategoryClick('wordpress')}
           className={` border ${ isLight ? "border-gray-800 text-gray-800 bg-transparent hover:bg-lime-400/90 hover:text-gray-800 ": "border-transparent text-gray-200 bg-[#141414] hover:bg-gray-100 hover:text-[#141414]" }  text-[10px] w-[65px]  text-center py-2 rounded-md font-semibold transition-all duration-200
           sm:py-2 sm:w-[100px] cursor-pointer`}> 
           Wordpress
           </h6>

           <h6 
            onClick={() => handleCategoryClick('ux')}
            className={` border ${ isLight ? "border-gray-800 text-gray-800 bg-transparent hover:bg-lime-400/90 hover:text-gray-800 ": "border-transparent text-gray-200 bg-[#141414] hover:bg-gray-100 hover:text-[#141414]" }  text-[10px] w-[65px]  text-center py-2 rounded-md font-semibold transition-all duration-200
            sm:py-2 sm:w-[100px] cursor-pointer`}> 
           Clones
           </h6>
           <h6  onClick={() => handleCategoryClick('Todos los proyectos')}
          className={` border ${ isLight ? "border-gray-800 text-gray-800 bg-transparent hover:bg-lime-400/90 hover:text-gray-800 ": "border-transparent text-gray-200 bg-[#141414] hover:bg-gray-100 hover:text-[#141414]" }  text-[10px] w-[65px]  text-center py-2 rounded-md font-semibold transition-all duration-200
          sm:py-2 sm:w-[100px] cursor-pointer`}> 
            Todo
           </h6>

          </div>


          

          <section className="hidden    proyectos relative w-[90%] mx-auto mt-2 flex flex-col gap-y-2 py-4 h-[250px]  xl:h-[350px] overflow-hidden scrolling">      
          
          
          {filteredProjects.map(proyecto => (
            <ProyectComponent 
                key={proyecto.id} 
                date={proyecto.date} 
                proyect={proyecto.proyect} 
                desc={proyecto.desc} 
                img={proyecto.img}/>
          ))}


          </section>

          <div className={`${ isLight ? "border-[#aaaaaa] ": "border-[#404040]" } border-t-2 mt-4  pb-8 w-[90%] mx-auto `}>

            <h3 className={`${ isLight ? "text-gray-950 ": "text-gray-200" } mt-3  font-semibold mb-4 text-center`}> 
             { textoEsp ? "Habilidades - Tecnologias" : " Skills - Tech Stack "}
            </h3>

            <div className="flex flex-wrap items-center justify-center w-[90%] mx-auto gap-2 ">  

              {Technologies.map( (tecnologia , index ) => (
                  <TechnologiesComponent key={index}  name={tecnologia.name} icon={tecnologia.icon}/>
              ))}      
              
            </div>

          </div>

          <div className= {` ${ isLight ? "border-[#aaaaaa] ": "border-[#404040]" } border-t-2 mt-4 pb-8 w-[90%] mx-auto flex flex-col gap-y-4 `}>
            
            <h3 className={`${ isLight ? "text-gray-950 ": "text-gray-200" } mt-3 text-gray-200 font-semibold mb-4 text-center`}> 
             { textoEsp ? "Experiencia Laboral " : "Work Experience"}
            </h3>

              {Experience.map( (experiencia , index ) => (
                  <ExperienceComponent key={index}  name={experiencia.name} img={experiencia.img} rol={ textoEsp ? experiencia.rol : experiencia.roling } date={ textoEsp ? experiencia.date : experiencia.dateing }/>
              ))}  
           
          </div>

          <div className={` ${ isLight ? "border-[#aaaaaa] " : "border-[#404040]" } border-t-2 mt-4 pb-8 w-[90%] mx-auto flex flex-col gap-y-4 xl:hidden `}>
            
            <h3 className={` ${ isLight ? "text-gray-950 ": "text-gray-200" } mt-3 text-base sm:text-lg text-gray-200 font-semibold mb-4 text-center`}> Official certifications </h3>

              {Estudios.map((estudios , index ) => (
                  <StudiesMobile key={index}  name={estudios.sede} img={estudios.img} title={ textoEsp ? estudios.title : estudios.titleIng } />
              ))}  
           
          </div>

    </motion.article>
  )
}

export default GridTwo