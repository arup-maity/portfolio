"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ProjectGrid() {
   return (
      <div className="theme-container !pt-20 w-full">

         <div className="mb-5">
            <h2 className="relative text-2xl md:text-4xl font-semibold text-center mb-4">Personal Projects</h2>
            <p className='w-11/12 lg:w-7/12 text-[15px] text-center mx-auto'>A showcase of my personal projects built to solve real-world problems, explore new technologies, and refine my development skills. These projects reflect my passion for full-stack development, clean code, and user-focused design.</p>
         </div>
         <div className="h-screen py-20">
            <LayoutGrid cards={cards} />
         </div>
      </div>
   );
}
export default ProjectGrid;

const cards = [
   {
      id: 1,
      className: "md:col-span-2",
      thumbnail: "/projects/flovour-haven.png",
      title: "Flovour Haven",
      descriptions: "Flavour Haven is a full-stack restaurant website built using Next.js, Node.js, and PostgreSQL. The platform allows users to browse the restaurant menu, place online food orders, and manage their cart. It features a dynamic and responsive UI built with Next.js, a RESTful API powered by Node.js, and secure data storage using a PostgreSQL database. The project demonstrates end-to-end implementation of modern web technologies for a real-world food ordering experience.",
      link: "https://flavour-haven.arupmaity.in",
      githubLink: "https://github.com/arup-maity/flavour-haven-frontend"
   },
   {
      id: 2,
      className: "col-span-1",
      thumbnail: "/projects/cloud-wings.png",
      title: "Cloud Wings",
      descriptions: "Cloud Wings is a full-stack flight booking platform developed using Next.js for the frontend, Node.js for the backend, and PostgreSQL as the database. The platform allows users to search for flights, view schedules, and complete bookings with real-time data handling. It showcases a seamless user experience with optimized routing, responsive design, and a scalable backend architecture.",
      link: "https://cloudwings.arupmaity.in",
      githubLink: "https://github.com/arup-maity/flight-booking"
   },
   {
      id: 3,
      className: "col-span-1",
      thumbnail: "/projects/ecommerce-filter.png",
      title: "Ecommerce Product Filter",
      descriptions: "Product Filter is an eCommerce product filtering website built using Next.js. The project focuses on providing a smooth user experience for browsing and filtering products by categories, price range, ratings, and more. It showcases dynamic rendering, optimized performance, and client-side state management. The site is fully responsive and demonstrates modern front-end architecture with reusable components and clean UI/UX.",
      link: "https://ecommerce-shop-page.vercel.app/",
      githubLink: "https://github.com/arup-maity/shop-page"
   },
   // {
   //    id: 4,
   //    className: "md:col-span-2",
   //    thumbnail:
   //       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   //    title: "House in the woods",
   //    descriptions: "A showcase of my personal projects built to solve real-world problems, explore new technologies, and refine my development skills. These projects reflect my passion for full-stack development, clean code, and user-focused design.",
   //    link: "#",
   //    githubLink: "#"
   // },
];

type Card = {
   id: number;
   className: string;
   thumbnail: string;
   title: string;
   descriptions: string;
   link: string;
   githubLink: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
   const [selected, setSelected] = useState<Card | null>(null);
   const [lastSelected, setLastSelected] = useState<Card | null>(null);
   const layoutRef = useRef<HTMLDivElement | null>(null);

   const handleClick = (card: Card) => {
      setLastSelected(selected);
      setSelected(card);
   };

   const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click is outside the layout area
      if (layoutRef.current && !layoutRef.current.contains(event.target as Node)) {
         setLastSelected(selected);
         setSelected(null);
      }
   };

   useEffect(() => {
      if (selected) {
         // Add event listener to detect outside clicks
         document.addEventListener("mousedown", handleOutsideClick);
      }
      return () => {
         // Cleanup event listener on unmount or when selected changes
         document.removeEventListener("mousedown", handleOutsideClick);
      };
   }, [selected]);

   return (
      <div
         ref={layoutRef}
         className="w-full h-full grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 relative"
      >
         {cards.map((card, i) => (
            <div key={i} className={cn(card.className, "")}>
               <motion.div
                  className={cn(
                     card.className,
                     "relative overflow-hidden",
                     selected?.id === card.id
                        ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                        : lastSelected?.id === card.id
                           ? "z-40 bg-white rounded-xl h-full w-full"
                           : "bg-white rounded-xl h-full w-full"
                  )}
                  layoutId={`card-${card.id}`}
               >
                  {selected?.id === card.id && <SelectedCard selected={selected} />}
                  <ImageComponent card={card} />
                  {selected?.id !== card.id &&
                     <div className="absolute z-10 text-white left-0 bottom-0 p-4">
                        <h2 className="text-xl font-medium">{card.title}</h2>
                        <button
                           onClick={() => handleClick(card)}
                           className="border border-white rounded-md px-4 py-1 mt-2 cursor-pointer">
                           Read more
                        </button>
                     </div>
                  }
               </motion.div>
            </div>
         ))}
      </div>
   );
};

const ImageComponent = ({ card }: { card: Card }) => {
   return (
      <motion.img
         layoutId={`image-${card.id}-image`}
         src={card.thumbnail}
         height="500"
         width="500"
         className={cn(
            "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
         )}
         alt="thumbnail"
      />
   );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
   return (
      <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
         <motion.div
            initial={{
               opacity: 0,
            }}
            animate={{
               opacity: 0.6,
            }}
            className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
         />
         <motion.div
            layoutId={`content-${selected?.id}`}
            initial={{
               opacity: 0,
               y: 100,
            }}
            animate={{
               opacity: 1,
               y: 0,
            }}
            exit={{
               opacity: 0,
               y: 100,
            }}
            transition={{
               duration: 0.3,
               ease: "easeInOut",
            }}
            className="relative px-8 pb-4 z-[70]"
         >
            <div>
               <p className="font-bold md:text-4xl text-xl text-white">
                  {selected?.title}
               </p>
               <p className="font-normal text-[15px] my-4 max-w-lg text-neutral-200">
                  {selected?.descriptions}
               </p>
               <div className="flex gap-2">
                  <a href={selected?.link} target="_blank" rel="noopener noreferrer">
                     <button className="text-white text-[15px] border border-white rounded-md px-4 py-1 cursor-pointer">
                        Live Demo
                     </button>
                  </a>
                  <a href={selected?.githubLink} target="_blank" rel="noopener noreferrer">
                     <button className="text-white text-[15px] border border-white rounded-md px-4 py-1 cursor-pointer">
                        Github
                     </button>
                  </a>
               </div>
            </div>
         </motion.div>
      </div>
   );
};
