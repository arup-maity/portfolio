'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
const PortfoiloHeader = () => {
   const path = usePathname()
   const [toggledMenu, setToggledMenu] = useState(false)
   return (
      <>
         <div className="absolute w-full top-0 left-0 z-[9999]">
            <div className="container-webx !py-4">
               <div className="flex justify-between items-center">
                  <div className="flex flex-nowrap items-center text-black text-3xl">
                     <button className="lg:hidden" onClick={() => setToggledMenu(prev => !prev)}>
                        <IoMenuOutline />
                     </button>
                     <Image src="/logo.png" alt="" height={64} width={200} className="w-16 h-auto" />
                  </div>
                  <div className="hidden lg:block">
                     <ul className="flex gap-10">
                        <li className="tracking-[1px]">
                           <Link href='/' className={`${path === 'home' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>Home</Link>
                        </li>
                        <li className="tracking-[1px]">
                           <Link href='/' className={`${path === 'about' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>About</Link>
                        </li>
                        <li className="tracking-[1px]">
                           <Link href='/' className={`${path === 'blog' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>Skills</Link>
                        </li>
                        <li className="tracking-[1px]">
                           <Link href='/' className={`${path === 'services' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>Projects</Link>
                        </li>
                        <li className="tracking-[1px]">
                           <Link href='/#contact' className={`${path === 'contact' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>Contact</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="flex items-center">
                     <Link href='/' className="inline-flex items-center gap-1 bg-theme-color text-white text-base lg:text-lg font-lato font-medium tracking-wider leading-7 rounded-[30px] py-2 px-5 lg:py-3 lg:px-8">Download CV <GoArrowUpRight size={25} /></Link>
                  </div>
               </div>
            </div>
         </div>

         <div className={`fixed top-0 left-0 z-[99999] h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 ${toggledMenu ? '' : '-translate-x-full'}`}>
            <div className="mb-4">
               <div className="">
                  <Image src="/logo.png" alt="" height={56} width={100} className="w-14 h-auto" />
               </div>
               <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200  rounded-lg  w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center" onClick={() => setToggledMenu(prev => !prev)}>
                  <IoCloseOutline size={25} />
               </button>
            </div>
            <div className="">
               <ul className="space-y-2">
                  <li className="tracking-[1px]">
                     <Link href='/' className={`${path === 'home' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>Home</Link>
                  </li>
                  <li className="tracking-[1px]">
                     <Link href='/' className={`${path === 'about' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>About</Link>
                  </li>
                  <li className="tracking-[1px]">
                     <Link href='/' className={`${path === 'services' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>Services</Link>
                  </li>
                  <li className="tracking-[1px]">
                     <Link href='/' className={`${path === 'blog' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>Blog</Link>
                  </li>
                  <li className="tracking-[1px]">
                     <Link href='/#contact' className={`${path === 'contact' ? 'text-theme-color' : 'text-theme-black'} hover:text-theme-color text-lg font-lato font-semibold`}>Contact</Link>
                  </li>
               </ul>
            </div>
         </div>
      </>
   )
}

export default PortfoiloHeader