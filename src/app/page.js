'use client'
import Image from "next/image";
import proyect from "../../public/proyect.png"

import { FaReact } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandVite } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiReactquery } from "react-icons/si";

export default function MainApp() {

  return (
    <main className="w-full h-screen bg-gray-800 max-w-full flex items-center">

      <section className="bg-gray-500 w-[95%] grid grid-cols-12 mx-auto h-[98%] rounded-xl max-w-[1280px]">

        <article className="hidden rounded-md my-2 mx-1 bg-blue-300
                            md:flex md:col-span-4
                            xl:col-span-3">
          perfil
        </article>



        <article className="bg-gray-700 my-2 mx-1 col-span-12 rounded-md overflow-hidden scrolling pb-4
                              md:col-span-8 
                              xl:col-span-6">

          <div className="border-b-2 border-gray-800 pb-8">
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

          <section className="w-[90%] mx-auto mt-4 flex flex-col gap-y-6 py-4 bg-gray-500 h-[250px] overflow-hidden scrolling">

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>


            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>


            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>


            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>

            <div className="flex flex-row gap-x-2 items-center cursor-pointer
                            sm:gap-x-4">

              <Image src={proyect} className="aspect-square object-cover w-20 h-20 rounded-xl 
                                              sm:w-24 sm:h-24" />

              <div>
                <h4 className="text-[10px] text-gray-400
                              sm:text-[12px]">
                  May 2024
                </h4>

                <h3 className="text-sm font-semibold text-gray-100 mb-1
                               sm:text-base">
                  Digital Money App
                </h3>

                <h6 className="text-[10px] text-gray-400
                               sm:text-sm">
                  Proyecto final de cursada que consite en realizar el diseño y funcionamiento basico de una billetera digital
                </h6>

              </div>
            </div>




          </section>

          <div className="border-t-2 mt-4 border-gray-800 pb-8">
            <h3 className="mt-3 text-gray-200 font-semibold mb-4 text-center"> Skills -Tech Stack </h3>

            <div className="flex flex-wrap items-center justify-center w-[90%] mx-auto gap-2">
              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <FaReact className="text-gray-400" />
                <h6 className="text-gray-400">React Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <TbBrandNextjs className="text-gray-400" />
                <h6 className="text-gray-400">Next Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <TbBrandVite className="text-gray-400" />
                <h6 className="text-gray-400">Vite</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <FaNode className="text-gray-400" />
                <h6 className="text-gray-400">Node Js</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <SiTypescript className="text-gray-400" />
                <h6 className="text-gray-400">Typescript</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <IoLogoJavascript className="text-gray-400" />
                <h6 className="text-gray-400">Javascript</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <SiMysql className="text-gray-400" />
                <h6 className="text-gray-400">MySQL</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <SiMongodb className="text-gray-400" />
                <h6 className="text-gray-400">MongoDD</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <FaHtml5 className="text-gray-400" />
                <h6 className="text-gray-400">HTML</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <FaCss3Alt className="text-gray-400" />
                <h6 className="text-gray-400">CSS</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <SiRedux className="text-gray-400" />
                <h6 className="text-gray-400">Redux</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <SiExpress className="text-gray-400" />
                <h6 className="text-gray-400">Express</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <FaGithub className="text-gray-400" />
                <h6 className="text-gray-400">Git</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <FaPython className="text-gray-400" />
                <h6 className="text-gray-400">Python</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <SiTailwindcss className="text-gray-400" />
                <h6 className="text-gray-400">Tailwind</h6>
              </div>

              <div className="flex flex-row items-center gap-x-1 border py-1 px-3 rounded-lg">
                <SiReactquery className="text-gray-400" />
                <h6 className="text-gray-400">React Query</h6>
              </div>

            </div>
          </div>



        </article>



        <article className="hidden rounded-md my-2 mx-1 bg-blue-300
                            xl:flex xl:col-span-3">
          Stack
        </article>
      </section>

    </main>
  );
}
