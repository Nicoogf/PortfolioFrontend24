'use client'

import GridOne from "./grid/gridOne/GridOne";
import GridTwo from "./grid/gridTwo/GridTwo";
import GridThree from "./grid/gridThree/gridThree";
import MenuLateral from "./grid/leftMenuMobile/menu";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

export default function MainApp() {

  const [menu , setMenu] = useState(false)

  function toggleMenu () {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <main className="relative w-full h-screen bg-[#171717] max-w-full flex items-center overflow-hidden scrolling">

          <button className='z-50 absolute top-4 right-4 border border-lime-400 text-gray-800 bg-lime-500 cursor-pointer rounded-lg md:hidden '
                  onClick={toggleMenu}>           
                   <MdOutlineMenu  className='text-4xl p-1'/>
          </button>     

       <MenuLateral menu={menu}/>   

       <section className="relative bg-[#1C1C1C] w-[95%] grid grid-cols-12 mx-auto h-[98%] rounded-xl max-w-[1280px]">

        <GridOne />

        <GridTwo />

        <GridThree />

        

      </section>

    </main>
  );
}
