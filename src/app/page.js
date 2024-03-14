'use client'

import GridOne from "./grid/gridOne/GridOne";
import GridTwo from "./grid/gridTwo/GridTwo";
import GridThree from "./grid/gridThree/gridThree";
import MenuLateral from "./grid/leftMenuMobile/menu";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { Background } from "./components/background/Background";

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

          <button className='z-50 absolute top-4 right-4 border-2 border-lime-400 text-lime-400 bg-transparent cursor-pointer rounded-xl md:hidden'
                  onClick={toggleMenu}>           
                   <MdOutlineMenu  className='text-4xl p-2'/>
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
