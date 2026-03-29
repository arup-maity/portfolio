"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroSections = () => {
   const [text, setText] = useState("Web Developer");
   const [isDeleting, setIsDeleting] = useState(false);
   const [loopNum, setLoopNum] = useState(0);
   const [typingSpeed, setTypingSpeed] = useState(150);

   useEffect(() => {
      const texts = ["Web Developer", "MERN Developer", "Full Stack Developer"];

      const handleTyping = () => {
         const currentText = texts[loopNum % texts.length];
         const updatedText = isDeleting ? currentText.substring(0, text.length - 1) : currentText.substring(0, text.length + 1);

         setText(updatedText);

         if (!isDeleting && updatedText === currentText) {
            // Finished typing, wait before deleting
            setTimeout(() => setIsDeleting(true), 1500);
            setTypingSpeed(100); // Faster when deleting
         } else if (isDeleting && updatedText === "") {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(150); // Normal typing speed
         } else {
            // Continue typing/deleting
            setTypingSpeed(isDeleting ? 50 : 150);
         }
      };

      const timeoutId = setTimeout(handleTyping, typingSpeed);

      // Clean up the timeout on component unmount
      return () => clearTimeout(timeoutId);
   }, [text, isDeleting, loopNum, typingSpeed]);

   return (
      <div className="relative  bg-center bg-no-repeat bg-cover py-40" style={{ backgroundImage: "url(/square.png)" }}>
         <div className="container-webx h-full flex items-center">
            <div className="w-full lg:w-8/12">
               <div className="text-black flex flex-col justify-center max-md:pt-20">
                  <h1 className="text-4xl md:text-6xl leading-tight font-lato font-bold uppercase mb-3">HI, I&apos;M ARUP!</h1>
                  <h2 className="text-xl md:text-4xl xl:text-5xl leading-tight font-lato font-bold uppercase mb-8">
                     Creative <span className="text-[#577BFF]">{text}</span>
                  </h2>
                  <p className="text-base font-lato font-medium text-[#a2a2a2] break-normal mb-10 md:mb-20">
                     I&apos;m a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong
                     foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly
                     interfaces that captivate and engage.
                  </p>
                  <div className="text-black">
                     <p className="text-base font-medium text-theme-black opacity-60 mb-4 tracking-widest">BEST SKILL ON</p>
                     <ul className="flex flex-wrap gap-4">
                        <li className="inline-flex w-14 h-14 justify-center bg-[#EAEEFF] hover:bg-[#577BFF] rounded-full">
                           <Image src="/react.svg" width={30} height={30} alt="webx" />
                        </li>
                        <li className="inline-flex w-14 h-14 justify-center items-center bg-[#EAEEFF] hover:bg-[#577BFF] rounded-full">
                           <Image src="/next.svg" width={35} height={35} alt="webx" />
                        </li>
                        <li className="inline-flex w-14 h-14 justify-center bg-[#EAEEFF] hover:bg-[#577BFF] rounded-full">
                           <Image src="/tailwind.svg" width={35} height={35} alt="webx" />
                        </li>
                        <li className="inline-flex w-14 h-14 justify-center items-center bg-[#EAEEFF] hover:bg-[#577BFF] rounded-full">
                           <Image src="/nodejs.svg" width={30} height={30} alt="webx" />
                        </li>
                        <li className="inline-flex w-14 h-14 justify-center items-center bg-[#EAEEFF] hover:bg-[#577BFF] rounded-full">
                           <Image src="/postgresql.svg" width={30} height={30} alt="" />
                        </li>
                        <li className="inline-flex w-14 h-14 justify-center items-center bg-[#EAEEFF] hover:bg-[#577BFF] rounded-full">
                           <Image src="/mongodb.svg" width={40} height={40} alt="" />
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="absolute -bottom-7 left-[10%] animate-bounce z-10" style={{ animationDuration: "4s" }}>
            <Image src="/bnr-szape3.png" width={25} height={40} alt="" className="w-6 !h-auto" />
         </div>
         <div className="absolute top-[12%] right-[13%] z-10 animate-bounce" style={{ animationDuration: "4s" }}>
            <Image src="/arow.png" width={150} height={100} alt="" className="!h-auto rotate-180" />
         </div>
      </div>
   );
};

export default HeroSections;
