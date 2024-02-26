'use client'

import GridOne from "./grid/gridOne/GridOne";
import GridTwo from "./grid/gridTwo/GridTwo";
import GridThree from "./grid/gridThree/gridThree";

export default function MainApp() {

  return (
    <main className="w-full h-screen bg-[#171717] max-w-full flex items-center">

      <section className="bg-[#1C1C1C] w-[95%] grid grid-cols-12 mx-auto h-[98%] rounded-xl max-w-[1280px]">

        <GridOne />

        <GridTwo />

        <GridThree />

        

      </section>

    </main>
  );
}
