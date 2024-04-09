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
    <>
    { /* <Background />  */ } 
    <main className="relative w-full h-screen bg-[#141414] max-w-full flex items-center overflow-hidden scrolling">       

       <section className="relative bg-transparent w-[95%] grid grid-cols-12 mx-auto h-[98%] rounded-xl max-w-[1280px] z-50">

          


        

        <MenuLateral menu={menu}/>  
        
        <GridOne />

        <GridTwo />

        <GridThree />

        

      </section>

    </main>  
   </>
  );
}
