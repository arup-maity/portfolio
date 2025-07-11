"use client";
import React from "react";
import {
   motion,
   useScroll,
   useTransform,
   useSpring,
   MotionValue
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
   products
}: {
   products: {
      title: string;
      link: string;
      thumbnail: string;
   }[];
}) => {
   const firstRow = products.slice(0, 5);
   const secondRow = products.slice(5, 10);
   const ref = React.useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
   });

   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

   const translateX = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, 1000]),
      springConfig
   );
   const translateXReverse = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, -1000]),
      springConfig
   );
   const rotateX = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [15, 0]),
      springConfig
   );
   const opacity = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
      springConfig
   );
   const rotateZ = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [20, 0]),
      springConfig
   );
   const translateY = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [-650, -270]),
      springConfig
   );
   return (
      <div
         ref={ref}
         className="h-[140vh] overflow-hidden  antialiased relative self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
         <Header />
         <motion.div
            style={{
               rotateX,
               rotateZ,
               translateY,
               opacity
            }}
            className=""
         >
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 mb-6">
               {firstRow.map(product =>
                  <ProductCard
                     product={product}
                     translate={translateX}
                     key={product.title}
                  />
               )}
            </motion.div>
            <motion.div className="flex flex-row space-x-6 mb-5">
               {secondRow.map(product =>
                  <ProductCard
                     product={product}
                     translate={translateXReverse}
                     key={product.title}
                  />
               )}
            </motion.div>
            <motion.div className="flex justify-center">
               <Link href='/' className="text-base text-gray-700 border border-gray-700 py-1 px-6 rounded hover:-translate-y-1 transition-transform duration-100 ease-linear">
                  View All
               </Link>
            </motion.div>
         </motion.div>
      </div>
   );
};

export const Header = () => {
   return (
      <div className="w-full h-screen inline-flex justify-center items-center">
         <div className="max-w-7xl mx-auto px-4 ">
            <h1 className="text-2xl md:text-5xl font-bold dark:text-white">
               MY RECENT PROJECT
            </h1>
            <p className="max-w-2xl text-base mt-8 dark:text-neutral-200">
               We build beautiful products with the latest technologies and
               frameworks. We are a team of passionate developers and designers that
               love to build amazing products.
            </p>
         </div>
      </div>
   );
};

export const ProductCard = ({
   product,
   translate
}: {
   product: {
      title: string;
      link: string;
      thumbnail: string;
   };
   translate: MotionValue<number>;
}) => {
   return (
      <motion.div
         style={{
            x: translate
         }}
         whileHover={{
            y: -10
         }}
         key={product.title}
         className="group/product h-[250px] w-[30rem] relative flex-shrink-0"
      >
         <Link
            href={product.link}
            className="block group-hover/product:shadow-2xl "
         >
            <Image
               src={product.thumbnail}
               height="600"
               width="600"
               className="object-cover object-left-top absolute h-full w-full inset-0"
               alt={product.title}
            />
         </Link>
         <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
         <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
            {product.title}
         </h2>
      </motion.div>
   );
};
