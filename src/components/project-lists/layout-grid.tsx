"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
   id: number;
   content: React.ReactNode | string;
   className: string;
   thumbnail: string;
   title: string;
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
            {selected?.content}
         </motion.div>
      </div>
   );
};
