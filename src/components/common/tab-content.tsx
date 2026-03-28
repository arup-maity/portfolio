import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { skillList } from "@/content/skill-list";

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const boxVariants = {
   hidden: { opacity: 0, y: 20, scale: 0.9 },
   visible: {
      opacity: 1,
      y: 0,
      scale: 1,
   },
};

const boxContainerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.15,
      },
   },
};

type ColorTheme = "blue" | "green" | "purple" | "red";
type Category = "all" | "frontend" | "backend" | "database";

interface SkillTabContentProps {
   category: Category;
   colorTheme: ColorTheme;
}

const colorThemes = {
   blue: {
      from: "from-blue-50",
      to: "to-indigo-100",
      darkFrom: "dark:from-blue-900/20",
      darkTo: "dark:to-indigo-900/20",
      border: "border-blue-200",
      darkBorder: "dark:border-blue-800",
   },
   green: {
      from: "from-green-50",
      to: "to-emerald-100",
      darkFrom: "dark:from-green-900/20",
      darkTo: "dark:to-emerald-900/20",
      border: "border-green-200",
      darkBorder: "dark:border-green-800",
   },
   purple: {
      from: "from-purple-50",
      to: "to-violet-100",
      darkFrom: "dark:from-purple-900/20",
      darkTo: "dark:to-violet-900/20",
      border: "border-purple-200",
      darkBorder: "dark:border-purple-800",
   },
   red: {
      from: "from-red-50",
      to: "to-pink-100",
      darkFrom: "dark:from-red-900/20",
      darkTo: "dark:to-pink-900/20",
      border: "border-red-200",
      darkBorder: "dark:border-red-800",
   },
};

export const SkillTabContent = ({ category, colorTheme }: SkillTabContentProps) => {
   const filteredBoxes = skillList.filter((skill) => skill.showIn.includes(category));
   const theme = colorThemes[colorTheme];

   return (
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
         <motion.div variants={boxContainerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBoxes.map((box, index) => (
               <motion.div
                  key={index}
                  variants={boxVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-6 bg-gradient-to-br ${theme.from} ${theme.to} ${theme.darkFrom} ${theme.darkTo} rounded-xl border ${theme.border} ${theme.darkBorder} cursor-pointer`}>
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

// Convenience exports for backward compatibility
export const FrontendContent = () => <SkillTabContent category="frontend" colorTheme="blue" />;
export const BackendContent = () => <SkillTabContent category="backend" colorTheme="green" />;
export const DatabaseContent = () => <SkillTabContent category="database" colorTheme="purple" />;
export const AllContent = () => <SkillTabContent category="all" colorTheme="red" />;
