
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Tab {
   id: string;
   label: string;
   content: React.ReactNode;
   icon?: React.ReactNode;
}

interface AnimatedTabsProps {
   tabs: Tab[];
   defaultTab?: string;
   className?: string;
}

const AnimatedTabs = ({ tabs, defaultTab, className }: AnimatedTabsProps) => {
   const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

   const activeTabData = tabs.find(tab => tab.id === activeTab);

   return (
      <div className={cn("w-full  mx-auto", className)}>
         {/* Tab Navigation */}
         <div className="relative">
            <div className="flex flex-wrap justify-center space-x-1">
               {tabs.map((tab) => (
                  <button
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id)}
                     className={cn(
                        "relative px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2",
                        "focus:outline-none",
                        activeTab === tab.id
                           ? "text-blue-600 dark:text-blue-400"
                           : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                     )}
                  >
                     {/* Active tab background */}
                     {activeTab === tab.id && (
                        <motion.div
                           layoutId="activeTab"
                           className="absolute inset-0 bg-white dark:bg-slate-700 rounded-lg shadow-sm"
                           initial={false}
                           transition={{
                              type: "spring",
                              stiffness: 800,
                              damping: 50
                           }}
                        />
                     )}

                     {/* Tab content */}
                     <span className="relative z-10 flex items-center gap-2">
                        {/* {tab.icon && (
                           <motion.span
                              animate={{ rotate: activeTab === tab.id ? 360 : 0 }}
                              transition={{ duration: 0.3 }}
                           >
                              {tab.icon}
                           </motion.span>
                        )} */}
                        {tab.label}
                     </span>
                  </button>
               ))}
            </div>
         </div>

         {/* Tab Content */}
         <div className="mt-8">
            <AnimatePresence mode="wait">
               <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                     type: "spring",
                     stiffness: 800,
                     damping: 50
                  }}
                  className=""
               >
                  {activeTabData?.content}
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
};

export default AnimatedTabs;