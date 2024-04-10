'use client'

import GridOne from "./grid/gridOne/GridOne";
import GridTwo from "./grid/gridTwo/GridTwo";
import GridThree from "./grid/gridThree/gridThree";
import MenuLateral from "./grid/leftMenuMobile/menu";
import { useState } from "react";
import { Provider } from "react-redux"
import store from "./redux/store";


export default function MainApp() {

  const [menu , setMenu] = useState(false)

  function toggleMenu () {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <>
    { /* <Background />  */ } 
    <main className="grid-two relative w-full h-screen bg-[#141414] max-w-full flex items-center overflow-hidden scrolling">       
 
       
       <section className=" relative bg-transparent w-[95%] grid grid-cols-12 mx-auto h-[98%] rounded-xl max-w-[1280px] z-50">
          <Provider store = { store }>
            <MenuLateral menu={menu}/>  
            
            <GridOne />

            <GridTwo />

            <GridThree />   

          </Provider>
       </section>
      
    </main>  
   </>
  );
}
