import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Bell, Shield, Mail, Phone, MapPin, Calendar, Globe, Camera } from 'lucide-react';
import Image from 'next/image';

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1
      }
   }
};

const itemVariants = {
   hidden: { opacity: 0, x: -20 },
   visible: { opacity: 1, x: 0 }
};

const boxVariants = {
   hidden: { opacity: 0, y: 20, scale: 0.9 },
   visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      // transition: {
      //    type: "spring",
      //    stiffness: 300,
      //    damping: 30
      // }
   }
};

const boxContainerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.15
      }
   }
};

export const ProfileContent = () => {
   const profileBoxes = [
      {
         icon: "/skill/javascript.png",
         title: "JavaScript",
         description: "Core language for building dynamic web apps. I use it across frontend and backend to create seamless experiences."
      },
      {
         icon: "/skill/typescript.png",
         title: "TypeScript",
         description: "	Strongly-typed superset of JavaScript that improves code safety and maintainability in large-scale projects."
      },
      {
         icon: "/skill/reactjs.png",
         title: "ReactJs",
         description: "UI library I use to build fast, interactive, and component-driven interfaces for modern web applications."
      },
      {
         icon: "/skill/nextjs.png",
         title: "NextJs",
         description: "React framework for SSR and SSG. Ideal for SEO, performance, and scalable production-grade apps."
      },
      {
         icon: "/skill/node-js.png",
         title: "Nodejs",
         description: "Runtime environment for backend development. Powers my APIs, real-time services, and microservices."
      },
      {
         icon: "/skill/express-js.png",
         title: "ExpressJs",
         description: "Lightweight Node.js web framework I use to build RESTful APIs with speed and flexibility."
      },
      {
         icon: "/skill/mongodb.png",
         title: "Mongodb",
         description: "NoSQL database used for storing unstructured or flexible data models, ideal for agile applications."
      },
      {
         icon: "/skill/Postgresql.png",
         title: "Postgrsql",
         description: "Powerful open-source relational database for complex data operations and strict schema structure."
      },
      {
         icon: "/skill/Git.png",
         title: "Git & GitHub",
         description: "Version control system and platform for managing, collaborating, and deploying code across projects."
      },

      // 
      // {
      //    icon: "/skill/Git.png",
      //    title: "NestJS",
      //    description: "A scalable, TypeScript-first framework built on Express, ideal for building structured and maintainable server-side apps."
      // },
      // {
      //    icon: "/skill/Git.png",
      //    title: "Redis",
      //    description: "An in-memory data store I use for caching, real-time features, and improving backend performance."
      // },
      // {
      //    icon: "/skill/docker.png",
      //    title: "Docker",
      //    description: "A containerization tool that ensures consistent environments across development and production workflows."
      // },
      // {
      //    icon: "/skill/Git.png",
      //    title: "AWS S3",
      //    description: "Cloud-based object storage service I use for storing user uploads, static files, backups, and media at scale."
      // },
   ];

   return (
      <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="space-y-6"
      >
         {/* <motion.h2 variants={itemVariants} className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Profile Settings
         </motion.h2> */}

         <motion.div
            variants={boxContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
         >
            {profileBoxes.map((box, index) => (
               <motion.div
                  key={index}
                  variants={boxVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800 cursor-pointer"
               >
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 text-white rounded-lg">
                        <Image src={box.icon as string} width={24} height={24} alt={box.title} />
                     </div>
                     <h3 className="font-semibold text-slate-900 dark:text-slate-100">{box.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{box.description}</p>
               </motion.div>
            ))}
         </motion.div>
      </motion.div>
   );
};






export const SettingsContent = () => {
   const settingsBoxes = [
      {
         icon: "/skill/javascript.png",
         title: "JavaScript",
         description: "Core language for building dynamic web apps. I use it across frontend and backend to create seamless experiences."
      },
      {
         icon: "/skill/typescript.png",
         title: "TypeScript",
         description: "	Strongly-typed superset of JavaScript that improves code safety and maintainability in large-scale projects."
      },
      {
         icon: "/skill/reactjs.png",
         title: "ReactJs",
         description: "UI library I use to build fast, interactive, and component-driven interfaces for modern web applications."
      },
      {
         icon: "/skill/nextjs.png",
         title: "NextJs",
         description: "React framework for SSR and SSG. Ideal for SEO, performance, and scalable production-grade apps."
      },
   ];

   return (
      <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="space-y-6"
      >
         {/* <motion.h2 variants={itemVariants} className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Application Settings
         </motion.h2> */}

         <motion.div
            variants={boxContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
         >
            {settingsBoxes.map((box, index) => (
               <motion.div
                  key={index}
                  variants={boxVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800 cursor-pointer"
               >
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 text-white rounded-lg">
                        <Image src={box.icon as string} width={24} height={24} alt={box.title} />
                     </div>
                     <h3 className="font-semibold text-slate-900 dark:text-slate-100">{box.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{box.description}</p>
               </motion.div>
            ))}
         </motion.div>
      </motion.div>
   );
};

export const NotificationsContent = () => {
   const notificationBoxes = [
      {
         icon: "/skill/node-js.png",
         title: "Nodejs",
         description: "Runtime environment for backend development. Powers my APIs, real-time services, and microservices."
      },
      {
         icon: "/skill/express-js.png",
         title: "ExpressJs",
         description: "Lightweight Node.js web framework I use to build RESTful APIs with speed and flexibility."
      },
   ];

   return (
      <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="space-y-6"
      >
         {/* <motion.h2 variants={itemVariants} className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Notification Preferences
         </motion.h2> */}

         <motion.div
            variants={boxContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
         >
            {notificationBoxes.map((box, index) => (
               <motion.div
                  key={index}
                  variants={boxVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-200 dark:border-purple-800 cursor-pointer"
               >
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 text-white rounded-lg">
                        <Image src={box.icon as string} width={24} height={24} alt={box.title} />
                     </div>
                     <h3 className="font-semibold text-slate-900 dark:text-slate-100">{box.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{box.description}</p>
               </motion.div>
            ))}
         </motion.div>
      </motion.div>
   );
};

export const SecurityContent = () => {
   const securityBoxes = [
      {
         icon: "/skill/mongodb.png",
         title: "Mongodb",
         description: "NoSQL database used for storing unstructured or flexible data models, ideal for agile applications."
      },
      {
         icon: "/skill/Postgresql.png",
         title: "Postgrsql",
         description: "Powerful open-source relational database for complex data operations and strict schema structure."
      },
   ];

   return (
      <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="space-y-6"
      >
         {/* <motion.h2 variants={itemVariants} className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Security & Privacy
         </motion.h2> */}

         <motion.div
            variants={boxContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
         >
            {securityBoxes.map((box, index) => (
               <motion.div
                  key={index}
                  variants={boxVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border border-red-200 dark:border-red-800 cursor-pointer"
               >
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 text-white rounded-lg">
                        <Image src={box.icon as string} width={24} height={24} alt={box.title} />
                     </div>
                     <h3 className="font-semibold text-slate-900 dark:text-slate-100">{box.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{box.description}</p>
               </motion.div>
            ))}
         </motion.div>
      </motion.div>
   );
};