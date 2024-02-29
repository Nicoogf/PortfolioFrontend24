import React, { useState } from 'react' ;
import { IoCodeSlashOutline } from 'react-icons/io5'
import Technologies from '@/app/components/technologies/tecnologias.js' ;
import TechnologiesComponent from "@/app/components/technologies/technologies"
import Experience from '@/app/components/experience/experiencia';
import ExperienceComponent from '@/app/components/experience/Experience';
import proyectos from '@/app/components/proyect/proyectos';  
import ProyectComponent from "../../../app/components/proyect/Proyect"
import MenuLateral from '../leftMenuMobile/menu';

const GridTwo = (  ) => {

  const [selectedCategory, setSelectedCategory] = useState('Todos los proyectos');
  const [filteredProjects, setFilteredProjects] = useState(proyectos);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filteredProjects = category === 'Todos los proyectos' ? proyectos 
                                          : proyectos.filter(project => project.category === category);
    setFilteredProjects(filteredProjects);
  };
  
  const [menu , setMenu] = useState(false)

  function toggleMenu () {
    setMenu(!menu)
  }


  return (
    <article className="segundaVentana  shadow-xl bg-[#212121] my-2 mx-1 col-span-12 rounded-md overflow-hidden scrolling pb-4
                              md:col-span-8 
                              xl:col-span-6">

          <button className='absolute top-2 right-2 border border-gray-500 text-white '
                  onClick={toggleMenu}>           
                   Menu
          </button>       

                      

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

            <h3 className="font-semibold cursor-pointer" 
            onClick={() => handleCategoryClick('Todos los proyectos')} >
            All
            </h3>

            <h3 className="font-semibold cursor-pointer" 
            onClick={() => handleCategoryClick('wordpress')}>
            Wordpress Jobs
            </h3>

            <h3 className="font-semibold cursor-pointer"
            onClick={() => handleCategoryClick('frontend')}>
            Projects Frontend
            </h3>   

            <h3 className="font-semibold cursor-pointer"
             onClick={() => handleCategoryClick('ux')}>
              Clones UX / UI 
            </h3>

          </div>

          <section className="proyectos relative w-[90%] mx-auto mt-4 flex flex-col gap-y-6 py-4 h-[250px]  xl:h-[350px] overflow-hidden scrolling">      
          
          
          {filteredProjects.map(proyecto => (
            <ProyectComponent 
                key={proyecto.id} 
                date={proyecto.date} 
                proyect={proyecto.proyect} 
                desc={proyecto.desc} 
                img={proyecto.img}/>
          ))}

           { /* proyectos.map( (proyecto) => (
                <ProyectComponent key={proyecto.id} date={proyecto.date} proyect={proyecto.proyect} desc={proyecto.desc} img={proyecto.img}/>
           )) */}

          </section>

          <div className="border-t-2 mt-4 border-[#404040] pb-8 w-[90%] mx-auto xl:hidden">

            <h3 className="mt-3 text-gray-200 font-semibold mb-4 text-center"> Skills -Tech Stack </h3>

            <div className="flex flex-wrap items-center justify-center w-[90%] mx-auto gap-2">  

              {Technologies.map( (tecnologia , index ) => (
                  <TechnologiesComponent key={index}  name={tecnologia.name} icon={tecnologia.icon}/>
              ))}      
              
            </div>

          </div>

          <div className="border-t-2 mt-4 border-[#404040] pb-8 w-[90%] mx-auto flex flex-col gap-y-4">
            
            <h3 className="mt-3 text-gray-200 font-semibold mb-4 text-center"> Experiencia Laboral </h3>

              {Experience.map( (experiencia , index ) => (
                  <ExperienceComponent key={index}  name={experiencia.name} img={experiencia.img} rol={experiencia.rol} date={experiencia.date}/>
              ))}  
           
          </div>


    </article>
  )
}

export default GridTwo