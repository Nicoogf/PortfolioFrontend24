'use client'

import GridOne from "./grid/gridOne/GridOne";
import GridTwo from "./grid/gridTwo/GridTwo";
import GridThree from "./grid/gridThree/gridThree";
import MenuLateral from "./grid/leftMenuMobile/menu";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { Background } from "./components/background/Background";
import { RiDiscordLine } from "react-icons/ri";

export default function MainApp() {

  const [menu , setMenu] = useState(false)

  function toggleMenu () {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <>
    { /* <Background />  */ } 
    <main className="relative w-full h-screen bg-[#141414] max-w-full flex items-center overflow-hidden scrolling">       

       <section className="relative bg-transparent w-[95%] grid grid-cols-12 mx-auto h-[98%] rounded-xl max-w-[1280px] z-50">

          <button className='z-50 absolute top-8 right-4 bg-transparent cursor-pointer rounded-xl md:hidden'
                  onClick={toggleMenu}>         
                   <MdOutlineMenu className="bg-[#404040] text-4xl p-2 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110" crossOrigin="anonymous"/>
          </button>     


        

        <MenuLateral menu={menu}/>  
        
        <GridOne />

        <GridTwo />

        <GridThree />

        

      </section>

    </main>  
   </>
  );
}
